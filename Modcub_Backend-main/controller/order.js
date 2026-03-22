const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const Order = require("../model/order");
const Shop = require("../model/shop");
const Product = require("../model/product");
const { isExpired } = require("../middleware/auth");
const { getOtp } = require("../helper/helper");
// create new order
router.post(
    "/create-order",
    catchAsyncErrors(async (req, res, next) => {
        // console.log("-----------------------------------------");
        // console.log("create order is working");
        // console.log("-----------------------------------------");
        try {
            const { cart, shippingAddress, user, totalPrice, paymentInfo } =
                req.body;

            //   group cart items by shopId
            const shopItemsMap = new Map();

            for (const item of cart) {
                const shopId = item.shopId;
                if (!shopItemsMap.has(shopId)) {
                    shopItemsMap.set(shopId, []);
                }
                shopItemsMap.get(shopId).push(item);
            }

            // create an order for each shop
            const orders = [];

            for (const [shopId, items] of shopItemsMap) {
                const otp = getOtp(); // Generate OTP

                const order = await Order.create({
                    cart: items,
                    shippingAddress,
                    user,
                    totalPrice,
                    paymentInfo,
                    otp,
                });
                orders.push(order);
                 // Update stock and sold count for each product in the order
                for (const item of items) {
                    await Product.findByIdAndUpdate(
                        item._id,
                        { $inc: { stock: -1, sold_out: 1 } }, // Reduce stock by 1 and increment sold_out by 1
                        { new: true }
                    );
                }
            }

            res.status(201).json({
                success: true,
                orders,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// get all orders of user
router.get(
    "/get-all-orders/:userId",
    catchAsyncErrors(async (req, res, next) => {
        // console.log("hello");
        try {
            const orders = await Order.find({
                "user._id": req.params.userId,
            },
            { otp: 0, otpVerified: 0 }
        ).sort({
                createdAt: -1,
            });
            console.log("🚀 ~ catchAsyncErrors ~ orders:", orders)

            res.status(200).json({
                success: true,
                orders,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// get all orders of seller
router.get(
    "/get-seller-all-orders/:shopId",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const orders = await Order.find({
                "cart.shopId": req.params.shopId,
            },
            { otp: 0, otpVerified: 0 }
        ).sort({
                createdAt: -1,
            });

            res.status(200).json({
                success: true,
                orders,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// update order status for seller
router.put(
    "/update-order-status/:id",
    isSeller,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const order = await Order.findById(req.params.id);
            console.log(order);
            if (!order) {
                return next(
                    new ErrorHandler("Order not found with this id", 400)
                );
            }
            if (req.body.status === "Transferred to delivery partner") {
                order.cart.forEach(async (o) => {
                    await updateOrder(o._id, o.qty);
                });
            }

            order.status = req.body.status;

            if (req.body.status === "Delivered") {
                order.deliveredAt = Date.now();
                order.paymentInfo.status = "Succeeded";
                const serviceCharge = order.totalPrice * 0.07;
                await updateSellerInfo(order.totalPrice - serviceCharge);
            }

            await order.save({ validateBeforeSave: false });

            res.status(200).json({
                success: true,
                order,
            });

            async function updateOrder(id, qty) {
                const product = await Product.findById(id);

                product.stock -= qty;
                product.sold_out += qty;

                await product.save({ validateBeforeSave: false });
            }

            async function updateSellerInfo(amount) {
                const seller = await Shop.findById(req.seller.id);

                seller.availableBalance = seller.availableBalance + amount;

                await seller.save();
            }
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// give a refund ----- user
router.put(
    "/order-refund/:id",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const order = await Order.findById(req.params.id);

            if (!order) {
                return next(
                    new ErrorHandler("Order not found with this id", 400)
                );
            }

            order.status = req.body.status;

            await order.save({ validateBeforeSave: false });

            res.status(200).json({
                success: true,
                order,
                message: "Order Refund Request successfully!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// accept the refund ---- seller
router.put(
    "/order-refund-success/:id",
    isSeller,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const order = await Order.findById(req.params.id);

            if (!order) {
                return next(
                    new ErrorHandler("Order not found with this id", 400)
                );
            }

            order.status = req.body.status;

            await order.save();

            res.status(200).json({
                success: true,
                message: "Order Refund successfull!",
            });

            if (req.body.status === "Refund Success") {
                order.cart.forEach(async (o) => {
                    await updateOrder(o._id, o.qty);
                });
            }

            async function updateOrder(id, qty) {
                const product = await Product.findById(id);

                product.stock += qty;
                product.sold_out -= qty;

                await product.save({ validateBeforeSave: false });
            }
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);


// all orders --- for admin
router.get(
    "/admin-all-orders",
    isAuthenticated,
    isAdmin("Admin", "SuperAdmin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const orders = await Order.find().sort({
                deliveredAt: -1,
                createdAt: -1,
            });
            res.status(201).json({
                success: true,
                orders,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);
// Verify OTP
router.post(
    "/verify-otp/:orderId",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const { otp } = req.body;
            const order = await Order.findById(req.params.orderId);

            if (!order) {
                return next(new ErrorHandler("Order not found with this id", 400));
            }

            if (order.otpVerified) {
                return next(new ErrorHandler("OTP already verified", 400));
            }

            if (order.otp !== otp) {
                return next(new ErrorHandler("Invalid OTP", 400));
            }

            // OTP is valid
            order.otpVerified = true;
            await order.save();

            res.status(200).json({
                success: true,
                message: "OTP verified successfully!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);


module.exports = router;

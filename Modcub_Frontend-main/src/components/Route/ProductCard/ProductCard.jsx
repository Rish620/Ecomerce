import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";
import { Button } from "flowbite-react";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  const isInCart = cart && cart.find((item) => item._id === data._id);

  return (
    <>
      <div
        className="min-w-[250px] max-h-[350px] bg-white rounded-lg m-3  p-3 relative cursor-pointer duration-[0.5s] ease-in-out hover:shadow-[0_0_25px_-10px_rgba(0,0,0,0.3)] 
      max-800px:min-w-[200px] max-800px:max-h-[290px] max-450px:min-w-[120px] max-450px:max-h-[230px] max-450px:m-1 max-450px:p-1 max-800px:border"
      >
        <div className="w-full h-full flex flex-col justify-end max-450px:justify-center">
          <Link
            to={`${
              isEvent === true
                ? `/product/${data._id}?isEvent=true`
                : `/product/${data._id}`
            }`}
            target="_blank"
          >
            <img
              src={`${data.images && data.images[0]?.url}`}
              alt=""
              className="w-full h-[170px] object-contain max-800px:h-[140px] max-450px:h-[70px]"
            />
          </Link>
          {/* <Link to={`/shop/preview/${data?.shop._id}`}>
                    <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
                </Link> */}
          <Link
            to={`${
              isEvent === true
                ? `/product/${data._id}?isEvent=true`
                : `/product/${data._id}`
            }`}
          >
            <h4 className="h-[50px] pb-3 mt-2 font-[500] max-1000px:h-[50px] max-1000px:overflow-y-hidden max-800px:text-md max-450px:text-[12px] max-450px:h-[40px]">
              {data.name.length > 40
                ? data.name.slice(0, 45) + "..."
                : data.name}
            </h4>

            {/* <div className="flex">
                        <Ratings rating={data?.ratings} />
                    </div> */}

            <div className="py-2 flex items-center justify-between max-450px:py-1">
              <div className="flex items-center max-450px:flex-col">
                <h5
                  className={`${styles.productDiscountPrice} max-800px:font-[500] max-450px:text-sm`}
                >
                  {data.originalPrice === 0
                    ? data.originalPrice
                    : data.discountPrice}{" "}
                  Rs
                </h5>
                <h4
                  className={`${styles.price} pl-3 max-800px:font-[600] max-450px:text-xs max-450px:pl-0`}
                >
                  {data.originalPrice ? data.originalPrice + " " + " Rs" : null}
                </h4>
              </div>
              {/* <span className="font-[400] text-[17px] text-[#68d284]">
                            {data?.sold_out} sold
                        </span> */}
              {/* <button
              type="button"
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Buy
            </button>{" "} */}
            </div>
          </Link>
          <button
            type="button"
            className={`bg-[#005DC9] text-white h-[40px] w-[150px] rounded-lg max-800px:h-[35px] max-800px:w-[120px] max-450px:h-[25px] max-450px:text-xs max-450px:w-[100px] max-450px:w-full ${
              isInCart ? "cursor-not-allowed bg-gray-500" : ""
            }`}
            onClick={() => addToCartHandler(data._id)}
            disabled={isInCart}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </button>
        </div>

        {/* side options */}
        {/* <div>
                    {click ? (
                        <AiFillHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => removeFromWishlistHandler(data)}
                            color={click ? "red" : "#333"}
                            title="Remove from wishlist"
                        />
                    ) : (
                        <AiOutlineHeart
                            size={22}
                            className="cursor-pointer absolute right-2 top-5"
                            onClick={() => addToWishlistHandler(data)}
                            color={click ? "red" : "#333"}
                            title="Add to wishlist"
                        />
                    )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-2 top-14"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title="Quick view"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-2 top-24"
                        onClick={() => addToCartHandler(data._id)}
                        color="#444"
                        title="Add to cart"
                    />
                    {open ? (
                        <ProductDetailsCard setOpen={setOpen} data={data} />
                    ) : null}
                </div> */}
      </div>
    </>
  );
};

export default ProductCard;

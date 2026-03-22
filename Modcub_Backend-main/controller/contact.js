const contact = require("../model/contact");
const { isAdmin , isAuthenticated} = require("../middleware/auth");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const express = require("express");
const router = express.Router();

// create new conact

router.post(
    "/create-new-contact",
    catchAsyncErrors(async (req, res, next) => {
        console.log("jhgsdjgds",req.body);
        // check validation name email and mssage is requored
        if (!req.body.name || !req.body.email || !req.body.message) {
            return next(new ErrorHandler("Please enter all the fields", 400));
        }
        try {
            const contacts = await contact.create(req.body);
            console.log("🚀 ~ catchAsyncErrors ~ contact:", contact)
            res.status(201).json({
                success: true,
                contacts,
            }); 
        } catch (error) {       
            return next(new ErrorHandler(error, 400));
        }
    })
);

// get all contacts
router.get(
    "/get-all-contacts",
    // isAuthenticated,
    // isAdmin("Admin", "SuperAdmin"),
    catchAsyncErrors(async (_req, res, next) => {
        try {
            const contacts = await contact.find();
            console.log("🚀 ~ catchAsyncErrors ~ contacts:", contacts)
            res.status(201).json({
                success: true,
                contacts,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);

module.exports = router;

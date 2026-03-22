const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required:[true,"Please enter your group name!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
    },
    message: {
      type: String,

    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", contactSchema);

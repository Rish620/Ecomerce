const jwt = require("jsonwebtoken");
const uuid = require("uuid");
require("dotenv").config();
// const twilio = require("twilio");

// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

exports.getAccessToken = (body) => {
  return jwt.sign(body, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY_DAY,
  });
};

exports.getRefreshToken = (body) => {
  return jwt.sign(body, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY_DAY,
  });
};

exports.getOtp = () => {
  return Math.floor(
    Math.pow(10, 6 - 1) +
      Math.random() * (Math.pow(10, 6) - Math.pow(10, 6 - 1) - 1)
  );
};

exports.generateUsername = (name) => {
  const randomUuid = uuid.v4().replace(/-/g, ""); // Generate a random UUID and remove dashes
  const alphanumericUuid = randomUuid.substring(0, 8); // Extract the first part of the UUID
  return `${name}_${alphanumericUuid}`;
};

// send otp to phone number
// const client = twilio(accountSid, authToken);

// exports.sendSms = async (phone, otp) => {
//   try {
//     await client.messages.create({
//       body: `Your OTP for ModCub Product recevery is: ${otp}`,
//       from: twilioPhoneNumber,
//     //   to: `+91${phone}`,
//     to: +917903566217,
//     });
//     console.log(`OTP sent to ${phone} successfully.`);
//   } catch (error) {
//     console.error(`Error sending OTP to ${phone}:`, error);
//     throw new Error("Failed to send OTP. Please try again later.");
//   }
// };


exports.capitalizeFirstLetter = (str) =>{
  // Check if the input is a valid string
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  
  // Capitalize the first letter and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}


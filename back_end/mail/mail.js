const nodemailer = require("nodemailer");
const dotenv=require('dotenv')
const asyncHandler = require('express-async-handler');
const expressAsyncHandler = require("express-async-handler");
dotenv.config()
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail=expressAsyncHandler(async(req,res)=>{
    const {emailMail,subject,message}=req.body
    let mailOptions={
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message,
    }
})

module.exports=(sendEmail)

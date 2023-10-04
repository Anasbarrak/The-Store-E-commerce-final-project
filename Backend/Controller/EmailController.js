const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'barrak.mohamedanas@gmail.com', // generated ethereal user
    pass: 'joyb rcuh voaw nuhx', // generated ethereal password
  },
});

const sendEmail = (async (req, res) => { 
  const { email, subject, message } = req.body;
  console.log (email, subject, message);

  var mailOptions = {
    from: email,
    to: "barrak.mohamedanas@gmail.com",
    subject: subject,
    text: message,
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
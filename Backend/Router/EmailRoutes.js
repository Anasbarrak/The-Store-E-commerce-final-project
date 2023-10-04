const express = require("express");
const Emailrouter = express.Router();

const { sendEmail } = require("../Controller/EmailController");

Emailrouter.post("/contact", sendEmail);

module.exports = Emailrouter;
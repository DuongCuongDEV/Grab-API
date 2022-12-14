"sendEmail strict";
require("dotenv").config()
const nodemailer = require("nodemailer");
const user = {
    email : process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
}
const SendEmail = function (sendEmail) {
    this.email = sendEmail.email
}

SendEmail.create = function (email, result) {
    connection.connect(() => {
        async function sendMessage() {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                service: 'gmail',
                port: "465",
                secure: true,
                pool: false,
                auth: {
                    user: user.email,
                    pass: user.pass
                }
            })
            let mailOptions = {
                from: '"Grab" no-reply@gmail.com',
                to: `${email}`,
                subject: 'Sending message from Grab',
                text: 'Hello',
                    html: `<a href="http://facebook.com">Need to reset password</a>`
            }
            await transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                    result(error, null);
                } else {
                    console.log('Email sent: ' + info.response)
                    result(null, "send success!!");
                }
            })
            transporter.close();
        }
        sendMessage();
    })
}

module.exports = SendEmail;
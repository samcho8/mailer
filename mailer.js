const express = require("express");
const app = express();
const schedule = require('node-schedule');
const dotenv = require('dotenv').config();

app.use(express.json());

const nodemailer = require('nodemailer')

const PORT = 5000;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sctaskmanager251@gmail.com",
        pass: process.env.MAILPASS
    },
});

app.post('/send-mail', async (req, res) => {
    const {from, to, htmlOptional, text, subject, scheduledDate} = req.body;
    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: htmlOptional
    };
    const day = Date.parse(scheduledDate);
    const job = schedule.scheduleJob(day, () => {
        transporter.sendMail(mailOptions);
    });
    res.send(`Email from ${from} to ${to} will be sent on ${scheduledDate}`);
});

app.listen(PORT);
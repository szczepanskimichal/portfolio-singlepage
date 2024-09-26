const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  // Konfiguracja transportera
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "michalszczepanski07@gmail.com",
      pass: "781092431",
    },
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "michalszczepanski07@gmail.com", // list of receivers
      subject: "New Message from Contact Form", // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

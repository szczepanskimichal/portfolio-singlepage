const nodemailer = require("nodemailer");

const CONTACT_EMAIL = "michalszczepanski07@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseBody(body) {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { from_name, email, message } = parseBody(req.body);

  if (!from_name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (!process.env.GMAIL_APP_PASSWORD) {
    return res.status(500).json({ message: "Email server is not configured" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: CONTACT_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${from_name}`,
      text: `Name: ${from_name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send email", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
};
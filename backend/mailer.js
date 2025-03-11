const nodemailer = require("nodemailer");
require("dotenv").config();

// Increase Event Listener limit to avoid warnings
require("events").EventEmitter.defaultMaxListeners = 15;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  connectionTimeout: 10000, // 10 seconds timeout
});

const sendMail = async (formData) => {
  const { firstname, lastname, email, message } = formData;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "sonawaneshivtej12@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        error.code === "ETIMEOUT"
          ? "Email request timed out."
          : "Failed to send email.",
    };
  }
};

module.exports = sendMail;

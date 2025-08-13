const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const profileRoutes = require("./routes/profile");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
const allowedOrigins = ["https://rgverse.vercel.app", "http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

// health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
      status: "OK",
      timestamp: new Date().toISOString(),
      message: "RGVerse Backend is running",
    });
  },
);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "rgverse2025@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email.", error });
  }
});

app.use("/api", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

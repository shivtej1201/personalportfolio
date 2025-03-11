require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendMail = require("./mailer");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  const response = await sendMail(req.body);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

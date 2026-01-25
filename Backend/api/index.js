const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const device = require("express-device");
require("dotenv").config();

const connectDB = require("../lib/db");
const loginRoute = require("../routes/LoginRoute");
const urlRoute = require("../routes/UrlRoute");

const app = express();

// ✅ CORS FIRST
app.use(
  cors({
    origin: "https://dacoidlinkshortner.netlify.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.options("*", cors());

// ✅ Body parsing
app.use(express.json());
app.use(device.capture());

// ✅ DB connection (cached)
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// ✅ Routes
app.use("/checkUser", loginRoute);
app.use("/url", urlRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello there" });
});

module.exports = app;
module.exports.handler = serverless(app);

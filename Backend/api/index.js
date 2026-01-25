const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const device = require("express-device");
require("dotenv").config();

const loginRoute = require("../routes/LoginRoute");
const urlRoutr = require("../routes/UrlRoute");

const app = express();

app.use(
  cors({
    origin: ["https://dacoidlinkshortner.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(device.capture());
app.use("/checkUser", loginRoute);
app.use("/url", urlRoutr);
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello there" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected successfully"))
  .catch((error) => console.log(error));

module.exports = app;
module.exports.handler = serverless(app);

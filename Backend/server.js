// requiring all the imp dependency
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const device = require("express-device");
require("dotenv").config();
// requiring all the routes
const loginRoute = require("./routes/LoginRoute");
const urlRoutr = require("./routes/UrlRoute");
// setting up the middleware
app.use(cors());
app.use(express.json());
app.use(device.capture());
app.use("/checkUser", loginRoute);
app.use("/url", urlRoutr);
// setting up the home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello there" });
});
// connecting to the database aswell as starting the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected sucessfully");
    app.listen(process.env.PORT, () => {
      console.log(`Backend listning at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

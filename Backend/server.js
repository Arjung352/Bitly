const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const loginRoute = require("./routes/LoginRoute");
const urlRoutr = require("./routes/UrlRoute");
app.use(cors());
app.use(express.json());
app.use("/checkUser", loginRoute);
app.use("/url", urlRoutr);
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello there" });
});
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

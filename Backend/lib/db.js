require("dotenv").config();
const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI, {
    bufferCommands: false,
  });

  isConnected = true;
  console.log("MongoDB connected");
};

module.exports = connectDB;

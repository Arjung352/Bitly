const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number },
        deviceType: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
const Url = mongoose.model("url", urlSchema);
module.exports = Url;

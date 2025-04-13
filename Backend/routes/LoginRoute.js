const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (Email === "intern@dacoid.com" && Password === "Test123") {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "user not available" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;

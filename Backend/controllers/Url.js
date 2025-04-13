const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");
// Function for ShortUrl generation
async function newShoturl(req, res) {
  try {
    const { url, Email } = req.body;
    if (!url) {
      return res.status(400).json({ message: "Please provide a Url" });
    }
    const shortID = nanoid(6);
    await Url.create({
      email: Email,
      shortId: shortID,
      redirectUrl: url,
      visitHistory: [],
    });
    return res.status(200).json({ id: shortID });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
// Function for url redirection
async function routeRedirect(req, res) {
  try {
    const shortId = req.params.shortId;
    const deviceType = req.device.type;
    const entry = await Url.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: { timestamp: Date.now(), deviceType: deviceType },
        },
      }
    );
    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error during redirect:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
// Function for url analytics
async function routeAnalytics(req, res) {
  try {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId });
    res
      .json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      })
      .status(200);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
// function to return all the links created by User
async function allLinksCreatedByUser(req, res) {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "User not registered" });
    }
    const user = await Url.find({ email });
    if (user.length === 0) {
      return res.status(404).json({ message: "No links found for this user" });
    }
    return res.status(200).json({ UserInfo: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
module.exports = {
  newShoturl,
  routeRedirect,
  routeAnalytics,
  allLinksCreatedByUser,
};

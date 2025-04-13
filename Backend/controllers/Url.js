const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");
// Function for ShortUrl generation
async function newShoturl(req, res) {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ message: "Please provide a Url" });
    }
    const shortID = nanoid(6);
    await Url.create({
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

module.exports = { newShoturl, routeRedirect, routeAnalytics };

const nanoid = require("nanoid");
const Url = require("../models/urlModel");
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
      deviceType: "",
      visitHistory: [],
    });
    return res.status(200).json({ id: shortID });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
module.exports = { newShoturl };

const express = require("express");
const router = express.Router();
const {
  newShoturl,
  routeRedirect,
  routeAnalytics,
  allLinksCreatedByUser,
} = require("../controllers/Url");
// route for short url generation
router.post("/urlShortner", newShoturl);
// route for url redirection
router.get("/:shortId", routeRedirect);
// route for url analytics
router.get("/analytics/:shortId", routeAnalytics);
// route for finding all the links made by the user
router.get("/userinfo/:email", allLinksCreatedByUser);
module.exports = router;

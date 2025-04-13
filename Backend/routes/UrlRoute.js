const express = require("express");
const router = express.Router();
const { newShoturl } = require("../controllers/Url");
router.post("/urlShortner", newShoturl);
module.exports = router;

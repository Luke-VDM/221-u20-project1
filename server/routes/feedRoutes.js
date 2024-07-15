const express = require( 'express' );
const router = express.Router();

let feedController = require("../controller/feedController");
const { getAllFeedItems } = require('../model/feedItem');

router.route("/api/feedItem");

module.exports = router;
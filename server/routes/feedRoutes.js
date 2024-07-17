const express = require( 'express' );
const router = express.Router();


let feedController = require("../controller/feedController");
//const { getAllFeedItems } = require('../model/feedItem');

router.route("/")
    .get(feedController.getfeedItems)
    .post(feedController.saveItem);
    

router.route("/:itemId")
    .get(feedController.getfeedItem)
    .patch(feedController.updateItem)
    .delete(feedController.deleteItem)
    .put(feedController.saveItem)
module.exports = router;
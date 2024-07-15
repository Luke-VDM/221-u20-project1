let user = require("../model/feedItem")

exports.getAllfeedItems = (request, response) => {
    response.setHeader("Content-Type", 'application/json');
    response.send(JSON.stringify(feedItemsArray[]));
}

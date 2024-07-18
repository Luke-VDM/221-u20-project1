let feedItem = require('../model/feedItem');

let feedItems = [];

let newfeedItem1 = feedItem.createItem("BREAKING NEWS!!", "Marist ranked #1 Study Abroad program", 'https://www.marist.edu/study-abroad/', 'images/3fivuek6.png');
feedItems.push(newfeedItem1);
let newfeedItem2 = feedItem.createItem("BREAKING NEWS!!", "Andrea Conner Appointed Marist College Vice President of Student Affairs", 'https://www.marist.edu/w/new-vp-student-affairs-2024', 'images/58cuu4jt.png');
feedItems.push(newfeedItem2);
let newfeedItem3 = feedItem.createItem("BREAKING NEWS!!", "Marist Poll Renovation Ushers in New Era of Research and Educational Opportunities", 'https://www.marist.edu/w/marist-poll-renovation-2024', 'images/x1u5z36b.png');
feedItems.push(newfeedItem3);
exports.getfeedItem = (req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.send(JSON.stringify(feedItems[req.params.itemId]));
}

exports.getfeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedItems));
}

exports.saveItem = (req, res) => {
    let newItem = feedItem.createItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    feedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}

exports.deleteItem = (req, res) => {
	feedItems.splice(1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.updateItem = (req, res) => {
	var updatedItem = feedItems;
	if(req.body.title)

		updatedItem.title = req.body.title;
	if(req.body.body)
		updatedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedItem.imageUrl = req.body.imageUrl;

	feedItems = updatedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}
//currentStories.push({
    //Title: 'Marist Named a Top School for Game Design by The Princeton Review',
    //Body: 'The education services company ranked Marist in the top 10 for gaming design in the Northeast for undergraduates and included it on its national top 50 list for the ninth consecutive year.',
   //linkUrl: 'https://example.com/story1',
    //imageUrl: 'images/Game-Design2.png'
//});
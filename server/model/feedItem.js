exports.feedItem = function(title, body, linkUrl, imageUrl) {
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

exports.createItem = function(title, body, linkUrl, imageUrl) {
    return new exports.feedItem(title, body, linkUrl, imageUrl);
};



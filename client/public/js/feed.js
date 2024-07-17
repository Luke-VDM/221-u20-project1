document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

    currentStories.push({
        Title: 'Marist Named a Top School for Game Design by The Princeton Review',
        Body: 'The education services company ranked Marist in the top 10 for gaming design in the Northeast for undergraduates and included it on its national top 50 list for the ninth consecutive year.',
        linkUrl: 'https://www.marist.edu/w/princeton-review-gaming-2024',
        imageUrl: 'images/Game-Design2.png'
    });

    currentStories.push({
        Title: "Announcing New York Stage and Films 2024 Summer Season at Marist",
        Body: 'New York Stage and Film is proud to announce its 2024 Summer Season at Marist College, kicking off this July in Poughkeepsie, NY.',
        linkUrl: 'https://www.marist.edu/w/nysaf-2024-season-announce',
        imageUrl: 'images/Stage-and-Film2.png'
    });

    currentStories.push({
        Title: 'Top Marist Moments of 23-24!',
        Body: 'As we close the book on the 2023-24 academic year, lets take a look at some of your favorite moments as well as a few of ours.',
        linkUrl: 'https://www.marist.edu/w/top-marist-moments-2024',
        imageUrl: 'images/Top-Moments2.png'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 100%; height: 100%;">
                </a>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });
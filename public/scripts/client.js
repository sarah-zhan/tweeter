
/* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];



const renderTweets = function(tweets) {
  // loops through tweets
  const $tweetsContainer = $('.tweets-container');
  for (const tweet of tweets) {
    //  calls createTweetElement for each tweet
    const $tweetContent = createTweetElement(tweet);
    console.log(tweet);
    // takes return value and appends it to the tweets container
    $tweetsContainer.prepend($tweetContent);
  }
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <section class="tweets-container">
      <article>
        <header class="tweets-header">
          <div class="tweets-header-left">
            <img src="${tweet.user.avatars}" >
            <div class="name">${tweet.user.name}</div>
          </div>
          <div class="tweets-header-right">
            <p>${tweet.user.handle}</p>
          </div>
        </header>
        <textarea class="all-tweets" name="" id=""></textarea>
        <footer class="tweets-footer">
          <div class="days">
            <p>${1461115000000 - tweet.created_at} days ago</p>
          </div>
          <div class="tweets-footer-icon">
            <i class="fa-solid fa-flag footer-icon"></i>
            <i class="fa-solid fa-retweet footer-icon"></i>
            <i class="fa-solid fa-heart footer-icon"></i>
          </div>
        </footer>
      </article>
    </section> 
  `);
  return $tweet;
};

renderTweets(data);


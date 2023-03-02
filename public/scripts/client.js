/* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
        <p>${tweet.content.text}</p>
        <footer class="tweets-footer">
          <div class="days">
            <p id="time" class="timeago">${timeago.format(tweet.created_at)}</p>
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

const renderTweets = function(tweets) {
  const $tweetsContainer = $('.tweets-container');
  $tweetsContainer.empty();
  // loops through tweets
  for (const tweet of tweets) {
    //  calls createTweetElement for each tweet
    const $tweetContent = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $tweetsContainer.prepend($tweetContent);
  }
};

const loadTweets = () => {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: (tweets) => {
      renderTweets(tweets);
    }
  });
};

//post the form
const $tweetForm = $('form');
$tweetForm.on('submit', (event) => {
  event.preventDefault();
  const urlencoded = $tweetForm.serialize();

  $.ajax({
    method: 'POST',
    url: '/tweets',
    data: urlencoded,
    success: () => {
      $('#tweet-text').val('');
      $('.counter').text(140);
      loadTweets();
    }
  });
});




loadTweets();








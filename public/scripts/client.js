/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
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
  ]

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $("#tweets-container").empty();
    for (let singleTweet of tweets) {
      const $tweet = createTweetElement(singleTweet);
      $("#tweets-container").prepend($tweet);
    }
}

const createTweetElement = function(tweet) {
  let $tweet = /* Your code for creating the tweet element */
  // ...
  $(`<article class="tweet">
  <header class="article-header">
  <div class="tweet-ID">Avatar
    <h1 class="tweet-Header">Name<h1>
  </div>
    <h1 class="tweet-Handle"> Handle</h1>
  </header>
  <body> 
    <h1 class="tweet-Body"> Content Text</h1> 
  </body
  <footer> 
    <div class="article-Footer">
    <h1 class= tweet-footer>Created At</h1>
    <div class="foot-div">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
  </div>
  </footer>
</article>`);
  return $tweet;
}

renderTweets(data);


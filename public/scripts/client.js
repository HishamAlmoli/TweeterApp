/* 
    Made by: Hisham Almoli
    Updated: Dec 14, 2022
 */



$(document).ready(function () {
    // Render tweets function
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

  // Tweets template
  const createTweetElement = function(tweet) {
    let $tweet = /* Your code for creating the tweet element */
    // ...
    $(`<article class="tweet">
    <header class="article-header">
    <div class="tweet-ID">
      <img class="imageSrc" src=${tweet.user.avatars} alt="Avatars" width="50" height="50"/>
        <h1 class="tweet-Header">${tweet.user.name}<h1>
    </div>
    <h1 class="tweet-Handle"> ${tweet.user.handle}</h1>
    </header>
    <body> 
      <h1 class="tweet-Body"> ${escape(tweet.content.text)}</h1> 
    </body
    <footer> 
      <div class="article-Footer">
      <h1 class= tweet-footer>${timeago.format(tweet.created_at)}</h1>
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
  
  /* Use an escape function to preventing 
    XSS code injection attack */
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  $(".tooLongError").hide();
  $(".contentError").hide();
  $(".newTweetForm").on("submit", function (event) {
    event.preventDefault();
    const content = $(this).serialize();
    const verify = content.slice(5);
    let tweetValue = $(".counter")[0];

    // Form validation
    if (verify.length === 0) {
      $(".tooLongError").slideUp("slow");
      $(".contentError").slideDown("slow");
    } else if (verify === null) {
      $(".tooLongError").slideUp("slow");
      $(".contentError").slideDown("slow");
    } else if (verify.length > 140) {
      $(".contentError").slideUp("slow");
      $(".tooLongError").slideDown("slow");
    } else {
      $(".tooLongError").slideUp("slow");
      $(".contentError").slideUp("slow");
      $.ajax({
        url: "http://localhost:8080/tweets",
        method: "POST",
        data: content,
      })
        .done((result) => {
          loadtweets();
          $("#tweet-text").val("");
          tweetValue.value = 140;
        })
        .fail((err) => console.log(err.message));
    }
  });

  // Get Request via AJAX
  const loadtweets = function () {
    $.ajax({
      url: "/tweets/",
      method: "GET",
    })
      .done(function (result) {
        renderTweets(result);
      })
      .fail((err) => console.log(`Error: ${err.message}`));
  };
  loadtweets();
});


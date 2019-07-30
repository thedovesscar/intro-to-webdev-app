var $tweetbtn = $(".new-tweet-button");

$tweetbtn.click( function() {
	$(".new-tweet-input").val("");

});

// $ajax({
// 	type: "GET",
// 	url:"/ajax",
// 	success: function(data) {
// 		for (var i = 0; i < data.tweets.length; i++) {
// 			appendNewTweet(data.tweets[i]);
// 		}
// 	}
// });

function appendNewTweet(tweet) {
	var newTweet = "<div class='tweet-container'>" + 
		"<div class='tweet-time'>" + new Date(tweet.time).toLocaleSTring() + "</div>" +
		"<div class='tweet-body'>" + tweet.text + "</div>" +
		"</div>";
}
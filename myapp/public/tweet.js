var $tweetbtn = $("#tweet-button");

$tweetbtn.click( function() {
	$.ajax({
		type: "POST",
		url: "/ajax",
		contentType: 'application/json',
		data: JSON.stringify({tweet: $('#new-tweet').val()}),
		success: function(data) {
			prependNewTweet(data);
			$(".new-tweet-input").val("");
		}
	})
});

// $ajax({
// 	type: "GET",
// 	url:"/ajax",
// 	success: function(data) {
// 		for (var i = 0; i < data.tweets.length; i++) {
// 			prependNewTweet(data.tweets[i]);
// 		}
// 	}
// });

function prependNewTweet(tweet) {

	var newTweet = "<div class='tweet-container'>" + 
		"<div class='tweet-time'>" + new Date(tweet.time).toLocaleSTring() + "</div>" +
		"<div class='tweet-body'>" + tweet.text + "</div>" +
		"</div>";

	$("#tweets-section").prepend(newTweet);
}


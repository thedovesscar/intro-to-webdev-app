$.ajax({
	type: "GET",
	url:"/ajax",
	success: function(data) {
		for (var i = 0; i < data.tweets.length; i++) {
			prependNewTweet(data.tweets[i]);
		}
	}
});

function prependNewTweet(data) {

	var newTweet = "<div class='tweet-container'>" + 
		"<div class='tweet-time'>" + new Date(data.time).toLocaleSTring() + "</div>" +
		"<div class='tweet-body'>" + data.text + "</div>" +
		"</div>";
	console.log("here");
	$("#tweets-section").append(newTweet);
	console.log("here");
};


$('#tweet-button').click( function() {
	console.log("here");
	$.ajax({
		type: "POST",
		url: "/ajax",
		contentType: 'application/json',
		data: JSON.stringify({tweet: $('#new-tweet').val()}),
		success: function(data) {
			prependNewTweet(data.tweets[1]);
			$("#new-tweet").text("");
		}
	})
	console.log("here");
});

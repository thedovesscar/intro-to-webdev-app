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
		"<div class='tweet-time'>" + new Date(data.time).toLocaleString() + "</div>" +
		"<div class='tweet-body'>" + data.text + "</div>" +
		"</div>";
	
	$("#tweets-section").prepend(newTweet);
	
};


$('.new-tweet-button').click( function() {
	if ($("#new-tweet").val() === "") {
		console.log("Input bar was Empty");
	}
	else {
		$.ajax({
			type: "POST",
			url: "/ajax",
			contentType: 'application/json',
			data: JSON.stringify({tweet: $('#new-tweet').val()}),
			success: function(data) {
				prependNewTweet(data);
				$("#new-tweet").val("");
			}
		})
	}
	
});

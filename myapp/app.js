var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
	{text: "Hai", time: new Date().getTime() - 12300},
	{text: "Type something up there, DUH!", time: new Date().getTime() - 5000},
	{text: "Welcome to This WebApp!", time: new Date().getTime()},
];

app.use(express.static(__dirname + '/public'));


app.get('/ajax', function(request, response) {
	response.type('json');
	response.end(JSON.stringify({tweets:tweets}))
});

app.post('/ajax', function (request, response) {
	var newTweet = {text: request.body.tweet, time: new Date().getTime()};
	tweets.push(newTweet);
	response.type('json');
	response.end(JSON.stringify(newTweet));
});



var server = app.listen(8080);
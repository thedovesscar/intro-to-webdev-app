var express = require('express');
var app = express();

app.get('/cheer.txt', function(request, response) {
	response.send('You are doing a great job right now!');
});

app.get('/jeer.txt', function(req, res) {
	res.end('OMG, that was so baaaaaaad!');
});

var server = app.listen(8080, function() {
	console.log('Listening on port 8080');
});
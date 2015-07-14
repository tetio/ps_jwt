var express = require('express');
var app = express();

app.post('/register', function(req, res){
	res.send('Hi!');
});

var server = app.listen(3000, function() {
	console.log('app listening on port '+server.address().port);
});
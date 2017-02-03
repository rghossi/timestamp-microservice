var express = require('express');
var app = express();
var months = require('./months');

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/:input', function(req, res) {
	var result;
	var input = parseInt(req.params.input);
	var date = new Date(input*1000);
	if (input) {
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		var natural = months[month] + " " + day + ", " + year;
		result = {unix: input, natural: natural};
	} else  {
		var timestamp = + new Date(req.params.input);
		var unix = timestamp/1000;
		var natural = unix ? req.params.input : null;
		result = {unix: unix, natural: natural};
	}
	res.json(result);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
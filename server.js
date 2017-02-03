var express = require('express');
var app = express();
var months = require('./months');

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/:timestamp', function(req, res) {
	var result;
	var unix = parseInt(req.params.timestamp);
	var date = new Date(unix*1000);
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	var natural = months[month] + " " + ++day + ", " + year;
	result = {unix: unix, natural: natural};
	res.json(result);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
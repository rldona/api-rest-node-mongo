var express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	port = 5050;

mongoose.connect('mongodb://localhost/movies', function(err, res) {
	if(err) {
		console.log('Error DB connection: ', err);
	} else {
		console.log('DB connection: OK');
	}
});

app.get('/', function(req, res) {
	res.send('hola mundo!!');
});

app.listen(port);
console.log('Server listening port: ', port);





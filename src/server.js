var express = require('express'),
	mongoose = require('mongoose'),
	app = express();

// app.configure(function() {
// 	app.use(express.bodyParser());
// 	app.use(express.methodOverride());
// 	app.use(app.router);
// });

app.get('/', function(req, res) {
	res.send('hola mundo!!');
});

app.listen(5050);
console.log('Sevidor Express escuchando en el puerto 5050');
var mongoose = require('mongoose');
var Movies 	 = mongoose.model('Movies');

exports.findAll = function(req, res) {

	console.log('GET /findAll');

	Movies.find(function(err, movies) {
		if(err) res.send(500, err.message);

		console.log('GET /movies');
		res.status(200).jsonp(movies);
	});
};

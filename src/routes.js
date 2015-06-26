module.exports = function(app) {
	var MoviesDB = require('./movies');

	// GET

	findAll = function(req, res) {
		console.log('findAll');
		MoviesDB.find(function(err, movies) {
			if(!err) {
				res.send(movies);
			} else {
				console.log('ERROR: ', err);
			}
		});
	};

	// GET

	findById = function(req, res) {
		console.log('findById');
		MoviesDB.findByID(req.param.id, function(err, movie) {
			if(!err) {
				res.send(movie);
			} else {
				console.log('ERROR: ', err);
			}
		});
	};

	// POST

	addMovie = function(req, res) {
		console.log('addMovie');
		console.log('POST');
		console.log('req.body: ', req.body);

		var movies = new MoviesDB({
			title: req.body.title,
			description: req.body.description,
			genre: req.body.genre
		});

		movies.save(function(err) {
			if(!err) {
				console.log('Movie saved !!');
			} else {
				console.log('ERROR: ', err);
			}
		});
	};

	// PUT

	updateMovie = function(req, res) {
		console.log('updateMovie');
		MoviesDB.findByID(req.param.id, function(err, movie) {
			movie.title = req.body.title;
			movie.description = req.body.description;
			movie.genre = req.body.genre;
		});

		movies.save(function(err) {
			if(!err) {
				console.log('Movie update !!');
			} else {
				console.log('ERROR: ', err);
			}
		});
	}

	// DELETE

	deleteMovie = function(req, res) {
		console.log('deleteMovie');
		MoviesDB.findByID(req.param.id, function(err, movie) {
			movie.remove(function(err) {
				if(!err) {
					console.log('Movie deleted !!');
				} else {
					console.log('ERROR: ', err);
				}
			})
		});
	}

	// ROUTES

	app.get('/movies', findAll);
	app.get('/movies/:id', findById);
	app.post('/movies', addMovie);
	app.put('/movies/:id', updateMovie);
	app.delete('/movies/:id', deleteMovie);

}
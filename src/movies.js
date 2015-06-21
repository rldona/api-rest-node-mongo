var mongoose = require('moongose'),
	Schema = mongoose.Schema;

var movies = new Schema({
	tittle: String,
	description: String,
	genre: {
		type: String,
		enum: ['Action', 'Comedy', 'Terror', 'Drama']
	}
});

module.exports = mongoose.model('movies', movies);
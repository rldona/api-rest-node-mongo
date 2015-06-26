exports = module.exports = function (app, mongoose) {

	var moviesSchema = new mongoose.Schema({
		tittle: {
			type: String
		},
		description: {
			type: String
		},
		genre: {
			type: String,
			enum: ['Action', 'Comedy', 'Terror', 'Drama']
		}
	});

	mongoose.model('Movies', moviesSchema);

};
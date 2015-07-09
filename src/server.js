var express 	   = require('express'),
	app 		   = express(),
	bodyParser     = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose       = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/movies', function(err, res) {
 	if(err) throw err;
 	console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/movies')(app, mongoose);
var MoviesCtrl = require('./controllers/movies');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello Node.js !!");
});
app.use(router);

// API routes
var movies = express.Router();

movies.route('/movies')
  .get(MoviesCtrl.findAll);
  // .post(MoviesCtrl.addTVShow);

// movies.route('/movies/:id')
//   .get(MoviesCtrl.findById)
//   .put(MoviesCtrl.updateTVShow)
//   .delete(MoviesCtrl.deleteTVShow);

app.use('/api', movies);

// Start server
app.listen(3000, function() {
	console.log('Server listening port 3000');
});







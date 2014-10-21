var Quote = require('./lib/quotes.js');
var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log("env:", app.get('env'));
  console.log("query test:", req.query.test);
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === 1;
  next();
});

app.get('/', function(req, res) {
  res.render('home', {qotd: Quote.getQuote()});
});

app.get('/about', function(req, res) {
  res.render('about');
});

// custom 404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('505');
});

app.listen(app.get('port'), function() {
  console.log('started on http://localhost:' + app.get('port'));
});

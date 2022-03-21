var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var ejs = require('ejs');

// Application
var app = express();

// connect to the mongoose
mongoose.connect(
  'mongodb://localhost/code',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.locals.message = 'Hello world';
  next();
});

//setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.get('/', (req, res) => {
  var sports = ['cricket', 'football', 'volleball'];
  res.render(`index`, { sports: sports });
});

// Error handler
app.use((err, req, res, next) => {
  res.send(err);
});

//  listing port
app.listen(4000, () => {
  console.log('Port is listing for 4k portal');
});

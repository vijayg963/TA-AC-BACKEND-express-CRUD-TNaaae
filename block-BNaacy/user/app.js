var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// Connect to mongodb
mongoose.connect(
  'mongodb://localhost/user',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('connected true', err ? false : true);
  }
);

// Application
var app = express();

// middleware

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middleWares
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});

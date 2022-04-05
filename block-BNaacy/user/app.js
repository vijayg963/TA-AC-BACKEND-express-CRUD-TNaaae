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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middleWares
app.use('/', indexRouter);
app.use('/users', usersRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

// listener
app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});

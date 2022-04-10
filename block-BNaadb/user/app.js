const express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// connect to mongodb
mongoose.connect(
  'mongodb://localhost/user',
  { userNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('connected:', err ? false : true);
  }
);

// Application
var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

// routing middlewares
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
app.listen(4000, () => {
  console.log('Server is listening on port 4k');
});

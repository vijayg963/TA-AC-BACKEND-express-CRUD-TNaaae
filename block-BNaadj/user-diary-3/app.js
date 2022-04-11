const express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Connect to mongoose
const url = 'mongodb://localhost/user-diary-3';
mongoose.connect(url, (err) => {
  console.log(err ? err : 'Connected true');
});

//intantiating express Application
const app = express();

// capturing form data
app.use(express.urlencoded({ extended: false }));

// setup static directory
app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Listiner
app.listen(5000, () => {
  console.log('These port is 5k');
});

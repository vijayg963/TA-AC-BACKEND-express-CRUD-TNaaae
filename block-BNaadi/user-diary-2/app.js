const express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./router/index');
var user2Router = require('./router/user2');

// connect to mongoose
mongoose.connect(
  'mongodb://localhost/user',
  { userNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('connected:', err ? true : false);
  }
);

// Application
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middlewares
app.use('/', indexRouter);
app.use('/users', user2Router);
app.get('/form', (req, res) => {
  res.render(user2Form);
});

// error handler
app.use((req, res, next) => {
  res.status(404).send('page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

// listener
app.listen(4000, () => {
  console.log('Server is listening on port 4k');
});

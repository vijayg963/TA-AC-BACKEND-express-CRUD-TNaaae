var express = require('express');
var mongoose = require('mongoose');

// Application
var app = express();

var router = express.Router();

// MiddleWare
app.use(express.json());

// router
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/user', (req, res) => {
  res.send('user');
});

// Error
app.use((err, req, res, next) => {
  res.send(err);
});

// Portal
app.listen(3000, () => {
  console.log('POrt is listing for 3k');
});

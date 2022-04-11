var express = require('express');
var router = express.Router();

var User = require('../modal/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, User) => {
    if (err) return next(err);
    res.render('allUsers', { users: Users });
  });
});

router.get(`/new`, (req, res) => {
  res.render('addForm');
});

router.post('/', (req, res) => {
  var data = req.body;
  User.create(data, (err, userCreted) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', {
      user: user,
    });
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('upadteForm', { user: user });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  var data = req.body;
  User.findByIdAndUpdate(id, data, (err, updateUser) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, userDeleted) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;

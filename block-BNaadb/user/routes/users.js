const express = require('express');
var router = express.Router();
var User = require('../modal/user');

// new User
router.get('/new', (req, res) => {
  res.render('userForm');
});

// capture data
router.post('/', (req, res, next) => {
  User.create(req.body, (err, createUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/', (req, res, next) => {
  // fetch list of books form database
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('/users');
  });
});

// fetch the user
router.get('/', (req, res) => {
  res.render('/users');
});

// fetch only one user
router.get('/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
  });
  res.render('singleUser');
});

// Updating user form
router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editBookForm', { user: user });
  });
});

// updated user
router.put('/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updateUser) => {
    if (err) return next(err);
    res.render('/user/' + id);
  });
});

// delete user
router.get('/:id/delete', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, book) => {
    if (err) return next(err);
    res.redirect('/books');
  });
});

module.exports = router;

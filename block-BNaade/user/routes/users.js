const express = require('express');
var router = express.Router();
var User = require('../modals/user');

// new User
router.get('/new', (req, res) => {
  res.render('userForm');
});

// capture data
router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/', (req, res, next) => {
  // fetch list of books from database
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('/users.ejs');
  });
  // res.render('/users');
});

// fetch the user
router.get('/', (req, res) => {
  // res.render('users');
});

//fetch only one user
router.get('/:id', (req, res) => {
  // single user detail
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
  });
  res.render('singleUser');
});

// Updating user form
router.get('/:id/edit', (req, res) => {
  // find the user details
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editBookForm', { user: user });
  });
  // render a update form
});

// updated user
router.put('/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

// delete user
router.delete('/:id', (req, res) => {});

module.exports = router;

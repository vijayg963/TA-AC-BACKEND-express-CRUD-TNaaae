const express = require('express');
const { create } = require('../modals/user');
var router = express.Router();
var User = require('../modals/user');

// new User
router.get('/new', (req, res) => {
  res.render('userForm');
});

// capture data
router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});

// fetch the user
router.get('/', (req, res) => {
  res.render('users');
});

//fetch only one user
router.get('/:id', (req, res) => {
  res.render('singleUser');
});

// Updating user form
router.get('/:id/edit', (req, res) => {});

// update user
router.put('/:id', (req, res) => {});

// delete user
router.delete('/:id', (req, res) => {});

module.exports = router;

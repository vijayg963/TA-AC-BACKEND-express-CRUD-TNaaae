var express = require('express');
var router = express.Router();
const User2 = require('../modal/user');

router.get('/', (req, res, next) => {
  User2.find({}, (err, users) => {
    if (err) return next(err);
    res.render('allUsers', { users: users });
  });
});

router.post('/', (req, res, next) => {
  User2.create(req.body, (err, userCreated) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  User2.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user: user });
  });
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  User2.findByIdAndUpdate(id, req.body, (err, userUpdated) => {
    if (err) return next(err);
    res.json(userUpdated);
  });
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  User2.findByIdAndDelete(id, (err, userDeleted) => {
    if (err) return next(err);
    res.json(userUpdated);
  });
});

module.exports = router;

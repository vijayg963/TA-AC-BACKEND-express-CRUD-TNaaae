var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('Welcome to index page');
});

module.exports = router;

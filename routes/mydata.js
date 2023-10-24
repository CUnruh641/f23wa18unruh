var express = require('express');
var router = express.Router();

/* GET mydata.pug page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Corey Unruh' });
});

module.exports = router;
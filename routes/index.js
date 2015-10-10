var express = require('express');
var router = express.Router();
var item = require('../data/item');

router.get('/', function (req, res, next) {
  item.find(function (err, docs) {
    res.render('index', {
      title: 'Account',
      items: docs
    });
  });
});
router.get('/three-points', function (req, res, next) {
  res.render('three-points');
});

module.exports = router;

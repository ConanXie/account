var express = require('express');
var router = express.Router();
var item = require('../data/item');

router.get('/', function (req, res, next) {
  var date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
  console.log(year, month, day);
  item.find({
    date: {'$gte': new Date(`year-month-day`)},
    item: '打球'
  }, function (err, docs) {
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

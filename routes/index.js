var express = require('express');
var router = express.Router();
var item = require('../data/item');

router.get('/', function (req, res, next) {
  var date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
  item.find({
    date: {
      '$gte': new Date(`${year}-${month}-${day-2}`)
    }
  }, function (err, docs) {
    res.render('index', {
      title: 'Account',
      items: docs
    });
  }).sort({'_id':-1});
});

router.post('/handle', function (req, res, next) {
  var data = req.body;
  switch (data.operate) {
    case 'alter':
      console.log(data._id);
      item.update({_id: data._id}, data, {upsert: true}, function (err) {
        if (err) {
          console.log(err);
        }
      });
      item.find({_id: data._id}, function (err, docs) {
        console.log(docs);
      });
      break;
    case 'add':
      console.log(data, new Date());
  }
});

router.get('/three-points', function (req, res, next) {
  res.render('three-points');
});

module.exports = router;

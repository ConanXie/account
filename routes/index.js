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
router.get('/add', function (req, res, next) {
    res.render('add');
});

module.exports = router;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account');

var itemSchema = mongoose.Schema({
  date: Date,
  category: String,
  subCategory: String,
  name: String,
  cost: Number,
  comments: String
});
var Item = mongoose.model('item', itemSchema);
/*new Item({
  date: new Date('2015-10-11'),
  category: '学习',
  subCategory: '书籍',
  cost: 33,
  name: '钢笔画',
  comments: '质量很差'
}).save();*/
var date = [/*{
  month: 8,
  day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
}, */{
  month: 9,
  day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
}, {
  month: 10,
  day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
}];
var data = {
  dish: {
    name: '饮食',
    sub: [{
      name: '早餐',
      data: [{
        name: '鸡蛋包子',
        cost: 5
      }, {
        name: '鸡蛋油条',
        cost: 7
      }, {
        name: '素面',
        cost: 5
      }, {
        name: '炒面',
        cost: 7
      }]
    }, {
      name: '中餐',
      data: [{
        name: '订餐',
        cost: 13
      }, {
        name: '买菜做饭',
        cost: 35
      }, {
        name: '饭馆',
        cost: 89
      }]
    }, {
      name: '晚餐',
      data: [{
        name: '订餐',
        cost: 18
      }, {
        name: '买菜做饭',
        cost: 37
      }, {
        name: '饭馆',
        cost: 189
      }]
    }]
  }
};
for (var i = 0; i < date.length; i++) {
  for (var j = 0; j < date[i].day.length; j++) {
    var theDate = `2015-${date[i].month}-${date[i].day[j]}`;
    for (var x = 0; x < data.dish.sub.length; x++) {
      var r = Math.round(Math.random()*(data.dish.sub[x].data.length-1));
      new Item({
        date: theDate,
        category: data.dish.name,
        subCategory: data.dish.sub[x].name,
        cost: data.dish.sub[x].data[r].cost,
        name: data.dish.sub[x].data[r].name,
        comments: ''
      }).save();
    }
  }
}
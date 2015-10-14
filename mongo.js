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
new Item({
  date: new Date('2015-10-11'),
  category: '学习',
  subCategory: '书籍',
  cost: 33,
  name: '钢笔画',
  comments: '质量很差'
}).save();
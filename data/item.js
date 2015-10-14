var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account');
var itemSchema = mongoose.Schema({
  date: Date,
  category: String,
  subCategory: String,
  cost: Number,
  name: String,
  comments: String
});
module.exports = mongoose.model('item', itemSchema);
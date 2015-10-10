var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account');
var itemSchema = mongoose.Schema({
  item: String,
  cost: Number,
  date: Date
});
module.exports = mongoose.model('item', itemSchema);
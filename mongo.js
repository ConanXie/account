var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account');

var itemSchema = mongoose.Schema({
    item: String,
    cost: Number,
    date: Date
});
var Item = mongoose.model('item', itemSchema);
new Item({
    item: '早餐',
    cost: 5.5,
    date: new Date()
}).save();
new Item({
    item: '中餐',
    cost: 12,
    date: new Date()
}).save();
new Item({
    item: '晚餐',
    cost: 13,
    date: new Date()
}).save();
new Item({
    item: '打球',
    cost: 24,
    date: new Date()
}).save();
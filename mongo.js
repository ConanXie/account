var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account');

var itemSchema = mongoose.Schema({
    item: String,
    cost: Number,
    date: Date
});
var Item = mongoose.model('item', itemSchema);
new Item({
    item: 'breakfast',
    cost: 5.5,
    date: new Date()
}).save();
new Item({
    item: 'lunch',
    cost: 12,
    date: new Date()
}).save();
new Item({
    item: 'dinner',
    cost: 13,
    date: new Date()
}).save();
new Item({
    item: 'bus fare',
    cost: 4,
    date: new Date()
}).save();
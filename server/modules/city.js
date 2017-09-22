var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var citySchema = new Schema({
  "cityname":String,
  "initial":String
});
// 定义一个城市模型，集合名称：address
module.exports = mongoose.model('Cities',citySchema,'address');

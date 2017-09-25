var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userId":String,
  "username":String,
  "password":String,
  "addressList":{
    "chooseCity":String,
    "curCity":String,
    "hotCity":Array,
    "historyCity":Array
  },
  "orderList":Array,
  "passengerList":Array,
  "ticketList":Array
});
//定义一个登录的模型抛出,表名叫login
module.exports = mongoose.model("User",userSchema,"user");

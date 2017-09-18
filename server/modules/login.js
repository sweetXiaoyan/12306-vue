var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    "username":String,
    "password":String
});
//定义一个登录的模型抛出,表名叫login
module.exports = mongoose.model("Login",loginSchema,"login");

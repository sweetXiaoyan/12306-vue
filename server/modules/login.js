var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    "username":String,
    "password":String
});
//定义一个登陆的模型抛出,表名叫logins
module.exports = mongoose.model("Login",loginSchema);
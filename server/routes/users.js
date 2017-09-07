var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Login = require('../modules/login');

// console.log(mongoose);
// 链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/traindb');

//监听是否连接成功
mongoose.connection.on("connected",function () {
  console.log("success!");
});

mongoose.connection.on('error',function () {
  console.log('failed');
});

/* GET users listing. */

router.get('/',function (req,res,next) {
  Login.find({},function (err,doc) {
    if (err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else {
      if (doc){
        res.json({
          status:'0',
          msg:'',
          result:{
            count:doc.length,
            list:doc
          }
        });
        return
      }
      res.json({
        status:'001',
        msg:"用户名或者密码错误！"
      })

    }
  })

});

router.post('/login',function (req,res,next) {
  var param = {
    username:req.body.username,
    password:req.body.password
  }
  Login.findOne(param,function (err,doc) {
    if (err){
      res.json({
        status:"0",
        msg:err.message

      });
    }else {
      if (doc){
        res.json({
          status:"1",
          msg:"",
          result:{
            username:doc.username,
          }
        })
      }else {
        res.json({
          status:"2",
          msg:"用户名或密码错误",
          result:{}
        })

      }
    }
  })


});

module.exports = router;

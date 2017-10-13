var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User =require('../modules/user');

// console.log(mongoose);
// 链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/traindb');

//监听是否连接成功
mongoose.connection.on("connected",function () {
  console.log("数据库链接成功---success!");
});

mongoose.connection.on('error',function () {
  console.log('failed');
});

/* GET users listing. */

router.get('/',function (req,res,next) {
  User.find({},function (err,doc) {
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

//  登录 api
router.post('/login',function (req,res,next) {
  var param = {
    username:req.body.username,
    password:req.body.password
  };
  User.findOne(param,function (err,doc) {
    if (err){
      res.json({
        status:"0",
        msg:err.message,
        result:""
      });
    }else {
        if (doc){
        res.json({
          status:"1",
          msg:"",
          result:doc.userId,
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

// 用户相关的地址api
router.get('/address',function (req,res,next) {
  console.log(req.query);
  var userId = req.query.userId;
  if (!userId){
    res.json({
      status:"-1",
      msg:"请完成登录！",
      result:""
    })
  }else {
    User.findOne({userId:userId},function (err,doc) {
      if (err){
        res.json({
          status:"0",
          msg:err,
          result:""
        })
      }
      else {
        if (doc){
          res.json({
            status:"1",
            msg:"",
            result:doc.addressList
          })
        }
      }
    })
  }


})
module.exports = router;

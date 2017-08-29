var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Login = require('../modules/login');

// console.log(mongoose);
// 链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/customer');

//监听是否连接成功
mongoose.connection.on("connected",function () {
    console.log("success!");
});

mongoose.connection.on('error',function () {
    console.log('failed');
});

router.get('/', function(req,res,next){
    // res.send("hello please login!");
    // 两个参数，第一个是查找条件
    Login.find({},function (err,doc) {
        if (err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else {
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
});

module.exports = router;

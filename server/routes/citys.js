var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cities = require('../modules/city');
var pinyinClass = require('../utils/filterLetter');

// 暂时省略链接数据库

/*
  a-z筛选接口
*/
router.get('/all',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message,
        result:[]
      })
    }
    else {
      // a-z过滤后数据
      let matchResult ={};
      matchResult = pinyinClass.prototype.matchLetter(doc);
      res.json({
        status:"0",
        msg:"",
        result:matchResult
      })
    }
  })
});

/*
  选择城市 （当前用户，选中城市）
*/




module.exports = router;

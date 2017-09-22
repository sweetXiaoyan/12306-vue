var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cities = require('../modules/city');
var pinyinClass = require('../utils/filterLetter');

// 暂时省略链接数据库

/*
  查出排序的城市
 */
router.get('/',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message,
        result:[]
      });
    }
    else {
      var data=[];
      doc.forEach(item =>{
        data.push(item. cityname);
    });

     var doc = pinyinClass.prototype.letterSort(data);

      res.json({
        status:"0",
        msg:"",
        result:doc
      })
    }



  })

});

/*
  生成拼音
*/
router.get('/pinyin',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message,
        result:[]
      });
    }
    else {
      doc.forEach(item =>{
        /*
          生成拼音
        */
       var str = pinyinClass.prototype.transLetter(item.cityname);
        item.initial = str;
      });
      res.json({
        status:"0",
        msg:"",
        result:doc
      })
    }
  })
});

/*
  a-z筛选
*/
router.get('/all',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message,
        result:[]
      })
    }else {
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


module.exports = router;

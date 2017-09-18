var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cities = require('../modules/city');

// 暂时省略链接数据库


router.get('/',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message
      });
    }
    else {
      if (doc){
        // console.log(typeof doc.result);
        var cityList = doc.provinces;
        for (let item in cityList){
          console.log(item);
        }
        res.json({
          status:'0',
          msg:"",
          result:{
            list:doc
          }
        });
        return
      }


    }
  })

});

module.exports = router;

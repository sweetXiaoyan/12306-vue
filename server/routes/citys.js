var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cities = require('../modules/city');
var pinyinClass = require('../utils/filterLetter');

// 暂时省略链接数据库


router.get('/',function (req,res,next) {
  Cities.find({},function (err,doc) {
    if (err){
      res.json({
        status:"1",
        msg:err.message
      });
    }
    let data =["邯郸市","张家口","北京市","江苏省","江浙","江安县","安阳"];

    console.log(pinyinClass.prototype.letterSort(data));

  })

});

module.exports = router;

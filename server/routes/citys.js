var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Cities = require('../modules/city');
var FilterLetter = require('../utils/filterLetter');

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
        var cityList = doc[0].provinces;
        var cityName=[];
        cityList.forEach((item) =>{
          for (var i=0; i<item.citys.length; ++i){
            cityName.push(item.citys[i].citysName);
          }
        });
        console.log(FilterLetter(cityName));
        // FilterLetter(cityName);
        res.json({
          result:cityName,
        });


     //   输出
     /*   res.json({
          status:'0',
          msg:"",
          result:{
            list:doc
          }
        });*/
        return
      }


    }
  })

});

module.exports = router;

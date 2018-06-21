var express = require('express');
var router = express.Router();


// 暂时省略链接数据库

/*
  a-z筛选接口
*/
router.post('/check_login',function (req, res,next) {
  res.json({
    status:0,
    result:{
      sessionid:'fu6e4aedms49rknujkk3ghbni3'
    }
  })
});
router.get('/knowledge/criterion',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'大师兄不在服务区.pdf',
          fileUrl:''
        },
        {
          fileName:'HTML5 从入门到精通.png',
          fileUrl:''
        },
        {
          fileName:'CSS3学习必备书籍《CSS3 实战》.xls',
          fileUrl:''
        },
      ]
    }
  })
});
router.post('/knowledge/**/add',function (req,res,next) {
  res.json({
    status:0,
    result:{
    },
    msg:"新增文件夹成功"
  })
});
router.post('/knowledge/**/download',function (req,res,next) {
  res.json({
    status:0,
    result:{
      fileName:'love today.png',
      url:'http://chuantu.biz/t6/273/1522901247x-1566688341.png'
    },
    msg:"新增文件夹成功"
  })
});
router.get('/knowledge/instructor',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'长江大桥建设指导书.pdf',
          fileUrl:''
        },
        {
          fileName:'国家标准指导书.doc',
          fileUrl:''
        },
        {
          fileName:'拌合直达书.pdf',
          fileUrl:''
        },
      ]
    }
  })

});
router.get('/knowledge/controlBook',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'111控制书.pdf',
          fileUrl:''
        },
        {
          fileName:'kkk控制书.png',
          fileUrl:''
        },
        {
          fileName:'拌合直达书.pdf',
          fileUrl:''
        },
      ]
    }
  })

});
router.get('/knowledge/drawing',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'56-89大桥设计图纸.png',
          fileUrl:''
        },
        {
          fileName:'k90长江大桥.jpg',
          fileUrl:''
        },
        {
          fileName:'拌合直达书.png',
          fileUrl:''
        },
      ]
    }
  })

});
router.get('/knowledge/workPlan',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'计划1.doc',
          fileUrl:''
        },
        {
          fileName:'计划2.doc',
          fileUrl:''
        },
        {
          fileName:'计划3.doc',
          fileUrl:''
        },
      ]
    }
  })

});
router.get('/knowledge/collection',function (req,res,next) {
  res.json({
    status:0,
    result:{
      data:[
        {
          fileName:'施工.doc',
          fileUrl:''
        },
        {
          fileName:'计划2.xls',
          fileUrl:''
        },
        {
          fileName:'长江大桥.pdf',
          fileUrl:''
        },
        {
          fileName:'路基文案.pdf',
          fileUrl:''
        },
      ]
    }
  })

});
/*
  选择城市 （当前用户，选中城市）
*/
module.exports = router;

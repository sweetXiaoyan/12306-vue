/*第三方库*/
var pinyin = require('pinyin');

function pinyinClass() {

}
/*
   汉字转拼音
*/
pinyinClass.prototype.transLetter =function(str) {
  let arr =[];
 pinyin(str,{
    style:pinyin.STYLE_FIRST_LETTER
  }).forEach(function (element) {
    arr = arr.concat(element);
  },this);
    return arr.join('');
}
/*
   对汉字排序
*/
pinyinClass.prototype.letterSort = function(arr) {
  const sortData =arr.sort(pinyin.compare);
  return sortData;
};

/*
  a-z 首字母筛选
*/

pinyinClass.prototype.matchLetter = function (doc) {
  var LetterObj={
    A:[],  B:[],  C:[],  D:[],  E:[],  F:[],  G:[],  H:[],  I:[],
    J:[],  K:[],  L:[],  M:[],  N:[],  O:[],  P:[],  Q:[],  R:[],
    S:[],  T:[],  U:[],  V:[],  W:[],  X:[],  Y:[],  Z:[]
  };
  //截取拼音首字母
  doc.forEach(item =>{
    let str = item.initial.substring(0,1).toUpperCase();
    for (let key in LetterObj){
      if (str ===key){
        LetterObj[key].push(item);
      }
    }
  });
  return LetterObj;
}
module.exports = pinyinClass;

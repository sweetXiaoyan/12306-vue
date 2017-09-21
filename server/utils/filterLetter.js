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
}
module.exports = pinyinClass;

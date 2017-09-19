function filterLetter(cityArr) {
//  列出所有可能的首字母（26个）
  var letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//  按首字母存放内容
var citySort={};
var floatStr ="";
var insetStr = floatStr;
var cityABC = [];

//循环将内容填入到citySort中 格式： {'石'：["石家庄","石首市"}
  for (var i=0; i<cityArr.length; i++){
    var first = cityArr[i];
    first = first.length>1?first.substring(0,1):first;
    if (citySort[first] ==undefined){
      citySort[first] = [];
    }
    citySort[first].push(cityArr[i]);

  }

// 按照 A-Z 顺序将列表循环输出
  for (var i=0; i<26; i++){
    var point = citySort[letter[i]];
    if (citySort[letter[i]] !=undefined){
      cityABC.push(letter[i]);
    }
    return cityABC;

  }
}



module.exports = filterLetter;

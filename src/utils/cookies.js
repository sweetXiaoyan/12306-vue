/*
    cookie 的增删查
*/
export function getCookie(key) {
  var cookieArr = document.cookie.split(';');
  for (let i=0; i<cookieArr.length; i++){
    var tempArr = cookieArr[i].split('=');
    if (tempArr[0].trim() ==key){
      return tempArr[1];
    }

  }

}

// 添加cookie
export function addCookie(key,value,expires){
  if (!expires){
    document.cookie = key+'='+value;
  }
  var exp = new Date();
  exp.setTime(exp.getTime() + 60 * 1000 * expires);  //几分钟
  document.cookie = key+'='+value+';expires ='+exp.toGMTString()+';';
}

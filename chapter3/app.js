// 関数
var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}


// 入力ダイアログ
var promptStr = prompt('何か好きな文字を入力してください');

alert(promptStr);
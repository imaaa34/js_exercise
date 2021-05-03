// 条件分岐
var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


// 繰り返し処理
// while
var max = 700;
var num = 1;
var count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}
console.log('2を掛け続けて' + 'を超えるのに必要だった回数は' + count + '回です');

// for
var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}
console.log('1から10まで足し算した結果は' + num + 'です');


// 確認問題
alert(1 + 2);
alert(3 - 4);
alert(5 * 6);
alert(7 / 8);
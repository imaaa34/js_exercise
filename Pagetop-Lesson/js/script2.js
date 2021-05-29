$(function(){
  $('#back a').on('click', function(event){
    $('body, html').animate({
      // top:0の位置に移動
      scrollTop:0
      // 移動にかかる時間
    }, 2000);
    event.preventDefault();
  });
});
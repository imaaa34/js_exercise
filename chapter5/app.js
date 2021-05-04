$(function(){
  $('.box1').slideDown(5000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp(5000);
  });
});
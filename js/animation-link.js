$('a[href^="#"]').bind("click", function(e) {
  var anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 125
  }, 1000);
  e.preventDefault();
});




//$(document).ready(function(){
  // = Вешаем событие прокрутки к нужному месту
    //	 на все ссылки якорь которых начинается на #
    //$('a[href^="#"]').bind('click.smoothscroll',function (e) {
      //e.preventDefault();
  
      //var target = this.hash,
      //$target = $(target);
  
      //$('html, body').stop().animate({
        //'scrollTop': $target.offset().top - 125
      //}, 900, 'swing', function () {
        //window.location.hash = target;
      //});
    //});
  
  //});
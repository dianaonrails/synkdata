$(document).ready(function () {  
  var top = $('.header-menu').offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 125) {
        $('.header-menu').addClass('background-menu');
    } else {
        $('.header-menu').removeClass('background-menu');
    }

  });
  $('.js-menu').click(function(e){

      $('.navbar-mobile').toggleClass( "active" );
      
      $('.navbar-mobile__nav-toggle-title').toggleClass("closed");
      $('.list-closed').toggle("slow");
  });
});
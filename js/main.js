$(document).ready(function () {  
  var top = $('.header-menu').offset().top - parseFloat($('.header-menu').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >=top) {
      // if so, ad the fixed class
      $('.header-menu').addClass('background-menu');
    } else {
      // otherwise remove it
      $('.header-menu').removeClass('background-menu');
    }
  });
});
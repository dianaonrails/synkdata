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

  window.sr = ScrollReveal();
  sr.reveal('.landing .text' ,{ duration: 2000 }, 100);
  sr.reveal('.landing .text--small', { duration: 2000 }, 100);
  sr.reveal('.item', { duration: 2000 }, 100);
  sr.reveal('#about', { duration: 200 });
  sr.reveal('.side', { duration: 2000 }, 100);
  sr.reveal('#what');
  sr.reveal('#team');
  sr.reveal('.team-item', { duration: 2000 }, 100);
  sr.reveal('#work');
  sr.reveal('.project', { duration: 2000 }, 100);
  sr.reveal('#contacts');
});
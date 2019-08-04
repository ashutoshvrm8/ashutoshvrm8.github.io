$(document).ready(function() {

  function windowSize() {
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
  }

  $(window).on('resize load',function() {
    windowSize();
    (windowWidth < 768) ? $("#main-nav").css("display","none") : $("#main-nav").slideDown(700);
  });
  
  $(".js-header-nav").on('click', function(event) {
    if (this.hash !== "") {
      var hash = this.hash;
      event.preventDefault();
      windowSize();
      $('html, body').animate({
        scrollTop: (windowWidth < 768) ? $(hash).offset().top : $(hash).offset().top-50
      }, 900);
    }
  });
});

window.onload= function () {
  var typed = $(".typed");
  $(function() {
    typed.typed({
      strings: ["Hi...", "My name is Ashutosh Verma."],
      typeSpeed: 100,
      loop: true,
    });
  });
};
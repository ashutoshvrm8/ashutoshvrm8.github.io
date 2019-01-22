$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      if ($(window).width() < 768) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900);
      } else {
        $('html, body').animate({
          scrollTop: $(hash).offset().top-50
        }, 900); 
      }
    }
  });

  if ($(window).width() < 768) {
    $("#main-nav").css("display","none");
  }
  else {
    $("#main-nav").slideDown(700);
  }

  var typed = $(".typed");
  $(function() {
    typed.typed({
      strings: ["Hi...", "My name is Ashutosh Verma.", "I'm a Developer."],
      typeSpeed: 100,
      loop: true,
    });
  });
});

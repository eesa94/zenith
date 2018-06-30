
$(document).ready(function(){


  // Makes nav bar appear after scrolling down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('#navbar').css('display', 'block').addClass('slideInDown').removeClass('slideOutUp');
      $('#nav-list li').addClass('fadeIn').removeClass('fadeOut');
      $('#nav-1').css('animation-delay', '0.5s');
      $('#nav-2').css('animation-delay', '0.6s');
      $('#nav-3').css('animation-delay', '0.7s');
      $('#nav-4').css('animation-delay', '0.8s');

    } else {
      $('#navbar').removeClass('slideInDown').addClass('slideOutUp');
      $('#nav-list li').removeClass('fadeIn').addClass('fadeOut');
      $('#nav-1').css('animation-delay', '0.5s');
      $('#nav-2').css('animation-delay', '0.4s');
      $('#nav-3').css('animation-delay', '0.3s');
      $('#nav-4').css('animation-delay', '0.2s');

    }
  });

// scrollspy
  var $root = $('html, body');
  $('.navbar-nav a, #title-home, #main-image a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

// collapse navbar after clicking link
  $(".navbar-nav li a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
  $(".navbar-collapse").collapse('hide');
  });

});

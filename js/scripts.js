
$(document).ready(function(){


  // Makes nav bar appear after scrolling down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600 && $(window).width() > 991) {
      $('#navbar').css('display', 'block').addClass('slideInDown').removeClass('slideOutUp');
      $('#nav-list li').addClass('fadeIn').removeClass('fadeOut');
      $('#nav-1').css('animation-delay', '0.5s');
      $('#nav-2').css('animation-delay', '0.6s');
      $('#nav-3').css('animation-delay', '0.7s');
      $('#nav-4').css('animation-delay', '0.8s');
      $('#nav-5').css('animation-delay', '0.9s');


    } else {
      $('#navbar').removeClass('slideInDown').addClass('slideOutUp');
      $('#nav-list li').removeClass('fadeIn').addClass('fadeOut');
      $('#nav-1').css('animation-delay', '0.5s');
      $('#nav-2').css('animation-delay', '0.4s');
      $('#nav-3').css('animation-delay', '0.3s');
      $('#nav-4').css('animation-delay', '0.2s');
      $('#nav-5').css('animation-delay', '0.1s');

    }
  });

  // mobile nav
  let mobileOpen = 0;

  $('.nav-open').click(function() {
    if (mobileOpen === 0) {
      $(this).toggleClass('is-active');
      $('.mobile-menu').css('left', '0');
      mobileOpen = 1;
    }
    else if (mobileOpen === 1) {
      $(this).toggleClass('is-active');
      $('.mobile-menu').css('left', '-100%');
      mobileOpen = 0;
    }
  });

  $('.mobile-link').click(function() {
    $('.nav-open').toggleClass('is-active');
    $('.mobile-menu').css('left', '-100%');
    mobileOpen = 0;
  })


  // scrollspy
  var $root = $('html, body');
  $('.navbar-nav a, #brand-home, #home a, .mobile-link').click(function() {
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

});

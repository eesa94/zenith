
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

  // sidebar
  $('.navbar-open').click(function() {
    $('.sidebar').css('display', 'flex');
    $('.navbar-secondary').css('display', 'none');
  });

  $('.navbar-close, .sidebar-link').click(function() {
    $('.sidebar').css('display', 'none');
    $('.navbar-secondary').css('display', 'flex');
  });


  // scrollspy
  var $root = $('html, body');
  $('.navbar-nav a, #title-home, #home a, .sidebar-link').click(function() {
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

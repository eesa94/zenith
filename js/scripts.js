// Makes nav bar appear after scrolling down
$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $('#navbar').css('top', '0');
    $('#nav-list li').addClass('fadeIn');
  } else {
    $('#navbar').css('top', '-80px');
    $('#nav-list li').removeClass('fadeIn');
  }
});


$(document).ready(function(){
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

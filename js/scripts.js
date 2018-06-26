// Makes nav bar appear after scrolling down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}


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

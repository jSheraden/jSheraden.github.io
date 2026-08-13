$(document).ready(function() {
  // Get current date for the copyright tag.
  $('#copyright').html('&copy ' + new Date().getFullYear());

  $window = $(window);

  // Implement parallax scrolling functionality.
  $('.parallax').each(function() {
    var $div = $(this);

    $window.scroll(function() {
      var yPos = -($window.scrollTop() / $div.data('scrolling-speed'));
      var bgPos = '50% ' + yPos + 'px';
    
      $div.css({ backgroundPosition: bgPos });
    });
  });
  
  // Holds the vertical margin for jumbotrons.
  var jtMargin = 0;

  // Functionality for resizing the browser.
  function resizeFrame() {
    jtMargin = ($('.parallax').height() - $('.jumbotron').height()) / 2;

    $('.jumbotron').css({ margin: jtMargin + 'px 0' });
  }

  // Add resizeFrame() event.
  jQuery.event.add(window, 'load', resizeFrame);
  jQuery.event.add(window, 'resize', resizeFrame);
});

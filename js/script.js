$(document).ready(function() {
  $('#copyright').html('&copy ' + new Date().getFullYear());

  $window = $(window);

  $('.parallax').each(function() {
    var $div = $(this);

    $window.scroll(function() {
      var yPos = -($window.scrollTop() / $div.data('scrolling-speed'));
      var bgPos = '50% ' + yPos + 'px';
    
      $div.css({ backgroundPosition: bgPos });
    });
  });
  
  function resizeFrame() {
    var jtMargin = ($('.parallax').height() - $('.jumbotron').height()) / 2;

    $('.jumbotron').css({ margin: jtMargin + 'px 0' });
  }
  
  jQuery.event.add(window, 'load', resizeFrame);
  jQuery.event.add(window, 'resize', resizeFrame);
});

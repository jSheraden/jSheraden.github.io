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

  jQuery.event.add(window, 'load', resizeFrame);
  jQuery.event.add(window, 'resize', resizeFrame);
  
  function resizeFrame() {
    var jumbotronPadding = $(window).width() < 750 ? '100px 0' : '220px 0';
    $('.jumbotron').css({ 'padding': jumbotronPadding });
  }
});

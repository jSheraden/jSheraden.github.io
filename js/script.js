$(document).ready(function() {
  $('#copyright').html('&copy ' + new Date().getFullYear());
  
  jQuery.event.add(window, 'load', resizeFrame);
  jQuery.event.add(window, 'resize', resizeFrame);
  
  function resizeFrame() {
    var jumbotronPadding = $(window).width() < 750 ? '100px 0' : '220px 0';
    $('.jumbotron').css({ 'padding': jumbotronPadding });
  }
});

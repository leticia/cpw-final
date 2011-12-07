$(document).ready(function(){
  $("#slider").nivoSlider({
    effect: 'fade',
    directionNav: true,
    controlNavThumbs: true
  });
});

var currentTime = new Date()
var year = currentTime.getFullYear()
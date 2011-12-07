$(document).ready(function(){
  $("#slider").nivoSlider({
    effect: 'fade',
	animSpeed: 900, // Slide transition speed
    pauseTime: 7000, // How long each slide will show
	controlNav: false, // 1,2,3... navigation
	directionNav: false,
    controlNavThumbs: false,
	randomStart: true,
  //  directionNav: true,
 //   controlNavThumbs: true
  });
});

var currentTime = new Date()
var year = currentTime.getFullYear()
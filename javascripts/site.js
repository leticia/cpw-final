/*********************************************
 * Slider
 *********************************************/
$(document).ready(function(){
  //Inicializadores dos sliders
  //Slider da página inicial, sem thumbnails
  $("#slider").nivoSlider({
    effect: 'fade',
    animSpeed: 900,
    pauseTime: 7000,
    controlNav: false,
    directionNav: false,
    controlNavThumbs: false,
    randomStart: true
  });

  $("#portfolio-gallery").nivoSlider({
    effect: 'fade',
    animSpeed: 900,
    pauseTime: 7000,
    controlNav: true,
    directionNav: true,
    controlNavThumbs: true
  });

  //Faz com que a última thumbnail tenha margem direita 0
  $("#portfolio-gallery a.nivo-control:last-child").css('margin-right', '0');
});

/*********************************************
 * Rodapé - variáveis
 *********************************************/
var currentTime = new Date();
var year = currentTime.getFullYear();

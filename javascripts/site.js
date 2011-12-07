/*********************************************
 * Slider
 *********************************************/
//Inicializa o slider
$(document).ready(function(){
  $("#slider").nivoSlider({
    effect: 'fade',
    animSpeed: 900, // Slide transition speed
    pauseTime: 7000, // How long each slide will show
    controlNav: false, // 1,2,3... navigation
    directionNav: false,
    controlNavThumbs: false,
    randomStart: true
  });

  //Faz com que a última thumbnail tenha margem direita 0
  $("#slider a.nivo-control:last-child").css('margin-right', '0');
});

/*********************************************
 * Rodapé - variáveis
 *********************************************/
var currentTime = new Date();
var year = currentTime.getFullYear();

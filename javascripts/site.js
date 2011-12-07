/*********************************************
 * Slider
*********************************************/
//Inicializa o slider
$(document).ready(function(){
  $("#slider").nivoSlider({
    effect: 'fade',
    directionNav: true,
    controlNavThumbs: true
  });

  //Faz com que a última thumbnail tenha margem direita 0
  $("#slider a.nivo-control:last-child").css('margin-right', '0');
});


/*********************************************
 * Rodapé - variáveis
*********************************************/

var currentTime = new Date();
var year = currentTime.getFullYear();

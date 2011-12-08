/*******************************
Google Analytics
********************************/
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27558064-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

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

/*$(document).ready(function(){
	 alert(Utf8.encode('Está página de blog não está com as funcionalidades implementadas ainda.'));
	});*/
	
	function aviso(){
	alert('Está página de blog não está com as funcionalidades implementadas ainda.');
	}
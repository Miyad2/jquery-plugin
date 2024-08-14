$(document).ready(function () {
	$('.counter').counterUp({
		delay: 50,
		time: 3000,
	});
//
$('[data-fancybox="gallery]').fancybox();

$('.clients').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
//

$(".circle-progress").percircle({
	progressBarColor: "#CC3366",
	percent: 65 ,
	
	
});
$(".circle-progress-1").percircle({
	progressBarColor: "#CC3366",
	percent: 80.5 ,
	
});
$(".circle-progress-2").percircle({
	progressBarColor: "#CC3366",
	percent: 100 ,
	
});
//
$('[maxlength]').maxlength();
//
var countdown = $("#countdown").countdown360({
    radius      : 60,
    seconds     : 100,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete  : function () { console.log('done') }
});
countdown.start();

// =====================

$(".waterRipples").ripples({
  dropRadius: 30,
  perturbance: 0.04,
  resolution:300,
});














});
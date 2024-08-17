
// wow js
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

// Jquery 

//Counter
$(document).ready(function () {
	$('.counter').counterUp({
		delay: 50,
		time: 3000,
	});

//Fancybox
$('[data-fancybox="gallery]').fancybox();

//slider
$('.clients').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

//Progress
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

// AOS
AOS.init();

//Word Length
$('[maxlength]').maxlength();

//Countdown
var countdown = $("#countdown").countdown360({
    radius      : 60,
    seconds     : 100,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete  : function () { console.log('done') }
});
countdown.start();

// waterRipples
$(".waterRipples").ripples({
  dropRadius: 30,
  perturbance: 0.04,
  resolution:300,
});

//Isotope
var $grid = $('.grid').isotope({
});
$('.btn').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// Loader
$(window).on("load",function(){

$.preloader.start({
  modal: true,
  src : 'img/sprites2.png'
});

setTimeout(function(){
  $.preloader.stop();
}, 3000);

})

// Timer
$('#change_options').syotimer({
  periodic: true,
  periodInterval: 3,
  periodUnit: 'd'
});







});

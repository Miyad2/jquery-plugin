$(function(){

	$('.aa-paralax').each(function(){
	  var $bgobj = $(this);
		$(window).scroll(function() {

			var offset = $bgobj.offset();
			var elemTop = offset.top;
			var windowBottom = $(window).scrollTop() + $(window).height();

		   // Calculate offset based on element relative to window
		   var elemRel = elemTop - $(window).scrollTop();
		   var yPos = elemRel / $bgobj.data('speed');
		   var coords = '50% '+ yPos + 'px';


		   //Start if element is at the top or within browser window 
		   //Stop if element heve been scrolled through
		   
		   if((elemRel < 0 || elemRel < $(window).height()) && elemRel > -$bgobj.height()){
			   $bgobj.css({ backgroundPosition: coords });       
			}

		});
	}); 
});






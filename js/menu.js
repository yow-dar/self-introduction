$(document).ready(function(){

	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
			
			$('#signin').toggleClass('btn black');
			$('#signin').css({
				'line-height' : '',
				'padding' : '0'
			});
		});
    
	    $('#site-cache').click(function(e){
	        $('body').removeClass('with--sidebar');
	        
	        setTimeout(function(){
	        	$('#signin').toggleClass('btn black');
	        	$('#signin').css({
					'line-height' : '10px',
					'padding' : '10px 20pt'
			    });
	        }, 300);
	    });

	})(jQuery);

});
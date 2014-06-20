$(document).ready(function() {

    
    //$('.collapse').collapse();


	$('.my-sticky-element').waypoint('sticky');


	$('.dropdownn-toggle').dropdown();

	$('.menu-item').each(function() {
		var menuItem = $(this);
		var menuItemId = '#link_to_' + menuItem.attr('id');
		menuItem.waypoint(function() {
			$('.highlight').removeClass('highlight');
			$(menuItemId).addClass('highlight');
		});
	});

	
     
    $('#hidden_comment_biography').css('display', 'none');
	$('#portrait_biograghy').hover(function() {
        $('#hidden_comment_biography').animate({width: 'toggle'});
     
	});
    

    $('.hidden_comment').hide();
    $('.the-realm-series').each(function() {
    	
    	var comment = $(this);
    	var commentId = '#hidden_comment_' + comment.attr('id');
    	
    	comment.hover(function() {
    		
    		if($(commentId).is(':hidden')) {
    			$(commentId).slideDown('slow');
    			$(commentId).css('visibility', 'visible');
    		}
    		else {
    		
    			$(commentId).slideUp();
    		}
    	});
    });
    

	// $('#content').css('opacity', '0');
	// $('#content').css('display', 'block');
	// $('#content').hover(function() {
	// 	$('#content').stop().animate({opacity:1}, 'slow');
	// }, function() {
	// 	$('#content').stop().animate({opacity:0}, 'slow');

	// });

	// $('#sometime_in_august').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_sometime').addClass('highlight');
		
	// });

 //    $('#letters_from_monte').waypoint(function() {
 //    	$('.highlight').removeClass('highlight');
	// 	$('#link_to_letters').addClass('highlight');
		
	// });

	// $('#two_lovers').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_lovers').addClass('highlight');
		
	// });

	// $('#the_realm').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_realm').addClass('highlight');
		
	// });


    // $('#sometime_in_august').waypoint(function() {
    //     // $('.highlight').removeClass('highlight');
    //     $('#mid').addClass('showUp')
    // });
	

});





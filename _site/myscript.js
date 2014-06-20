$(document).ready(function() {

    
    //$('.collapse').collapse();


	$('.my-sticky-element').waypoint('sticky');

   
    

    
    //$('#myTab a:first').tab('show');

 //    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	//   e.target // activated tab
	//   e.relatedTarget // previous tab
	// });

    


	//$('.dropdownn-toggle').dropdown();

	$('.menu-item').each(function() {
		var menuItem = $(this);
		var menuItemId = '#link_to_' + menuItem.attr('id');
		menuItem.waypoint(function() {
            $('.highlight').removeClass('highlight');
            $(menuItemId).toggleClass('highlight');
            
            // $('.highlight').removeClass('highlight');
            // $(menuItemId).addClass('highlight');
            
		});
	});

    //$('.remove-highlight').removeClass('highlight');



	
     
 //    $('#hidden_comment_biography').css('display', 'none');
	// $('#portrait_biograghy').hover(function() {
 //        $('#hidden_comment_biography').animate({width: 'toggle'});
     
	// });
    

    // $('.hidden_comment').hide();
    // $('.the-realm-series').each(function() {
    	
    // 	var comment = $(this);
    // 	var commentId = '#hidden_comment_' + comment.attr('id');
    	
    // 	comment.hover(function() {
    		
    // 		if($(commentId).is(':hidden')) {
    // 			$(commentId).slideDown('slow');
    // 			$(commentId).css('visibility', 'visible');
    // 		}
    // 		else {
    		
    // 			$(commentId).slideUp();
    // 		}
    // 	});
    // });
});





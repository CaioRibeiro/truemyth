$(document).ready(function() {

	$('.my-sticky-element').waypoint('sticky');
	$('.menu-item').each(function() {
		var menuItem = $(this);
		var menuItemId = '#link_to_' + menuItem.attr('id');
		menuItem.waypoint(function() {
            $('.highlight').removeClass('highlight');
            $(menuItemId).toggleClass('highlight');
        
		});
	});
});





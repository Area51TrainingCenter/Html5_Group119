jQuery(document).ready(function(){

/*	jQuery("h2").click(function(){
		//jQuery(this).next(".contenedor-acordeon").slideDown("slow");
		jQuery(this).next(".contenedor-acordeon").stop().slideToggle("slow");
	});*/

	// jQuery("h2").click(function(){
	// 	jQuery(".contenedor-acordeon").stop().slideUp("slow");
	// 	jQuery(this).next(".contenedor-acordeon").stop().slideToggle("slow");
	// });

	jQuery("h2").click(function(){
		
		if(jQuery(this).find("i").hasClass("fa-chevron-up"))
		{
			jQuery(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}else{
			jQuery("h2").find("i").removeClass("fa-chevron-up");
			jQuery(this).find("i").addClass("fa-chevron-up");
		}

		jQuery(".contenedor-acordeon").stop().slideUp("slow");
		jQuery(this).next(".contenedor-acordeon").stop().slideToggle("slow");
	});

});
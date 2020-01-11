jQuery(document).ready(function(){

	jQuery("h2").click(function(){
		//jQuery(this).next(".contenedor-acordeon").slideDown("slow");
		jQuery(this).next(".contenedor-acordeon").stop().slideToggle("slow");
	});

});
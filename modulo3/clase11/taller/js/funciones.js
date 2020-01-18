jQuery(document).ready(function(){
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		abrircerrar();
	});

	jQuery(".menu a[href^='#']").click(function(e){
		e.preventDefault();
		abrircerrar();
		var ancla = jQuery(this).attr("href");
		
		if(jQuery(ancla).length > 0)
		{
			jQuery("html,body").animate({
				"scrollTop":jQuery(ancla).offset().top
			},1000,"linear");
		}
	});

	jQuery(".saltarina").click(function(e){
		e.preventDefault();

		var saltarina = jQuery(this);
		var ancla = saltarina.closest("section").next("section").offset().top;
		jQuery("html,body").animate({
			"scrollTop":ancla
		},1000,"linear");
	})


});

function abrircerrar()
{
	jQuery("header.cabecera .menu").toggleClass("abierto");
	jQuery(".hamb i").toggleClass("fa-times");
}

//Load: metodo de carga de la web
jQuery(window).on("load",function(){
	jQuery(".precarga").fadeOut("slow");
	var alto = jQuery("header").height();
	var altointerno = jQuery("header").innerHeight();
	//true es para obtener el alto con margen
	var aloexterno = jQuery("header").outerHeight(true);
	// console.log(alto+" "+altointerno+" "+aloexterno);

	//obtener el hash de la url
	if(window.location.hash)
	{
		var ancla = window.location.hash;
		if(jQuery(ancla).length > 0)
		{
			setTimeout(function(){
				
				jQuery("html,body").animate({
					"scrollTop":jQuery(ancla).offset().top
				},1000,"linear");
			},1000);
		}
		
	}
});


//Metodo scroll
jQuery(window).scroll(function(){
	//scrolltop: punto donde se ubica luego del scroll
	if(jQuery(window).scrollTop() > 100)
	{
		jQuery("header").addClass("nombre");
	}else{
		jQuery("header").removeClass("nombre");
	}
});


//Resize: evento para detectar si la ventana tuvo cambio de tamaño
jQuery(window).resize(function(){
	console.log(jQuery(window).width());
});
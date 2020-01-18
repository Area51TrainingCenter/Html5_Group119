jQuery(document).ready(function(){
	jQuery(".hamb").click(function(){
		jQuery("header.cabecera .menu").toggleClass("abierto");
		jQuery(".hamb i").toggleClass("fa-times");
	});
});


jQuery(window).on("load",function(){
	jQuery(".precarga").fadeOut("slow");
	var alto = jQuery("header").height();
	var altointerno = jQuery("header").innerHeight();
	//true es para obtener el alto con margen
	var aloexterno = jQuery("header").outerHeight(true);
	console.log(alto+" "+altointerno+" "+aloexterno);
});


jQuery(window).resize(function(){
	console.log(jQuery(window).width());
});
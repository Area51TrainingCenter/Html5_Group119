jQuery(document).ready(function(){

	jQuery(".thumb").click(function(){
		var indice = jQuery(this).index() + 1;
		var ruta = jQuery(this).find("img").attr("src");
		var titulo = jQuery(this).find("img").attr("title");
		jQuery(".thumb").removeClass("borde");
		jQuery(this).addClass("borde");
		jQuery(".contenedor-imagen img").attr("src",ruta);
		jQuery(".contenedor-imagen h2").text(titulo);
		jQuery(".contenedor-imagen .contador").text(indice);
	});

})
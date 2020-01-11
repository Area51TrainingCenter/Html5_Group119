jQuery(document).ready(function(){

	jQuery(".abrirlightbox").click(function(e){
		e.preventDefault();

		var ruta = jQuery(this).attr("href");

		jQuery(".contenedor-img img").attr("src",ruta);
		jQuery(".trama").attr("class","trama abierto");
		jQuery(".contenedor-img").attr("class","contenedor-img abierto");
	});

	jQuery(".cerrar").click(function(){
		jQuery(".trama").attr("class","trama");
		jQuery(".contenedor-img").attr("class","contenedor-img");
	});
});
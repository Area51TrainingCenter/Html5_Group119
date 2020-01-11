var indice = 0;

jQuery(document).ready(function(){

	jQuery(".siguiente").click(function(){

		jQuery("#cuadrado1").next(".cuadrado").addClass("circulo");

	});

	jQuery(".todoslossiguientes").click(function(){

		jQuery("#cuadrado1").nextAll(".cuadrado").addClass("circulo");

	});

	jQuery(".ocultar").click(function(){

		jQuery(".cuadrado").fadeOut("slow",function(){
			alert("hola mundo ocultar");
		});
	});


	jQuery(".cuadrado").click(function(){
		indice = jQuery(this).index();
	});

	jQuery(".seleccionarporindice").click(function(){
		jQuery(".circulo").stop().slideUp();
		jQuery(".circulo").eq(indice).slideDown();
	});

	jQuery(".buscar").click(function(){

		jQuery(".cuadrado").find("div").addClass("texto");
	});



});

// function luegoclick()
// {
// 	alert("hola mundo");
// }
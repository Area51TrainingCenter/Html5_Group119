jQuery(document).ready(function(){

	jQuery(".mostrar").click(function(){

		jQuery(".cuadrado").fadeIn("slow",function(){
			alert("hola mundo mostrar");
		});

	});

	jQuery(".ocultar").click(function(){

		jQuery(".cuadrado").fadeOut("slow",function(){
			alert("hola mundo ocultar");
		});
	});


	jQuery(".mostraryocultar").click(function(){

		jQuery(".cuadrado").fadeToggle("slow",function(){
			alert("hola mundo mostrar y ocultar");
		});
	});



});

// function luegoclick()
// {
// 	alert("hola mundo");
// }
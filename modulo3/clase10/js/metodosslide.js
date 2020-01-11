jQuery(document).ready(function(){

	jQuery(".mostrar").click(function(){

		jQuery(".cuadrado").slideDown("slow",function(){
			//alert("hola mundo mostrar");
		});

	});

	jQuery(".ocultar").click(function(){

		jQuery(".cuadrado").slideUp("slow",function(){
			//alert("hola mundo ocultar");
		});
	});


	jQuery(".mostraryocultar").click(function(){

		jQuery(".cuadrado").slideToggle("slow",function(){
			//alert("hola mundo mostrar y ocultar");
		});
	});

});

// function luegoclick()
// {
// 	alert("hola mundo");
// }
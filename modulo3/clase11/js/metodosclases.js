jQuery(document).ready(function(){

	jQuery(".agregarclase").click(function(){

		jQuery(".cuadrado").addClass("circulo");

	});

	jQuery(".quitarclase").click(function(){

		jQuery(".cuadrado").removeClass("circulo");
	});


	jQuery(".agregaquitaclase").click(function(){

		jQuery(".cuadrado").toggleClass("circulo");
	});

	jQuery(".verificarclase").click(function(){

		if(jQuery(".cuadrado").hasClass("circulo"))
		{
			alert("Tiene clase Circulo");
		}else{
			alert("No tiene clase Circulo");
		}
	});

});

// function luegoclick()
// {
// 	alert("hola mundo");
// }
var ancho = jQuery(window).width() - jQuery(".cuadrado").width() ;
var alto = jQuery(window).height() - jQuery(".cuadrado").height() ;


jQuery(document).ready(function(){
	// jQuery(".cuadrado").click(function(){
	// 	var cuadrado = jQuery(this);

	// 	cuadrado.animate({
	// 		"width": "+=200",
	// 		"height":"+=200",
	// 		"background-color":"#ff0000"
	// 	},2000,"linear",function(){
	// 		// alert("termino");
	// 	});
	// });
	jQuery(".cuadrado").css({
		"width" : "80px",
		"height" : "80px"
	});
	empezar();
});

function empezar()
{
	var cuadrado = jQuery(".cuadrado");
	cuadrado.animate({
		"left": ancho,
		"background-color":"#ff0000"
	},2000,"linear",function(){
		cuadrado.animate({
			"top": alto,
			"background-color":"#0000ff"
		},2000,"linear",function(){
			cuadrado.animate({
			"left": 0,
			"background-color":"yellow"
			},2000,"linear",function(){
				cuadrado.animate({
				"top": 0,
				"background-color":"#00ff00"
				},2000,"linear",function(){
					empezar();
				});				
			});	
		});	
	});
}

jQuery(window).resize(function(){
	ancho = jQuery(window).width() - jQuery(".cuadrado").width() ;
	alto = jQuery(window).height() - jQuery(".cuadrado").height() ;
});
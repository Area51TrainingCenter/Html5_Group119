jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){
		var cuadrado = jQuery(this);

		cuadrado.animate({
			"width": "+=200",
			"height":"+=200",
			"background-color":"#ff0000"
		},2000,"linear",function(){
			// alert("termino");
		});
	});
});
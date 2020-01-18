var valor = 1;

jQuery(document).ready(function(){

	jQuery(".agregardebajo").click(function(e){
		e.preventDefault();
		jQuery("section").append('<div class="cuadrado">'+valor+'</div>');
		valor++;
	});

	jQuery(".agregarencima").click(function(e){
		e.preventDefault();
		jQuery("section").prepend('<div class="cuadrado">'+valor+'</div>');
		valor++;
	});

	jQuery(".reemplazar").click(function(e){
		e.preventDefault();
		jQuery("section").html('<div class="cuadrado">'+valor+'</div>');
		valor=0;
	});

	jQuery(".resetear").click(function(e){
		e.preventDefault();
		var plantilla = jQuery(".plantilla").html();

		jQuery("section").html(plantilla);
		valor++;
	});

	jQuery(".activarclick").click(function(e){
		e.preventDefault();
		jQuery(document).on("click",".cuadrado",function(){
			jQuery(this).remove();
			jQuery(document).off("click",".cuadrado");
		});
	});

});



	jQuery(document).on("click",".cuadrado",function(){
		jQuery(this).remove();
		jQuery(document).off("click",".cuadrado");
	});

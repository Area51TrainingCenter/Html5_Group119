jQuery(document).ready(function(){


	jQuery(".hamb").click(function(){
		jQuery("header.cabecera .menu").toggleClass("abierto");
		jQuery(".hamb i").toggleClass("fa-times");

	});

});
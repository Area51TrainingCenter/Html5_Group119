var h1 = document.getElementById("texto");
var input = document.getElementById("nombre");

h1.innerHTML = "Hola soy skynet";
h1.id = "xixa";
h1.className = "xixa";
// alert(h1.className);

input.value = "Hola soy skynet";

var nombre = input.value;
// console.log(nombre);

var elementos = document.getElementsByClassName("elemento");

for (var i = 0; i < elementos.length; i++ ) {
	elementos[i].id = "alonso"+i;
}

var elementos2 = document.getElementsByTagName("h2");

for (var i = 0; i < elementos2.length; i++ ) {
	elementos2[i].innerHTML = "Soy el h2 en posicion "+i;
}

var campo = document.querySelector("input[type='text']");
campo.value = "Seleccionado";

var campos = document.querySelectorAll(".elemento");


for (var i = 0; i < campos.length; i++ ) {
	campos[i].innerHTML = "Soy el h2 en posicion "+i+" usando querySelectorAll";
}






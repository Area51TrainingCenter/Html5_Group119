function llamar()
{
	alert("haciendo click en h1");
}

var h1 = document.getElementById("texto");

h1.addEventListener("click",function(){
	alert("estoy haciendo con addvenetlistener");
});

 h1.onclick = function(){
	alert("estoy haciendo con metodo de h1");
 }
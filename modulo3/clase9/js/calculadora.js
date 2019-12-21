var resultado = document.getElementById("resultado");
var simbolo = "";
var numeroauxiliar = 0;

function operacion(n)
{
	simbolo = n;
	numeroauxiliar = parseFloat(resultado.value);
	resultado.value = "";
}

function limpiar()
{
	resultado.value = "";
	simbolo = "";
	numeroauxiliar = "";
}

function crearnumero(n)
{
	resultado.value = resultado.value + n;
}

function igual()
{
	var numeroactual = parseFloat(resultado.value);

	if(simbolo == "sumar")
	{
		resultado.value = numeroauxiliar + numeroactual;
	}

	if(simbolo == "restar")
	{
		resultado.value = numeroauxiliar - numeroactual;
	}

	if(simbolo == "multiplicr")
	{
		resultado.value = numeroauxiliar * numeroactual;
	}

	if(simbolo == "dividir")
	{
		resultado.value = numeroauxiliar / numeroactual;
	}
}
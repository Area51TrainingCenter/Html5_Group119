<?php

$varibles = $_POST;

$user = $_POST["user"];

$pass = $_POST["pass"];
// print_r($varibles);

if($user == "alonso" and $pass == "123456")
{
	echo "Esta logueado";
}else{
	echo "No esta logueado";
}


?>
<?php 
	session_start();
	
	//Conexion a la base de datos
	$user="root";
	$pass="";
	$server="localhost";
	$db="tfg";
	$con=mysqli_connect($server,$user,$pass,$db);
	
	//Pasamos los datos necesarios para crear una cuenta
	$userCreate = $_POST['userCreateUser'];
	$passCreate = $_POST['passwordCreateUser'];
	$mailCreate = $_POST['mailCreateUser'];

	$nameCreate = $_POST['nameCreateUser'];
	$surnameCreate = $_POST['surnameCreateUser'];
	$birthCreate = $_POST['birthdateCreateUser'];
	$countryCreate = $_POST['countryCreateUser'];

	//comprobamos si existe el nombre de usuario en la base de datos
	$testRepetitions = "SELECT * FROM users where user = '$userCreate'";
	$result = mysqli_query($con, $testRepetitions);
	$num = mysqli_num_rows($result);
	//Si existe mostramos el mensaje de que el usuario está, si no, lo metemos en la tabla
	if($num == 1){
	}else{
		$reg = "insert into users(user, password, mail, name, surname, birthdate, country) values ('$userCreate',
		'$passCreate', '$mailCreate', '$nameCreate', '$surnameCreate', '$birthCreate', '$countryCreate')";
		mysqli_query($con, $reg);
		header('location:user.php');
		}
?>
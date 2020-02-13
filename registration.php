<?php 
	session_start();
	
	//Cuando el usuario complete el registro se le devolverá esta página
	header('location:sign-up.html');
	
	//Conexion a la base de datos
	$user="pablo";
	$pass="Pablete107";
	$server="localhost";
	$db="tfg";
	$con=mysqli_connect($server,$user,$pass,$db);
	
	//Pasamos los datos necesarios para crear una cuenta
	$userRegistration = $_POST['user'];
	$passRegistration = $_POST['password'];
	$mailRegistration = $_POST['mail'];

	$nameRegistration = $_POST['name'];
	$surnameRegistration = $_POST['surname'];
	$birthRegistration = $_POST['birthdate'];
	$countryRegistration = $_POST['country'];

	//comprobamos si existe el nombre de usuario en la base de datos
	$testRepetitions = "SELECT * FROM users where user = '$userRegistration'";
	$result = mysqli_query($con, $testRepetitions);
	$num = mysqli_num_rows($result);
	//Si existe mostramos el mensaje de que el usuario está, si no, lo metemos en la tabla
	if($num == 1){
		echo "Username taken";
	}else{
		$reg = "insert into users(user, password, mail, name, surname, birthdate, country) values ('$userRegistration',
		'$passRegistration', '$mailRegistration', '$nameRegistration', '$surnameRegistration', '$birthRegistration', '$countryRegistration')";
		mysqli_query($con, $reg);
		echo "Registration successful";
		}
?>


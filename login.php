<?php 
	session_start();
	
	//Conexion a la base de datos
	$user="pablo";
	$pass="Westfalia_106";
	$server="localhost";
	$db="tfg";
	$con=mysqli_connect($server,$user,$pass,$db);
	
	//Pasamos los datos necesarios para crear una cuenta
	$userLogin = $_POST['userLogin'];
	$passLogin = $_POST['passwordLogin'];

	//comprobamos si existe el nombre de usuario en la base de datos
	$testUser = "SELECT * FROM users WHERE user = '$userLogin' && password = '$passLogin'";
	$result = mysqli_query($con, $testUser);
	$num = mysqli_num_rows($result);
	//Si existe mostramos el mensaje de que el usuario está, si no, tendrá acceso a la consola de administración
	if($num == 1){
		//Coge el nombre de usuario que ha iniciado sesion
		$_SESSION['username'] = $userLogin;
		header('location:admin/user.php');
	}else{
		header('location:index.html');
		}
?>


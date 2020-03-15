<!DOCTYPE html>
<html lang="en">
<?php 
	session_start();
	//Si no está la sesion iniciada no te deja ir a 'user.php'
	if (!isset($_SESSION['username'])) {
		header('location:../index.html');
	}

	//Conexion a la base de datos
	$user="pablo";
	$pass="Westfalia_106";
	$server="localhost";
	$db="tfg";
	$con = mysqli_connect($server,$user,$pass,$db);

	if (!$con) {
		echo 'No se pudo conectar con el server'. mysql_error();
	}else{
		$consulta = "SELECT user,mail,name,surname FROM users";
		$resultado = mysqli_query($con,$consulta);
	}
?>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Hi <?php echo $_SESSION['username']; ?></title>
	<link rel="stylesheet" type="text/css" href="userStyle.css">
	<script src="jsAdmin.js"></script>
</head>
<body>
	<div id="contenedorConfirmacion">
		<div id="contenedorEditUser">
			<div id="photoEditUserUser"><img src="../img/photoUsers/defaultPhoto.png" alt="photoUser"></div>
			<span><label for="user">User</label></span><input type="text" name="EditUserUser" value="paf106"><br>
			<span><label for="name">Name</label></span><input type="text" name="EditUserUser" value="Pablo"><br>
			<span><label for="surname">Surname</label></span><input type="text" name="EditUserUser" value="Avila Fernandez"><br>
			<span><label for="email">Email</label></span><input type="mail" name="EditUserUser" value="pabloavila106@gmail.com">
			<div id="buttonsAlertEditUser">
				<button type="button" id="alertEditUserYes" name="AlertEditUser" value="Edit"><b>Edit</b></button>
				<button type="button" id="alertEditUserNo" name="AlterEditUser" value="Cancel" onclick="cancelAlertEditUser()"><b>Cancel</b></button>
			</div>
		</div>


		<div id="contenedorDelUser">
			<p><b>Are you sure?</b></p><br>
			<div id="buttonsAlertDelUser">
				<button type="button" id="alertDelUserYes" name="AlertDelUser" value="Yes"><b>Yes</b></button>
				<button type="button" id="alertDelUserNo" name="AlterDelUser" value="No" onclick="closeAlertDelUser()"><b>No</b></button>
			</div>
		</div>
	</div>
		<header>
			<nav>
				<!--HAY QUE HACER LAS CLASES OTRA VEZ-->
				<!--<p><span class="black">PABLO</span><span class="darkblue">IT</span></p>-->
				<ul>
					<!-- Nombres que aparecen a simple vista-->
					<li><a href="user.html">Users</a></li>
					<li><a href="pcs.html">PCs</a></li>
					<li><a href="#">Algo</a></li>
					<li><a href="#">Tools</a>
						<ul>
							<li><a href="#">Create user</a></li>
							<li><a href="#">Change password</a></li>
							<li><a href="#">Change photo</a></li>
						</ul>
					</li>
					<li id="signOut"><a href="logout.php">Sign out</a></li>
					
				</ul>
			</nav>
		</header><!-- /header -->
		
		<section>
			
			<div id="contenedorPricipalUser">
				 <!--LEYENDA DE LOS CAMPOS-->
				<div id="contenedorSectionLeyenda">
					<div id="contenedorLeyenda">
						<div id="photoLeyenda"><b>PHOTO</b></div>
						<div id="userLeyenda"><b>USER</b></div>
						<div id="nameLeyenda"><b>NAME</b></div>
						<div id="surnameLeyenda"><b>SURNAME</b></div>
						<div id="mailLeyenda"><b>EMAIL</b></div>
						<div id="mailLeyenda"><b>BUTTONS</b></div>
					</div>
				</div>
				<!-- Codigo php que muestra todos los usarios de la base de datos-->
		<?php 					
						while ($row = mysqli_fetch_array($resultado)) {

										
						echo '<div id="contenedorSectionUser">';
							echo '<div id="contenedorUser">';
								echo '<div id="photoUser"><img src="../img/photoUsers/defaultPhoto.png" alt="photoUser"></div>';
								echo '<div id="userUser"><b>';echo $row["user"];echo "</b></div>";
								echo '<div id="nameUser">';echo $row["name"];echo "</div>";
								echo '<div id="surnameUser">';echo $row["surname"];echo "</div>";
								echo '<div id="mailUser">';echo $row["mail"];echo "</div>";
						echo '<div id="buttonsEditDel">';
							echo '<div id="editUserB">';
							echo '<button type="button" name="" id="editUserButton" value=""><img src="../img/editUser.png" alt="editUser_Image" onclick="editUserConfirmation()"></button>';
						echo "</div>";
						echo '<div id="delUserB">';
							echo '<button type="button" name="" id="delUserButton" value=""><img src="../img/delUser.png" alt="delUser_Image" onclick="delUserConfirmation()"></button>';
						echo "</div>";
					echo "</div>";
					echo "</div>";
						echo "</div>";
						}
						?>
			</div>

		</section>
		<footer>Made by Pablo Avila Fernandez</footer>
</body>
</html>
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
	$pass="Pablete107";
	$server="localhost";
	$db="tfg";
	$con = mysqli_connect($server,$user,$pass,$db);

	//Coge los datos de la base de datos
	if (!$con) {
		echo 'No se pudo conectar con el server'. mysql_error();
	}else{
		$consulta = "SELECT user,mail,name,surname FROM users";
		$resultado = mysqli_query($con,$consulta);
	}
?>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Hi <?php echo $_SESSION['username']; ?></title>
	<link rel="stylesheet" type="text/css" href="userStyle.css">
	<script src="jsAdmin.js"></script>
</head>
<body>
	<div id="contenedorConfirmacion">
		<!--CONTENEDOR EDICION DE USUARIO -->
		<div id="contenedorEditUser">
			<div id="photoEditUserUser"><img src="../img/photoUsers/defaultPhoto.png" alt="photoUser"></div>
			<span><label for="user">User</label></span><input type="text" name="EditUserUser" value="paf106"><br>
			<span><label for="name">Name</label></span><input type="text" name="EditUserUser" value="Pablo"><br>
			<span><label for="surname">Surname</label></span><input type="text" name="EditUserUser" value="Avila Fernandez"><br>
			<span><label for="email">Email</label></span><input type="mail" name="EditUserUser" value="pabloavila106@gmail.com">
			<div id="buttonsAlertEditUser">
				<button type="button" id="alertEditUserYes" name="AlertEditUser" value="Edit"><b>Edit</b></button>
				<button type="button" id="alertEditUserNo" name="AlterEditUser" value="Cancel" onclick="closeAlert('contenedorEditUser')"><b>Cancel</b></button>
			</div>
		</div>
		
		<!--SELECCION PARA CREAR UN USUARIO-->
		<div id="contenedorCreateUser">
			<p class="titleWindow"><b>Create user</b></p><br>
				<form action="createUser.php" method="post" autocomplete="no">
					<input type="text" name="userCreateUser" id="userCreateUser" value="" placeholder="User" onchange="checkUser('userCreateUser')" required><br>
					<div id="checkUserText"><span>* Username must have at least 5 characters</span><br></div>
					<div id="checkUserBBDDText"><span>* This user is already taken</span><br></div>
					<input type="password" name="passwordCreateUser" id="passwordCreateUser" value="" placeholder="Password" required><br>
					<input type="password" name="repeatPasswordCreateUser" id="repeatPasswordCreateUser" value="" placeholder="Repeat password" required onchange="checkPassword('passwordCreateUser', 'repeatPasswordCreateUser')"><br>
					<div id="passLengthText"><span>* Password >= 8 charaters</span><br></div>
					<div id="passCapitalLetterText"><span>* Password at least 1 capital letter</span><br></div>
					<div id="passNumberText"><span>* Password at least 1 number</span><br></div>
					<div id="blankSpacesText"><span>* Password has blank spaces</span><br></div>
					<div id="emptyFieldText"><span>* Password field is empty</span><br></div>
					<input type="email" name="mailCreateUser" id="mailCreateUser" value="" placeholder="Mail" required onchange="resaltarEmailField('mailCreateUser')"><br>
					<input type="text" name="nameCreateUser" id="nameCreateUser" value="" placeholder="Name" required><br>
					<input type="text" name="surnameCreateUser" id="surnameCreateUser" value="" placeholder="Surname" required><br>
					<input type="date" name="birthdateCreateUser" id="birthCreateUser" value="" required><br>
					<select name="countryCreateUser" id="countryCreateUser" style="width: -moz-available;" required>
						<option value="Spain">Spain</option>
						<option value="France">France</option>
						<option value="Germany">Germany</option>
						<option value="Portugal">Portugal</option>
						<option value="United Kindom">United Kindom</option>
						<option value="United States">United States</option>
						<option value="Switzerland">Switzerland</option>
						<option value="Turkey">Turkey</option>
						<option value="Italy">Italy</option>
						<option value="Sweden">Sweden</option>
						</select>
				
					<div id="buttonsAlertDelUser">
						<button type="submit" name="Create" id="alertDelUserYes" onclick="checkToSubmit()"><b>Create</b></button>
						<button type="button" id="alertDelUserNo" name="AlterDelUser" value="No" onclick="closeAlert('contenedorCreateUser')"><b>Cancel</b></button>
					</div>
				</form>
		</div>
		<!--SELECCION DE USUARIO PARA CAMBIAR CONTRASEÑA -->
		<div id="contenedorSelectUser">
			
			<p class="titleWindow"><b>Select user: </b></p>
			<select name="userList">
			<?php 			
				//Conexion con la base de datos
				if (!$con) {
					echo 'No se pudo conectar con el server'. mysql_error();
				}else{
					//Cogemos el campo 'user' de la base de daros
					$pullUser = "SELECT user FROM users";
					$resultado2 = mysqli_query($con,$pullUser);
				}		
				while ($row = mysqli_fetch_array($resultado2)) {
						echo '<option value="';echo $row['user'];echo '">'; echo $row['user'];echo '</option>';
					}
			?>
			</select>
			<div id="buttonsAlertDelUser">
				<button type="submit" id="alertDelUserYes" name="submitUser" value="ok" onclick="openAlert('contenedorEditPass')"><b>OK</b></button>
				<button type="button" id="alertDelUserNo" name="AlterDelUser" value="No" onclick="closeAlert('contenedorSelectUser')"><b>Cancel</b></button>
			</div>
		</div>

		<!--CONTENEDOR EDICION DE CONTRASEÑA DE USUARIO -->
		<div id="contenedorEditPass">
			<input type="password" name="editPassUser" id="editPassPreviousPass" value="" placeholder="Previous password" onblur="checkPass('editPassPreviousPass')"><br>

			<input type="password" name="editPassUser" id="editPassNewPass" value="" placeholder="New password"><br>
			<input type="password" name="editPassUser" id="editPassRepeatPass" value="" placeholder="Repeat password">
			<div id="buttonsAlertDelUser">
				<button type="button" id="alertDelUserYes" name="AlertDelUser" value="ok"><b>OK</b></button>
				<button type="button" id="alertDelUserNo" name="AlterDelUser" value="No" onclick="closeAlert('contenedorEditPass'); closeAlert('contenedorSelectUser')"><b>Cancel</b></button>
			</div>
		</div>

		<!--CONTENEDOR ELIMINACION DE USUARIO -->
		<div id="contenedorDelUser">
			<p class="titleWindow"><b>Are you sure?</b></p><br>
			<div id="buttonsAlertDelUser">
				<button type="button" id="alertDelUserYes" name="AlertDelUser" value="Yes"><b>Yes</b></button>
				<button type="button" id="alertDelUserNo" name="AlterDelUser" value="No" onclick="closeAlert('contenedorDelUser')"><b>No</b></button>
			</div>
		</div>
	</div>
		<header>
			<nav>
				<!--HAY QUE HACER LAS CLASES OTRA VEZ-->
				<!--<p><span class="black">PABLO</span><span class="darkblue">IT</span></p>-->
				<ul>
					<!-- Nombres que aparecen a simple vista-->
					<li><a href="user.php">Users</a></li>
					<li><a href="pcs.html">PCs</a></li>
					<li><a href="#">Algo</a></li>
					<li><a href="#">Tools</a>
						<ul>
							<li><a href="#" onclick="openAlert('contenedorCreateUser')">Create user</a></li>
							<li><a href="#" onclick="openAlert('contenedorSelectUser')">Change password</a></li>
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
							echo '<button type="button" name="" id="editUserButton" value=""><img src="../img/editUser.png" alt="editUser_Image" onclick="openAlert(\'contenedorEditUser\')"></button>';
						echo "</div>";
						echo '<div id="delUserB">';
							echo '<button type="button" name="" id="delUserButton" value=""><img src="../img/delUser.png" alt="delUser_Image" onclick="openAlert(\'contenedorDelUser\')"></button>';
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
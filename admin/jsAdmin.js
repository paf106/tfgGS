/* JAVASCRIPT ADMINISTRACION USUARIO */
function openAlert(divAMostrar){
	/* Pone header, section y footer en fondo blur */
	document.getElementById("contenedorConfirmacion").style.display = "flex";
	document.getElementById("contenedorConfirmacion").style.zIndex = "1";
	document.getElementById(divAMostrar).style.zIndex = "1";
	document.getElementById(divAMostrar).style.display = "block";

	document.querySelector("header").style.filter = "blur(2px)";
	document.querySelector("section").style.filter = "blur(2px)";
	document.querySelector("footer").style.filter = "blur(2px)";
}
function closeAlert(divACerrar){
	/* Quita header, section y footer del fondo blur */
	document.querySelector("header").style.filter = "none";
	document.querySelector("section").style.filter = "none";
	document.querySelector("footer").style.filter = "none";
	/* */
	document.getElementById("contenedorConfirmacion").style.zIndex = "auto";
	document.getElementById(divACerrar).style.zIndex = "auto";

	document.getElementById("contenedorConfirmacion").style.display = "none";
	document.getElementById(divACerrar).style.display = "none";
}
function openEditPassAlert(){
		/* Quita header, section y footer del fondo blur */
	document.querySelector("header").style.filter = "none";
	document.querySelector("section").style.filter = "none";
	document.querySelector("footer").style.filter = "none";
	/* */
	document.getElementById("contenedorConfirmacion").style.zIndex = "auto";
	document.getElementById("contenedorSelectUser").style.zIndex = "auto";

	document.getElementById("contenedorConfirmacion").style.display = "none";
	document.getElementById("contenedorSelectUser").style.display = "none";
	
	//Capturamos el usuario al cual le queremos cambiar la contraseña
	var userChangePass = document.getElementsByName('userList');

		/* Pone header, section y footer en fondo blur */
	document.getElementById("contenedorConfirmacion").style.display = "flex";
	document.getElementById("contenedorConfirmacion").style.zIndex = "1";
	document.getElementById("contenedorEditPass").style.zIndex = "1";
	document.getElementById("contenedorEditPass").style.display = "block";

	document.querySelector("header").style.filter = "blur(2px)";
	document.querySelector("section").style.filter = "blur(2px)";
	document.querySelector("footer").style.filter = "blur(2px)";

	return userChangePass;
}
function checkPass(campo){
	var pass = document.getElementById(campo).value;
	return pass;
}
/* FIN JAVASCRIPT ADMINISTRACION USUARIO */
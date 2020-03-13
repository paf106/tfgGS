/* JAVASCRIPT ADMINISTRACION USUARIO */
function delUserConfirmation(){
	/* Pone header, section y footer en fondo blur */
	document.getElementById("contenedorConfirmacion").style.display = "flex";
	document.getElementById("contenedorConfirmacion").style.zIndex = "1";
	document.getElementById("contenedorDelUser").style.zIndex = "1";
	document.getElementById("contenedorDelUser").style.display = "block";

	document.querySelector("header").style.filter = "blur(2px)";
	document.querySelector("section").style.filter = "blur(2px)";
	document.querySelector("footer").style.filter = "blur(2px)";

	
}
function closeAlertDelUser(){
	/* Quita header, section y footer del fondo blur */
	
	document.querySelector("header").style.filter = "none";
	document.querySelector("section").style.filter = "none";
	document.querySelector("footer").style.filter = "none";
	document.getElementById("contenedorConfirmacion").style.zIndex = "auto";
	document.getElementById("contenedorDelUser").style.zIndex = "auto";

	document.getElementById("contenedorConfirmacion").style.display = "none";
	document.getElementById("contenedorDelUser").style.display = "none";
	
}
function editUserConfirmation(){
	/* Pone header, section y footer en fondo blur */
	document.getElementById("contenedorConfirmacion").style.display = "flex";
	document.getElementById("contenedorConfirmacion").style.zIndex = "1";
	document.getElementById("contenedorEditUser").style.zIndex = "1";
	document.getElementById("contenedorEditUser").style.display = "block";

	document.querySelector("header").style.filter = "blur(2px)";
	document.querySelector("section").style.filter = "blur(2px)";
	document.querySelector("footer").style.filter = "blur(2px)";
}
function cancelAlertEditUser(){
	/* Quita header, section y footer del fondo blur */
	document.querySelector("header").style.filter = "none";
	document.querySelector("section").style.filter = "none";
	document.querySelector("footer").style.filter = "none";
	document.getElementById("contenedorConfirmacion").style.zIndex = "auto";
	document.getElementById("contenedorEditUser").style.zIndex = "auto";

	document.getElementById("contenedorConfirmacion").style.display = "none";
	document.getElementById("contenedorEditUser").style.display = "none";
}
/* FIN JAVASCRIPT ADMINISTRACION USUARIO */
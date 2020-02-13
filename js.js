// JAVASCRIPT REGISTRO
function strengthCapitalPassword() {// FUNCIONA BIEN
	var pass = document.getElementById('passwordSign-up').value;

	var letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
	var tieneLetra = false;
	for (var i = 0; i < pass.length; i++){
		if (letters.indexOf(pass.charAt(i),0)>=0){
			//alert('Your password contain capital letters');
			tieneLetra = true;
			break;
		}
	}if(tieneLetra == true){
    return true;
    }else{
    alert('Your password MUST contain at least one capital letter');
    return false;
    }
}
function strengthNumberPassword(){ //FUNCIONA BIEN
	var pass = document.getElementById('passwordSign-up').value;
	
	var numbers = "1234567890";
  	var tieneNumero = false;
  for(var i = 0; i < pass.length;i++){
    if (numbers.indexOf(pass.charAt(i),0)>=0){
			//alert('tu pass tiene un numero');
			tieneNumero = true;
			break;
		}
  }if(tieneNumero == true){
    return true;
    }else{
    alert('Your password MUST contain at least one number');
    return false;
    }
}
function strengthLengthPassword(){ //FUNCIONA BIEN
	var pass = document.getElementById('passwordSign-up').value;
	if (pass.length<8){
		alert('Your password MUST contain at least 8 characters');
		return false;
	}else{
		//alert('Your password contains 8 characters');
		return true;
	}
}
function checkUser(){ //FUNCIONA BIEN
	var user = document.getElementById('userSign-up').value;
	
	if (user.length<5 || user.length>15){
		alert('Your username MUST contain AT LEAST 5 characters and CANNOT have MORE than 15 caracters');
		return false;
	}else if(user.length>=5){
		return true;
	}
}
function checkPasswordSpaces(){
	var pass = document.getElementById('passwordSign-up').value;
	var tieneBlank = false;

	//MIRA SI EL CAMPO DE CONTRASEÑA TIENE ALGUN ESPACIO EN BLANCO
	for (var i = 0; i < pass.length; i++) {
		if (pass.charAt(i) == " "){
			//alert('Password does not contain any blank spaces');
			tieneBlank = true;
			break;
		}
	}if (tieneBlank==true) {
		alert('Password field cannot contain blank spaces');
		return false;
	}else{
		return true;
	}	
}
function checkPasswordBlank(){
	var pass = document.getElementById('passwordSign-up').value;
	var repeatPass = document.getElementById('repeatPasswordSign-up').value;
	var tieneBlank = false;
	//MIRA SI EL CAMPO DE CONTRASEÑA Y REPITE CONTRASEÑA ESTÁ VACIO
	if (pass.length == 0 || repeatPass.length == 0) {
  	alert("Password fields cannot be blank");
  	return false;
	}else{
		return true;
	}
}
function checkPassword(){
	var pass = document.getElementById('passwordSign-up').value;
	var repeatPass = document.getElementById('repeatPasswordSign-up').value;


	if (pass != repeatPass){		
		alert('Passwords are not the same');
		document.getElementById('passwordSign-up').value = "";
		document.getElementById('repeatPasswordSign-up').value = "";
		document.getElementById('passwordSign-up').focus();
		
	}else{
		checkPasswordSpaces();
		checkPasswordBlank();
		strengthNumberPassword();
		strengthCapitalPassword();
		strengthLengthPassword();

	}
}
// FIN JAVASCRIPT REGISTRO




function checkToSubmit(){
	console.log('checkUser(): '+ checkUser());
	console.log('checkPasswordBlank(): '+ checkPasswordBlank());
	console.log('checkPasswordSpaces(): '+ checkPasswordSpaces());
	console.log('strengthNumberPassword(): '+ strengthNumberPassword());
	console.log('strengthCapitalPassword(): '+ strengthCapitalPassword());
	console.log('strengthLengthPassword(): '+ strengthLengthPassword());

	if (checkUser() && checkPasswordBlank() && checkPasswordSpaces() && strengthNumberPassword() && strengthCapitalPassword() && strengthLengthPassword()){
		alert('Account created!');
	}else{
		alert('Incorrect data');
		document.getElementById('userSign-up').value = "";
		document.getElementById('passwordSign-up').value = "";
		document.getElementById('repeatPasswordSign-up').value = "";
		document.getElementById('mailSign-up').value = "";
		document.getElementById('nameSign-up').value = "";
		document.getElementById('surnameSign-up').value = "";
		document.getElementById('birthSign-up').value = null;
		document.getElementById('countrySign-up').value = null;
	}
}

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
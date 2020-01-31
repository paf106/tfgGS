// JAVASCRIPT LOGIN
function goToAdminPage(){
	//Datos correctos
	var usuarioCorrecto = 'pablo';
	var contrasenaCorrecta = '1234';

	var user = document.getElementById('userLog-in').value;
	var password = document.getElementById('passwordLog-in').value;
	
	//Comprobamos el usuario y la contraseña y si son correctos le mandamos a la admin page.
	//Si son incorrectos le decimos que no son correctas las credenciales
	if (user == usuarioCorrecto && password == contrasenaCorrecta){
		alert('User and Password correct');
		location.href='admin/user.html';
		// Comprobamos si los campos de usuario y contraseña están en blanco
	}else if(user == "" && password == ""){
		alert('Blank fields');
		//Comprobamos si el campo usuario está en blanco
	}else if (user == ""){
		alert('User field blank');
		//Comprobamos si el campo contraseña está en blanco
	}else if (password == ""){
		alert('Password field blank');
	}else{
		alert('User or password incorrect');
		document.getElementById('userLog-in').value = "";
		document.getElementById('passwordLog-in').value = "";
	}

	
}
// FIN JAVASCRIPT LOGIN




// JAVASCRIPT REGISTRO
function checkPassword(){
	var pass = document.getElementById('passwordSign-up').value;
	var repeatPass = document.getElementById('repeatPasswordSign-up').value;
	if (pass != repeatPass){		
		alert('Passwords are not the same');
		document.getElementById('passwordSign-up').value = "";
		document.getElementById('repeatPasswordSign-up').value = "";
		document.getElementById('passwordSign-up').style.borderColor = "red";
		document.getElementById('repeatPasswordSign-up').style.borderColor = "red";
		return false;
	}else{
		//document.getElementById('passwordSign-up').style.borderStyle = "solid";
		//document.getElementById('repeatPasswordSign-up').style.borderStyle = "solid";
		document.getElementById('passwordSign-up').style.borderColor = "lightgrey";
		document.getElementById('repeatPasswordSign-up').style.borderColor = "lightgrey";
		return true;
	}
}

function progressBarUser(){
	var userSign_up = document.getElementById('userSign-up').value;
	var barra = document.getElementById('bar').value;

	if (userSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
function progressBarPassword(){
	var passwordSign_up = document.getElementById('passwordSign-up').value;
	var barra = document.getElementById('bar').value;

	if (passwordSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
function progressBarRepeatPassword(){
	var repeatPasswordSign_up = document.getElementById('repeatPasswordSign-up').value;
	var barra = document.getElementById('bar').value;

	if (repeatPasswordSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
function progressBarMail(){
	var mailSign_up = document.getElementById('mailSign-up').value;
	var barra = document.getElementById('bar').value;

	if (mailSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
function progressBarName(){
	var nameSign_up = document.getElementById('nameSign-up').value;
	var barra = document.getElementById('bar').value;

	if (nameSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
function progressBarSurname(){
	var surnameSign_up = document.getElementById('surnameSign-up').value;
	var barra = document.getElementById('bar').value;

	if (surnameSign_up != ""){
		document.getElementById('bar').value = barra+1;
	}else{
		document.getElementById('bar').value = barra-1;
	}
}
// FIN JAVASCRIPT REGISTRO




function checkToSubmit(){
	if (checkPassword()){
		alert('Survey completed correctly :)');
	}
}
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
function strengthCapitalPassword() {
	var pass = document.getElementById('passwordSign-up').value;
	var tieneMayus = false;

	 var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
					"P","Q","R","S","T","U","V","W","X","Y","Z"];
	for (var i = 0; i < letters.length; i++){
		if (!pass.includes(letters[i])){
			//alert('Your password must have at least one capital letter');
			
			
		}else{
			alert('Your password has one capital letter');
			tieneMayus = true;
			break;
		}
	}
    if(tieneMayus == true){
    return true;
    }else{
    alert('Your password must have at least one capital letter');
    }
}
function strengthNumberPassword(){
	var pass = document.getElementById('passwordSign-up').value;
	var tieneNumero = false;

	var numbers = [1,2,3,4,5,6,7,8,9,0];
	for (var i = 0; i < numbers.length; i++){
		if (!pass.includes(numbers[i])){
			//alert('Your password must have at least one number');
			
			
		}else{
			alert('Your password has one number');
			tieneNumero = true;
			break;
		}
	}
    if(tieneNumero == true){
    return true;
    }else{
    alert('Your password must have at least one number');
    }
}
function strengthLengthPassword(){
	var pass = document.getElementById('passwordSign-up').value;
	if (pass.length<8){
		alert('Your password must contain at least 8 characters');
	}else{
		alert('Your password contains 8 characters');
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
		return false;
	}else{
		strengthNumberPassword();
		strengthCapitalPassword();
		strengthLengthPassword();

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
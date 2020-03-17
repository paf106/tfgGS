function mostrarDiv(div){
	document.getElementById(div).style.display = "block";
}
function cerrarDiv(div){
	document.getElementById(div).style.display = "none";
}
function greenHighlight(input){
	//Pone los bordes y el fondo de color verde
		document.getElementById(input).style.border = "2px solid green";
		document.getElementById(input).style.backgroundColor = "#c7ffce";

		document.getElementById(input).style.border = "2px solid green";
		document.getElementById(input).style.backgroundColor = "#c7ffce";
}
function redHighlight(input){
	//Pone los bordes y el fondo de color rojo
		document.getElementById(input).style.border = "2px solid #ea0707";
		document.getElementById(input).style.backgroundColor = "#ffc7c7";

		document.getElementById(input).style.border = "2px solid #ea0707";
		document.getElementById(input).style.backgroundColor = "#ffc7c7";
}
function resaltarEmailField(emailPasado) { 
  var email = document.getElementById(emailPasado).value;
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
  
  if (regex) {
  	//Pone los bordes y el fondo de color verde
  		greenHighlight('mailSign-up');
		return true;
  }else{
  	//Pone los bordes y el fondo de color rojo
  		redHighlight('mailSign-up');
		return false;
  }
}
function checkUser(usuario){ //FUNCIONA BIEN
	var user = document.getElementById(usuario).value;
	
	if (user.length<5 || user.length>15){
		//alert('Your username MUST contain AT LEAST 5 characters and CANNOT have MORE than 15 caracters');
		redHighlight('userSign-up');
		mostrarDiv('checkUserText');
		return false;
	}else if(user.length>=5){
		greenHighlight('userSign-up');
		cerrarDiv('checkUserText');
		return true;
	}else if(user.value == ""){
		redHighlight('userSign-up');
		mostrarDiv('checkUserText');
		return false;
	}
}
function checkPassword(pass, repeatPass){
	//Variables we are gonna use
	var password = document.getElementById(pass).value;
	var repeatPassword = document.getElementById(repeatPass).value;

	//Variables related to password verification
	var samePassword = false;
	var emptyPassword = false;
	var blankSpaces = false;
	var correctLength = false;
	var containCapitalLetter = false;
	var containNumbers = false;

	
	//###First we are gonna compare if the passwords are the same
	if (password != repeatPassword){		
		samePassword = false;
		alert('Passwords are not the same');
		document.getElementById(pass).value = "";
		document.getElementById(repeatPass).value = "";
	}else{
		samePassword = true;
	}

	//###Secondly we are gonna check if the pasword fields are empty
	if (password.length == 0 || repeatPassword.length == 0) {
		emptyPassword = true;
	}else{
		emptyPassword = false;
	}

	//###Thirdly we are gonna check if the password fields have blank spaces
	var tieneBlankPass = false;
	var tieneBlankRepeatPass = false;

	for (var i = 0; i < password.length; i++) {
		if (password.charAt(i) == " "){
			tieneBlankPass = true;
			break;
		}
	}
	for (var i = 0; i < repeatPassword.length; i++) {
		if (repeatPassword.charAt(i) == " "){
			tieneBlankRepeatPass = true;
			break;
		}
	}if (tieneBlankPass || tieneBlankRepeatPass) {
		blankSpaces = true;
	}else{
		blankSpaces = false;
	}

	if (password.length<8 || repeatPassword.length<8){
		correctLength = false;
	}else{
		correctLength = true;
	}

	//### We are gonna check if the password fields have capital letter 
	var letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
	var tieneLetraPass = false;
	var tieneLetraRepeatPass = false;
	
	for (var i = 0; i < password.length; i++){
		if (letters.indexOf(password.charAt(i),0)>=0){
			//alert('Your password contain capital letters');
			tieneLetraPass = true;
			break;
		}else{
			tieneLetraPass = false;
		}
	}
	for (var i = 0; i < repeatPassword.length; i++){
		if (letters.indexOf(repeatPassword.charAt(i),0)>=0){
			//alert('Your password contain capital letters');
			tieneLetraRepeatPass = true;
			break;
		}else{
			tieneLetraRepeatPass = false;
		}
	}
	if(tieneLetraPass && tieneLetraRepeatPass){
    containCapitalLetter = true;
    }else{
    //alert('Your password MUST contain at least one capital letter');
    containCapitalLetter = false;
    }

    //### We are gonna check if the password fields have a number
    var numbers = "1234567890";
  	var tieneNumeroPass = false;
  	var tieneNumeroRepeatPass = false;
  		for(var i = 0; i < password.length;i++){
    		if (numbers.indexOf(password.charAt(i),0)>=0){
				//alert('tu pass tiene un numero');
				tieneNumeroPass = true;
				break;
			}else{
				tieneNumeroPass = false;
			}
  		}
  		for(var i = 0; i < repeatPassword.length;i++){
    		if (numbers.indexOf(repeatPassword.charAt(i),0)>=0){
				//alert('tu pass tiene un numero');
				tieneNumeroRepeatPass = true;
				break;
			}else{
				tieneNumeroRepeatPass = false;
			}
  		}

  if(tieneNumeroPass && tieneNumeroRepeatPass){
  	containNumbers = true;
    }else{
    	containNumbers = false;
    }

	//### Highlight parts

	//We highlight the blankSpacesText
	if (blankSpaces) {
		mostrarDiv('blankSpacesText');
	}else{
		cerrarDiv('blankSpacesText');
	}

	//We highlight the emptyFieldText
	if (emptyPassword) {
		mostrarDiv('emptyFieldText');
	}else{
		cerrarDiv('emptyFieldText');
	}

	//We highlight the passLengthText
	if (!correctLength) {
		mostrarDiv('passLengthText');
	}else{
		cerrarDiv('passLengthText');
	}

	//We highlight the passCapitalLetterText
	if (!containCapitalLetter) {
		mostrarDiv('passCapitalLetterText');
	}else{
		cerrarDiv('passCapitalLetterText');
	}

	//We highlight the passNumberText
	if (!containNumbers) {
		mostrarDiv('passNumberText');
	}else{
		cerrarDiv('passNumberText');
	}

	if (samePassword && containNumbers && containCapitalLetter && correctLength && !blankSpaces && !emptyPassword) {
		greenHighlight('passwordSign-up');
		greenHighlight('repeatPasswordSign-up');
		return true;
	}else{
		redHighlight('passwordSign-up');
		redHighlight('repeatPasswordSign-up');
		return false;
	}
}
function checkToSubmit(){
	if (checkPassword('passwordSign-up', 'repeatPasswordSign-up') && checkUser('userSign-up') && resaltarEmailField('mailSign-up')){
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

		//Pone los bordes y el fondo de color rojo del apartado de la contraseña
		redHighlight('passwordSign-up');
		redHighlight('repeatPasswordSign-up');

		//Pone en rojo el apartado del usuario
		redHighlight('userSign-up');

		//Pone los bordes y el fondo de color rojo del email
		redHighlight('mailSign-up');
	}
}
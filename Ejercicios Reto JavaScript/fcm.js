function fcm(){

	var edad = prompt("Dime tu edad"); 
	var sexo = prompt("Dime tu sexo"); 
	sexo.toLowerCase();

	var resultado = 0;   

	if( sexo == "hombre"){
		resultado = 220 - edad;
		document.write("Tu frecuencia máxima cardiaca es de: ");
		document.write("<b>" + resultado + "</b>");
	}else if( sexo == "mujer"){
		resultado = 225 - edad;
		document.write("Tu frecuencia máxima cardiaca es de: ");
		document.write("<b>" + resultado + "</b>"); 
	}



}
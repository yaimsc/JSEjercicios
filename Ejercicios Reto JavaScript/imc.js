function imc(){
	var altura = prompt("Dime tu altura en cm. Ejemplo: 170"); 
	var peso = prompt("Dime tu peso en actual en kg"); 

	//calculo IMC

	altura=altura.toString().replace(',','.');

	var alturaMetro = altura/100; 

	var alturaCuadrado = alturaMetro*alturaMetro; 

	var imc = peso/alturaCuadrado; 

	document.writeln(Math.round(imc*100/100));

	if(imc < 16){
		document.writeln("<b>Infrapeso</b>")
	}else if(imc < 17){
		document.writeln("<b>Infrapeso: delgadez moderada</b>")
	}else if(imc < 18.5){
		document.writeln("<b>Infrapeso: delgadez aceptabel</b>")
	}else if( imc < 25){
		document.writeln("<b>Peso normal</b>")
	}else if(imc < 30){
		document.writeln("<b>Sobrepeso</b>")
	}else if(imc < 35){
		document.writeln("<b>Obeso: Tipo 1</b>")
	}else if( imc < 40){
		document.writeln("<b>Obeso: Tipo 2</b>")
	}else if(imc > 40){
		document.writeln("<b>Obeso: Tipo 3</b>")
	}

}
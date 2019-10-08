var n = 0;
var ops = 0;
var opG = "";

function disableOp(){
	document.getElementById('boton-suma-basica').style = 'pointer-events: none';
	document.getElementById('boton-resta-basica').style = 'pointer-events: none';
	document.getElementById('boton-div-basica').style = 'pointer-events: none';
	document.getElementById('boton-mult-basica').style = 'pointer-events: none';

}
function enableOp(){
	document.getElementById('boton-suma-basica').style = 'pointer-events: auto';
	document.getElementById('boton-resta-basica').style = 'pointer-events: auto';
	document.getElementById('boton-div-basica').style = 'pointer-events: auto';
	document.getElementById('boton-mult-basica').style = 'pointer-events: auto';
	document.getElementById('boton-log-basica').style = 'pointer-events: auto';
	document.getElementById('boton-raiz-basica').style = 'pointer-events: auto';
}

function type_number(numero){
	if(n < 2){
		document.getElementById('operacion').value += numero;
		enableOp();
		document.getElementById('boton-log-basica').style = 'pointer-events: none';
		document.getElementById('boton-raiz-basica').style = 'pointer-events: none';
	}
	
}
function type_op(op){
	
	if(n < 1){
		document.getElementById('operacion').value += op;
		disableOp();
		n++;
		opG = op;
	}			
}


function igual(){

	let cadena = document.getElementById('operacion').value;

	switch (opG) {
		case '+':
			let numeros = cadena.split("+");
			suma(numeros[0], numeros[1]);
			break;
		case '-':
			let numeros = cadena.split("-");
			resta(numeros[0], numeros[1]);
			break;
		case '*':
			let numeros = cadena.split("*");
			mult(numeros[0], numeros[1]);
			break;
		case '/':
			let numeros = cadena.split("/");
			div(numeros[0], numeros[1]);
			break;
		case '√':
			let numeros = cadena.split("√");
			raiz(numeros[1]);
			break;
		case 'log(':
			let numeros = cadena.split("(");
			logB(numeros[1]);
			break;
		default:
			// statements_def
			break;
	}
	
}

function limpiar(){

	n = 0;
	op = 0;
	enableOp();
	document.getElementById('operacion').value = "";

}

function suma(n1, n2){

	let op = 'suma';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://suma/">' +
	    '<n1>' + n1 + '</n1>' +
	    '<n2>' + n2 + '</n2>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function mult(n1, n2){

	let op = 'mult';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://mult/">' +
	    '<n1>' + n1 + '</n1>' +
	    '<n2>' + n2 + '</n2>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}

function div(n1, n2){

	let op = 'div';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://div/">' +
	    '<n1>' + n1 + '</n1>' +
	    '<n2>' + n2 + '</n2>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}

function resta(n1, n2){

	let op = 'resta';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://resta/">' +
	    '<n1>' + n1 + '</n1>' +
	    '<n2>' + n2 + '</n2>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}

function logB(n1){

	let op = 'log';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://log/">' +
	    '<n1>' + n1 + '</n1>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}

function raiz(n1){
	
	let op = 'raiz';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://raiz/">' +
	    '<n1>' + n1 + '</n1>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-B');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
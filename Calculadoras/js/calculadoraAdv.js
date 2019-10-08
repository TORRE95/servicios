var coma = false;
var op = false;
var n = 0;

function type_numberAdv(numero){

	document.getElementById('operacion').value += numero;
	coma = true;
	op = true;
	n++;
}
function type_coma(){

	if (coma) {
		document.getElementById('operacion').value += numero;
		coma = false;
	}
}
function maxAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'max';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://max/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function minAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'min';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://min/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function mediaAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'media';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://media/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function medianaAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'mediana';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://mediana/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function modaAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'moda';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://moda/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function rangoAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'rango';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://rango/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function desAdv(){

	let cadena = document.getElementById('operacion').value;
	let op = 'desv';

	let parser = new DOMParser();
	let peticion = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
	    '<SOAP-ENV:Header/>' +
	    '<S:Body>' +
	    '<ns2:' + op + ' xmlns:ns2="http://desv/">' +
	    '<cadena>' + cadena + '</cadena>' +
	    '</ns2:' + op + '>' +
	    '</S:Body>' +
	    '</S:Envelope>';

	let xmlPeticion = parser.parseFromString(peticion, "text/xml");

	let mensaje = new XMLHttpRequest();

	mensaje.open('POST', 'http://localhost:8080/Calculadoras/Calculadora-Adv');
	mensaje.setRequestHeader('Content-Type', 'text/xml');
	mensaje.send(xmlPeticion);
	mensaje.onreadystatechange = function () {
	    if (mensaje.status == 200 && mensaje.readyState == 4) {
	        respuesta = mensaje.responseXML;
	        console.log(respuesta);
	    }
	}
}
function limpiarAdv(){

	coma = false;
	op = false;
	n = 0;
	document.getElementById('operacion').value = "";

}
//nON BLOCKING mODEL
// ---------

//Cargando la libreria
var fs = require('fs');

//Manejador
fs.readFile("\documento.txt", 'utf-8', function(err, data){
	if(err){
		console.log("Error al leer archivo...");
		return;
	}
	console.log(data);

};

//Otra operación
console.log('\nTermino el programa.......');
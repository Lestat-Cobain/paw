console.log([2] + [3] + process.argv);
var num1 = process.argv[2], separador = ",", arreglo = num1.split(separador, 2);
var num2 = process.argv[3], separador1 = ",", arreglo1 = num2.split(separador1, 2);
arreglo = parseInt(arreglo);
arreglo1 = parseInt(arreglo1);
console.log(arreglo + arreglo1);
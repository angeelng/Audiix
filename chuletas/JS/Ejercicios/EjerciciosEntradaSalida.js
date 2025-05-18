//EJERCICIO1
/*
var nombre = prompt(`Introduce tu nombre: `, ``);
alert(`Bienvenido ` + nombre);
*/
//EJERCICIO2
/*
var num1 = parseInt (prompt(`Introduce un número: `));
var num2 = prompt(`Introduce otro número`, ``);
num2 = parseInt(num2);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1%num2);
console.log(num1 / num2);
*/
//EJERCICIO3

var alojamiento = parseInt (prompt(`Gastos de alojamiento: `, ``));
var alimentacion = parseInt (prompt(`Gastos de alimentacion`, ``));
var entretenimiento = parseInt (prompt(`Gastos de entretenimiento`, ``));
alert("Coste total del viaje: " + (alojamiento + alimentacion + entretenimiento));

//EJERCICIO4

var precioOriginal = parseInt (prompt(`Introduce el precio de tu producto: `));
var descuento = parseInt (prompt(`Introduce el descuento para tu producto: `));
var precioFinal = (precioOriginal * descuento) / 100;
var resultado = precioOriginal - precioFinal;
alert(`El precio final del producto después de aplicarle un descuento del ${descuento}% es ${resultado.toFixed(2)} euros`)

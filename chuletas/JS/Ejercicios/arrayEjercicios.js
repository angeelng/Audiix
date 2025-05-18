//Ejercicio 1
/*
function suma (){
var miArray = new Array (5);
var usuario;
var resultado = 0;
for (let i = 0; i < 5; i++){
    usuario = parseInt(prompt("Introduce números: "));
    miArray [i] = usuario;
    
}

for (let j = 0; j <5; j++){
    resultado += miArray[j];
}
console.log("El resultado es: " + resultado);
}


//Ejercicio 2
function encontrarMayor (){
    var miArray2 = new Array (88, 90, 56, 12, 100);
    var mayor = miArray2 [0];
    for (let i = 0; i < 5; i++){
        if (mayor < miArray2[i]){
            mayor = miArray2[i];
        }
    }
    console.log(mayor)
}

//Ejercicio 3
function contarElementos (){
    var miArray3 = [88, 90, 56, 12, 100, 100, 12, 12];
    var contador = 0;
    let num = 100;
    for (let i = 0; i < 8; i++) {
        
        if(miArray3[i]==num){

            contador++;
        }
        
    }
    return `El número ${num} aparece ${contador} veces`
}

console.log(contarElementos());

//Ejercicio 4
var arrayPares = [2, 2, 2, 2];
function todosPares (array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            return false;
        }
    }
    return true;
}

if (todosPares(arrayPares)){
    console.log("El array está lleno de pares")
}else if (!todosPares(arrayPares)){
    console.log("El array no está lleno de pares")
}

//Ejercicio 5
var usuario;
var miArray4 = [];
var i = 0;
do{
    usuario = parseInt(prompt("Introduce un numero"));
    miArray4 [i] = usuario;
    i++;
}while(usuario != 0 && !(isNaN(usuario)));

var j = 0;
var numPares = 0;
var numImpares = 0;
while (j < miArray4.length){
    if (miArray4[j]%2 == 0 && miArray4[j] != 0){
        numPares++;
    }else{
        numImpares++;
    }
    j++;
}

alert(`Número de impares: ${numImpares}
            Número de pares: ${numPares}`)
            */

//Ejercicio 6
/*
var cont = 0;
var suma = 0;

do {
    var num = parseInt(prompt("Introduzca un número entero positivo por favor."));
  } while (num < 0 || isNaN(num));
  
  while (cont <= num) {
  
    if (num % cont == 0) {
  
      console.log(`${cont} es divisor de num.`);
      suma += cont * cont;
  
    }
  
    cont++;
  
  }
  
  console.log(`La suma de los cuadrados de los divisores obtenidos es: ${suma}`);
  
  if (Number.isInteger(Math.sqrt(suma))) {
      console.log("Es cuadrado.");
  } else {
      console.log("No es cuadrado.");
  }
*/
  //Ejercicio 7 
  var esPrimo = false;

do {
  var num1 = parseInt(prompt("Ingrese un número."));
  var num2 = parseInt(prompt("Ingrese otro número."));
} while (isNaN(num1) || isNaN(num2));

for (var i = num1; i <= num2; i++) {

  esPrimo = true;
  for (var j = 2; j < i; j++) {


    if (i % j == 0) {

      esPrimo = false;

    }

  }

  if (esPrimo) {

    console.log(`Es primo ${i}`);

  }

}
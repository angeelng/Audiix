//EJERCICIO 5
/*
var usuario;
var resultado;
var temperatura;
do{

    usuario = parseInt (prompt("Elige que conversion quieres realizar"));
    
}while(usuario !== 1 && usuario !== 2 && isNaN(usuario));

    switch (usuario){
        case 1:
         temperatura = parseInt(prompt("Inserta la temperatura en grados Celsius: ", " "))
            resultado = ((temperatura * 9) / 5) + 32;
            alert(temperatura + " grados Celsius equivalen a " + resultado.toFixed(2) + " grados Fahrenheit")
            break;
        case 2:
            temperatura = parseInt(prompt("Inserta la temperatura en grados Fahrenheit: ", " "))
            resultado = ((temperatura * 9) / 5) - 32;
            alert(temperatura + " grados Celsius equivalen a " + resultado.toFixed(2) + " grados Fahrenheit")
            break;
    }

*/
//EJERCICIO 6
/*
var usuario;
var sumaCuadrados = 0;
do{
    usuario = parseInt (prompt("Introduzca un número entero positivo"));
}while (usuario > 0 && isNaN(usuario));
var i = 0;
console.log("Los divisores de " + usuario + " son: ")
while (i <= usuario){
    if (usuario%i == 0){
        console.log(i)
        sumaCuadrados += i**2
    }
    i++
}

console.log(sumaCuadrados)
if (Number.isInteger(Math.sqrt(sumaCuadrados))){
    console.log("El numero es cuadrado")
}else{
    console.log("El número no es cuadrado")
}
*/

//EJERCICIO 7
var num1;
var num2;
var chivato=true;

function esPrimo(num){
    control=true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            control=false;
        }
    }
    return control;
}

do{
    num1 = parseInt(prompt("Introduzca un número: "))
    num2 = parseInt(prompt("Introduzca otro: "))
}while ( num1 > 0 && num2 > 0 && isNaN(num1, num2) )
while(num1 <= num2){
    var i=2;
    chivato=true;
    if(esPrimo(num1)){
        console.log(num1);
    }
    num1++;
}




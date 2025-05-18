/*
function saludar (mensaje){
    alert(mensaje)
}

function operar (){
    let num1 = parseFloat(prompt("Introduce un número"))
    let num2  = parseFloat(prompt("Introduce otro número"))

    let suma = sumar (num1, num2)
    let resta = restar (num1, num2)
    let producto = mult (num1, num2)
    alert(`La suma es ${suma}, la resta es ${resta}, la multiplicación es ${producto}`)
}

function sumar (x, y){
    return (x + y)
}

function restar (x, y){
    return (x - y)
}

function mult (x, y){
    return (x * y)
}

var mensaje = "Mensaje global"
function mostrarMensaje(){
    alert (mensaje);
}
*/
var resultado;
var temperatura;
function celsiusFahrenheit (){
    do{
        temperatura = parseFloat(prompt("Inserta la temperatura en grados Celsius: ", " "))
    }while(isNaN(temperatura));
    resultado = ((temperatura * 9) / 5) + 32;
    alert(temperatura + " grados Celsius equivalen a " + resultado.toFixed(2) + " grados Fahrenheit");
}

function fahrenheitCelsius (){
    do{
        temperatura = parseFloat(prompt("Inserta la temperatura en grados Fahrenheit: ", " "))
    }while(isNaN(temperatura))
    resultado = ((temperatura * 9) / 5) - 32;
    alert(temperatura + " grados Fahrenheit equivalen a " + resultado.toFixed(2) + " grados Celsius")   
}


function factorial (){
    do{
    var num = parseInt(prompt(`Introduce un número entero positivo: `))
    }while(num < 0 || isNaN(num))
    var fact = 1;
    while ( num > 1 ){
        fact *=num;
        num--;
    }
    console.log(fact)
}
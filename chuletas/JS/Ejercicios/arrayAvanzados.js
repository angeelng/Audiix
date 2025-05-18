//Ejercicio 8
var array = [1,2,3,4,5,6];
function parcial (miArray){
    let i = 0;
    let suma = 0;
    arrayResult =  [];
    while (i < miArray.length){
        suma += miArray[i];
        arrayResult.push(suma);
        i++;
    }
    return console.log(arrayResult);
}
parcial(array);

//Ejercicio 9
/*
var y;  
var x

do{

    x = parseFloat(prompt("Introduce otro numero"))
    y = parseFloat(prompt("Introduce un numero")) 

}while((isNaN(y)) && isNaN(x));

function countBy (x, y){
    let array = [];
    let i = 1;
    let mult = 1;
    if (x < 0 && y < 0){
        console.log(array);
    }else{
        
        while(i <= y){
            mult = x * i;
            array.push(mult)
            i++;
        }
        console.log(array);
    }
}
    countBy (x,y);
*/
//EJERCICIO 10

var lista = ["rojo", "verde", "azul"];
function listar (array){
    let cadena = array.join('-');
    return console.log(cadena);
}
listar(lista)

//EJERCICIO 11
function frase (){
    let cadena;
    let cadena2;
    let array = [];
    cadena = prompt("Introduce una frase")
    array = cadena.split(' ');
    array.reverse();
    array.unshift('aitor');
    cadena2 =array.join(',');
    console.log(cadena2);
}

// EJERCICIO 12
function arrayRepetido() {
    let miArray = [3, 2, 1, 4, 5]; //[3, 2, 1, 4, 5, 1, 2, 3, 3, 6]
    let miArray2 = [1, 2, 3, 3, 6];

    let arrayConcatenado = miArray.concat (miArray2);
    let arrayFinal = [];

    let comprobar = false;
    let i=0;
    let j=1;

    for (i=0;i<arrayConcatenado.length;i++) {
        j=0;
        comprobar = false;
        
        for(j=0;j<arrayConcatenado.length;j++) {
            if (i==j) {
                j++;
            }
            if (arrayConcatenado[i] == arrayConcatenado[j]) {
                comprobar = true;
                j=arrayConcatenado.length;
            } 
            
        }
        if (!comprobar) {
            arrayFinal.push(arrayConcatenado[i]);
        }
    }
    console.log(arrayFinal);
}
//EJERCICIO 12 (DE OTRA FORMA)
var array_doce= ["Pez", "Rob", "Azul"];
var array_doce1=[ "Rob", "Azul"];
var cont=0;
var numA;

var array_comun = [...array_doce,...array_doce1];
var arrayFinal=[];

for(let i=0; i<= array_comun.length-1; i++){

    cont=0;

    for(let j=0; j<=array_doce.length-1; j++){
        if(array_comun[i]==array_doce[j]){
            numA=array_comun[i];
            cont++;
        }
    }
    for(let z=0; z<= array_doce1.length; z++){
    if(array_comun[i]== array_doce1[z]){
        numA=array_comun[i];
        cont++;

        }

    }

    if(cont==1){
        arrayFinal.push(numA);
    }

}
console.log(arrayFinal);


// EJERCICIO 13
/*
let puntaciones = [56, 74, 23, 89, 95, 12, 67, 88, 45, 33, 76];
let puntacionesCopia = [...puntaciones];
puntacionesCopia.sort(function(a, b) {return a - b;})



console.log(puntacionesCopia);
console.log(puntaciones);
let i = 0;
let j = 0;


while (j<3) {
    if (puntaciones[i]==puntacionesCopia[j]) {
        puntaciones.splice((i), 1);

        j++;
        i=0;
    }
    i++;
}

console.log(puntaciones);

for (z = 2; z <= 6; z+=2){
    usuario = parseFloat(prompt("Introduce una puntuación"));
    puntaciones.splice(z, 0, usuario);
}
console.log(puntaciones);

let posicionBorrada = parseInt(prompt("Introduce la posicion que deseas borrar: "));
let cantidad = parseInt(prompt("Introduce la cantidad que deseas borrar: "));

puntaciones.splice(posicionBorrada, cantidad);
console.log(puntaciones);
*/


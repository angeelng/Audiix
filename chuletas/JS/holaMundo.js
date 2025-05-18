function alertaBoton (){
    alert ("Hola");
}

function alertaFoto (){
    alert ("adios");
}
var frase = `43`;
var num = 33;
console.log (frase - num);
console.log(num);
let x;
if(frase == num){

    let x = 24;
}

console.groupCollapsed("Bloque 1")
console.log(`Mensaje`);
console.warn(`Aviso`);
console.groupEnd();
console.info(`Información`);
//console.error(`Error`);
function limpiaConsola(){
    let respuesta = confirm(`Quieres borrar`);
    if(respuesta == true){
        
        console.clear();
    }else{
        console.log(`Okey`);
    }
}
//alert("Hola");
//prompt("Mensaje", "Valor por defecto");

/*var edad = prompt("Introduce tu edad", "");
edad = parseInt(edad);
futuro = edad + 10;
console.log("Tu edad en diez años va a ser: " + futuro);
*/

function documentWrite (){
    document.write("Hola buenas");
}
//POTENCIAS
console.log(4**4);

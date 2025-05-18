//Definir un array
let miArray = new Array (3);

//Inicialización
miArray[0] = 32;
miArray[1] = 2352;
miArray[2] = 23;
console.log(miArray);

//Acceder a posiciones
console.log(miArray[0])
console.log(miArray[1])
console.log(miArray[2])

//Longitud
console.log("La longitud del array es: " + miArray.length)

//Declaración 
var diaSemana = new Array (`Lunes`, `Martes`, `Miércoles`)
console.log(diaSemana)

//Mezcla de tipos
var mezcla = new Array (`Hola`, false, 123)
console.log(typeof(mezcla[0]), typeof(mezcla[2]) )

//Recorrer el array
for(let i = 0; i<=diaSemana.length-1; i++){
    console.log(diaSemana[i])
}

//Dinamismo de array
var nuevoArray = new Array (2);
nuevoArray [0] = "Colombia"; 
nuevoArray [1] = "España"; 
nuevoArray [5] = "Brasil"; 

for(let i = 0; i<=nuevoArray.length-1; i++){
    console.log(`Posición ${i} del array: ${nuevoArray[i]}`)
}
//Recorrer array con while 
var i =0;
while (i < diaSemana.length){
    console.log(diaSemana[i])
    i++;
}

//Busqueda de elementos con while
 var cadenaBuscasa = "Miércoles";
 
 while ((i < diaSemana.length) && (diaSemana[i]!==cadenaBuscasa)){
    i++;
}

if (marcador == diaSemana.length){
    console.log("No encontrado")
}else{
    console.log("Encontrado")
}

//concat ()
var vocales = ['a', 'b']
var numeros = [1, 2]
var vocales = concat(numeros)
console.log(vocales)
//push elimina y devuelve el último elemento del array
//pop añade el elemento al final el array
shift(vocales);

//shift elimina y devuelve el primer elemento del array
//unshift añade el elemento al principio del array
//splice

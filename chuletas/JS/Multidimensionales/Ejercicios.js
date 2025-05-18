function ej15() {
  let array = [];
  let z = 1;
  var usuario;
  let suma = 0;
  do {
    usuario = parseInt(prompt("Introduce un número positivo entre 2 y 5"));
  } while (isNaN(usuario) && usuario < 2 && usuario > 5);
  for (let i = 0; i < usuario; i++) {
    array[i] = [];
    for (let j = 0; j < usuario; j++) {
      var resultado = z * usuario;
      suma += resultado;
      if (resultado < 10) {
        array[i][j] = "0" + resultado;
      } else {
        array[i][j] = z * usuario;
      }
      z++;
    }
  }
  console.log(array);
  console.log("El resultado es " + suma);
}

//Ejercicio17


do{
  var numero = parseInt(prompt("Dime un nÃºmero entero positivo mayor que 1 y menor que 6"));
}while(numero<=1 || numero>=6 || isNaN(numero));


let matrizz = [];
for(let i=0; i<numero; i++){
  matrizz [i] = [];
  for( j=0; j<numero; j++){
      matrizz[i][j] = 1 + parseInt((Math.random() * 20));
     
  }
 
}
console.log(matrizz);


let matrizNueva = [];
for(let i=0; i<2; i++){
  matrizNueva[i]=[];
  for(let j=0; j<matrizz[i].length; j++){
     
      matrizNueva[i][j] = matrizz[i][j];
     
     
  }
}
console.log(matrizNueva);



function ej18(){
  let usuario;
  do{
    usuario = prompt("Introduce una cadena: ");
  }while(!isNaN(usuario));

  for(let i = 0; i < usuario.length; i++){
    	if (usuario[i] == "T"){
        usuario[i] = "U";
        console.log("hola");
      }
  }
  console.log (usuario);

}

function ej19(){
  let nombres = ["Luis", "Estela", "Ángel", "Enya","Jose Antonio"];

  for (let i = 0; i < nombres.length; i++){
      for (let j = 0; ){

      } 
  }

}
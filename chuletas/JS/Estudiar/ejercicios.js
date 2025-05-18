function ej1() {
  let pesetas = 166;
  let dolares = 1.09;
  let cambio;
  do {
    var usuario = parseFloat(
      prompt(
        "Introduce una opción: 1 para cambio a pesetas, 2 para cambio a dólares"
      )
    );
    var cantidad = parseFloat(prompt("Introduce una cantidad a convetir"));
  } while ((usuario != 1 && usuario != 2) || cantidad < 0);

  if (usuario == 1) {
    cambio = cantidad * pesetas;
    console.log(`El cambio de euros a ${pesetas} es ${cambio}`);
  } else {
    cambio = cantidad * dolares;
    console.log(`El cambio de euros a ${dolares} es ${cambio}`);
  }
}

function ej2() {
  let contador = 0;
  let suma = 0;
  let media;
  let dobleMedia;
  let numeros = " ";
  let usuario;
  let enteros;
  let mayoresMedia = " ";
  let mayoresDobleMedia = " ";
  do {
    usuario = prompt("Introduce números: ");
    if (usuario != ".") {
      enteros = parseFloat(usuario);
      suma += enteros;
      numeros += enteros + ",";
      contador++;
    }
  } while (contador < 10 && usuario != ".");
  media = suma / contador;
  dobleMedia = media * 2;

  let cadenaNumeros = numeros.split(",");
  console.log(cadenaNumeros);
  for (let i = 0; i < cadenaNumeros.length; i++) {
    if (cadenaNumeros[i] > media) {
      mayoresMedia += cadenaNumeros[i] + ",";
    } 
    if (cadenaNumeros[i] > dobleMedia) {
      mayoresDobleMedia += cadenaNumeros[i] + ",";
    }
  }

  console.log(`Los mayores de la media son ${mayoresMedia} `);
  console.log(`Los mayores del doble de la media son ${mayoresDobleMedia} `);
}

function ej3 (){
    let array = [];
    let suma = 0;
    let media;
    let cadena = " ";
    do{
        var usuario = parseInt(prompt("Introduce un numero"))
    }while(usuario < 5 && usuario > 10);

    for(let i = 0; i < usuario; i++){
        array[i] = parseInt(Math.floor(Math.random() * 100));
        suma += array[i];
        cadena += array[i] + " ";
    }
    media = suma/usuario;
    console.log(cadena);
    console.log("La media es: " + media)
    for (let j = 0; j < array.length; j++){
        if(media < array[j]){
            console.log(array[j]);
        }
    }

}

function ej4() {
  let usuario;
  let cont = 0;

  do {
    usuario = parseInt(prompt("Introduce un nÃºmero entero en 2 y 5."));
  } while (usuario < 2 || usuario > 5 || isNaN(usuario));

  let miArray = new Array();
  let medias = [];
  let suma = 0;

  for (let i = 0; i < usuario; i++) {
    miArray[i] = [];

    for (let j = 0; j < usuario; j++) {
      miArray[i][j] = Math.floor(Math.random() * 100);
      cont++;
      suma += miArray[i][j];
    }
  }

  for (let i = 0; i < usuario; i++) {
    let frase = " ";
    for (let j = 0; j < usuario; j++) {
      if (miArray[i][j] < 10) {
        frase += "0" + miArray[i][j] + " ";
      } else {
        frase += miArray[i][j] + " ";
      }
    }

    console.log(frase);
  }

  console.log("La media es: " + suma / cont);

  var frase = " ";

  for (let i = 0; i < usuario; i++) {
    for (let j = 0; j < usuario; j++) {
      if (suma / cont < miArray[i][j]) {
        if (j == usuario) {
          frase += miArray[i][j] + " ";
        } else {
          frase += miArray[i][j] + ", ";
        }
      }
    }
  }

  console.log(frase);
  console.log("Las medias ahora.");
  console.log(suma / cont);

  let resultado = [];
  let fraseRe = " ";
  for (let i = 0; i < 2; i++) {
    resultado[i] = [];
    for (let j = 0; j < miArray[i].length; j++) {
      if (miArray[i][j] > suma / cont) {
        resultado[i][j] = miArray[i][j];
        if (resultado[i][j] < 10) {
          fraseRe += "0" + resultado[i][j] + " ";
        } else {
          fraseRe += resultado[i][j] + " ";
        }
      } else if (miArray[i][j] < suma / cont) {
        resultado[i][j] = miArray[i][j];

        if (resultado[i][j] < 10) {
          fraseRe += "0" + resultado[i][j] + " ";
        } else {
          fraseRe += resultado[i][j] + " ";
        }
      }
    }
    console.log();
  }
  console.log(fraseRe);
}


function ejercicio1() {
  let resultado;
  let metros;
  //El usuario introduce una cantidad de metros y se comprueba si el número es válido
  do {
    metros = parseFloat(prompt("Introduce una cantidad de metros: "));
  } while (metros <= 0 || isNaN(metros));
  //Se realiza la conversión y se muestra por pantalla
  resultado = metros / 1000;

  alert(`${metros} metros equivalen a ${resultado} kilómetros`);
}

function ejercicio2() {
  let num;
  let i = 0;
  let contador1 = 0;
  let contador2 = 0;
  let contador3 = 0;
  let contador4 = 0;
  //El usuario introduce 10 números, en el caso de que no sea entero se le pedirá ese número nuevamente.
  //Dependiendo de en que rango se encuentren los números los contadores se irán incrementando.
  do {
    num = parseFloat(prompt("Introduce 10 números: "));
    if (isNaN(num) || !Number.isInteger(num)) {
      num = parseFloat(prompt("Error, introduce otro número"));
    }
    if (num < 10) {
      contador1++;
    } else if (num >= 10 && num <= 20) {
      contador2++;
    } else if (num >= 21 && num <= 30) {
      contador3++;
    } else {
      contador4++;
    }
    i++;
  } while (i < 10 || !Number.isInteger(num));

  alert(
    `Menores de 10: ${contador1}. Entre 10 y 20: ${contador2}. Entre 21 y 30 ${contador3}. Mayores de 30: ${contador4}`
  );
}

function ejercicio3() {
  let miArray = [];
  let i = 0;
  let suma = 0;
  let num;
  //El usuario introduce siete números y se comprueba que estos sean válidos, Si lo son se introduciran en el array
  do {
    num = parseFloat(prompt("Introduce 7 números enteros positivos"));
    miArray[i] = num;
    if (isNaN(num) || !Number.isInteger(num)) {
      num = parseFloat(prompt("Error, introduce otro número"));
      miArray[i] = num;
    }
    i++;
  } while (i < 7);
  //Para realizar la suma se recorre el array con un bucle for y se van sumando sus elementos
  for (let j = 0; j < miArray.length; j++) {
    suma += miArray[j];
  }
  //Se muestra la suma
  console.log(`Array completo: 
        ${miArray}`);
  console.log(`La suma de todos los elementos es: ${suma}`);
  //Se reinicia la i para volver a usarla en otro do while
  //Se piden dos nuevos números y se cambian por la primera y última posición del array
  i = 0;
  let numeroNuevo1;
  let numeroNuevo2;
  do {
    numeroNuevo1 = parseFloat(prompt("Introduce otro número entero positivo"));
    if (isNaN(numeroNuevo1) || !Number.isInteger(numeroNuevo1)) {
      num = parseFloat(prompt("Error, introduce otro número"));
      miArray[0] = numeroNuevo1;
    } else {
      miArray[0] = numeroNuevo1;
    }
    i++;
    numeroNuevo2 = parseFloat(prompt("Introduce otro número entero positivo"));
    if (isNaN(numeroNuevo2) || !Number.isInteger(numeroNuevo2)) {
      num = parseFloat(prompt("Error, introduce otro número"));
      miArray[6] = numeroNuevo2;
    } else {
      miArray[6] = numeroNuevo2;
    }
    i++;
  } while (i < 1);
  //Se muestra el array con las nuevas posiciones
  console.log("Array actualizado: " + miArray);
  //Se reinicia la variable suma para hacer la media con el array actualizado
  suma = 0;
  let media;
  let mayoresMedia = "Numeros Mayores Media: ";
  let menoresMedia = "Numeros Menores Media:  ";
  for (i = 0; i < miArray.length; i++) {
    suma += miArray[i];
  }
  media = suma / miArray.length;
  //Se utiliza la función tofixed para redondear la media dos decimales
  console.log(`La media es ${media.toFixed(2)}`);
  /*Para realizar la cadena con los mayores y los menores se recorre el array y se comprueba que números son mayores y menores a la media 
  y se concatenan a sus respectivas cadenas */
  for (i = 0; i < miArray.length; i++) {
    if (miArray[i] > media) {
      mayoresMedia += miArray[i] + ",";
    }
    if (miArray[i] < media) {
      menoresMedia += miArray[i] + ",";
    }
  }

  console.log(mayoresMedia);
  console.log(menoresMedia);
  i = 0;
  do {
    num = parseFloat(prompt("Introduce otro número entero positivo más"));
    if (isNaN(num) || !Number.isInteger(num)) {
      num = parseFloat(prompt("Error, introduce otro número"));
    }
    i++;
  } while (i < 1);
  /*Para mostrar las posiciones del número introducido por el usuario se crea una variable cadena para concatenar dichas posiciones y
una variable booleana que se utiliza para comprobar si el número está o no en el array*/
  let posiciones = " ";
  let bool = false;
  for (i = 0; i < miArray.length; i++) {
    if (miArray[i] == num) {
      posiciones += i + ",";
      bool = true;
    }
  }
  /*En caso de que el número este en el array el booleano está en true y muestra sus posiciones, en caso contrario, significará que
  el número no está en el array por lo que se mostrará un mensaje de que no se ha encontrado.*/
  if (bool) {
    console.log(`El número ${num} aparece en las posiciones ${posiciones} `);
  } else {
    console.log(`El número ${num} no se encuentra`);
  }
}

function ejercicio4() {
  let usuario;
  let cont = 0;
  /** Se introduce un número y se comprueba que esté entre 2 y 5*/
  do {
    usuario = parseInt(prompt("Introduce un número entero en 2 y 5."));
  } while (usuario < 2 || usuario > 5 || isNaN(usuario));

  let matriz = new Array();
  let suma = 0;
  //Se rellena la matriz mediante dos bucles y la fórmula para crear números aleatorios, además se utiliza la variable suma para sumar todos los elementos
  for (let i = 0; i < usuario; i++) {
    matriz[i] = [];
    for (let j = 0; j < usuario; j++) {
      matriz[i][j] = Math.floor(Math.random() * 100);
      cont++;
      suma += matriz[i][j];
    }
  }
  //La variable frase es utilizada para mostrar el array como una matriz y que los elementos que ocupen un solo espacio pasen a ocupar dos.
  for (let i = 0; i < usuario; i++) {
    let frase = " ";
    for (let j = 0; j < usuario; j++) {
      if (matriz[i][j] < 10) {
        frase += "0" + matriz[i][j] + " ";
      } else {
        frase += matriz[i][j] + " ";
      }
    }

    console.log(frase);
  }

  console.log(`La suma de los elementos de la matriz es ${suma}`);
  /**Para realizar la copia simplemente se crea otro array y se iguala a la matriz original mediante un bucle.
   * En este mismo bucle se comprueba si los elementos de la copia son menores de 50, y si es asi se cambian a 50
   */
  let copia = [];
  for (i = 0; i < usuario; i++) {
    copia[i] = [];

    for (j = 0; j < usuario; j++) {
      copia[i][j] = matriz[i][j];
      if (copia[i][j] < 50) {
        copia[i][j] = 50;
      }
    }
  }
  /*La suma de las diagonales se hace mediante un condicionales que harán que los elementos se sumen solo en el caso que i y j sean iguales,
es decir, cuando se encuentran en la diagonal*/
  console.log(copia);
  let diagonalMatriz = 0;
  let diagonalCopia = 0;
  for (i = 0; i < usuario; i++) {
    for (j = 0; j < usuario; j++) {
      if (i == j) {
        diagonalMatriz += matriz[i][j];
        diagonalCopia += copia[i][j];
      }
    }
  }
  /**Se comprueba cuál es mayor y se muestra mediante un mensaje */
  if (diagonalMatriz > diagonalCopia) {
    console.log(`El diagonal de la matriz original es mayor al de la copia`);
  } else if (diagonalMatriz < diagonalCopia) {
    console.log(`El diagonal de la matriz original es menor al de la copia`);
  } else {
    console.log(`Las dos diagonales dan el mismo resultado`);
  }
}

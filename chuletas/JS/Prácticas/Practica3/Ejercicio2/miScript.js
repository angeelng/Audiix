window.onload = function () {

  function annadir() {
    let usuario = prompt("Introduce una cadena de texto: "); 
    let padreLi = document.querySelector("ol"); //Se selecciona el primer elemento ol de la página (en este caso el único) y así tener el padre de todos los li
    let li = document.getElementsByTagName("li");
    let nuevoLi = document.createElement("li");

    var opcion = prompt(`- + : se incluirá al final de la lista.
                                 - * : se incluirá el primero de la lista.
                                 - 1,2,3,4……..: reemplazará la entrada oportuna.`);
    let texto = document.createTextNode(usuario);
    //Al utilizar un prompt para recoger un número, este se guardará como String, por lo que para hacer las comprobaciones y utilizarlo como índice para el array de li 
    //lo he pasado a otra variable casteándolo a entero.
    var opcionNum = parseInt(opcion); 
    opcionNum-- //Se resta uno para que el usuario prueda introducir los números más facilmente.
    if (opcionNum < li.length) {
      padreLi.replaceChild(nuevoLi, li[opcionNum]); //Se reemplaza el li que se encuentre en la posición indicada por el usuario por uno nuevo con el texto introducico
      nuevoLi.appendChild(texto);
      
    } else if (opcion == "+") {
        padreLi.appendChild(nuevoLi);
        nuevoLi.appendChild(texto);
        
    }else if (opcion == "*") {
        let primerHijo = padreLi.firstElementChild; //Se apunta a primer elemento hijo del ol
        padreLi.insertBefore(nuevoLi, primerHijo);//El nuevo li se introduce antes que el primer hijo, quedando en la primera posición de la lista
        nuevoLi.appendChild(texto);
    }  
    else {
      alert("Error, debes introducir una opción válida");
    }
  }

  window.annadir = annadir;
};

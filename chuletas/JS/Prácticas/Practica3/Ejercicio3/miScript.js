window.onload = function (){

    function generarTabla() {
        let tabla = document.createElement("table");
        let div = document.getElementById("solucion");
        let contador = 1; //Se utilizará para que en cada columna aparezca el número de fila al que pertenece
        tabla.setAttribute("class", "tabla");
    
        do {
          var numFilas = parseInt(prompt("Introduce el número de filas.")); //Se comprueba si se mete un número de filas correcto
        } while (numFilas >= 10 || numFilas < 1);
    
        do {
          var numColumnas = parseInt(prompt("Introduce el número de columnas.")); //Se comprueba si se mete un número de columnas correcto
        } while (numColumnas >= 10 || numColumnas < 1);
        
        for (let i = 0; i < numFilas; i++) {
          let filas = document.createElement("tr"); //Se van creando filas hasta que se llegue al número introducido por el usuario
    
          for (let j = 0; j < numColumnas; j++) {
            let columnas = document.createElement("td"); //Se van creando columnas en cada fila hasta llegar al número indicado por el usuario
    
            columnas.textContent = contador; //Se muestra el número de fila al que pertenece cada columna
    
            filas.appendChild(columnas);
            columnas.setAttribute("onclick", "sustituirPorImg(this)"); //Se establece el atributo onclick con una función en cada columna.
          }
    
          tabla.appendChild(filas);
          contador++;
        }
        
        div.appendChild(tabla); //Se introducen las tablas creadas en el div solución
      }

      function sustituirPorImg (td){
        //Se pide al usuario el nombre de la imagen que debe introducir
        let usuario = prompt("Introduce el nombre de la imagen que deseas introducir: ");
        //Se crea el elemento imagen y se establece la ruta de la imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", usuario);
        imagen.setAttribute("alt", "Imagen")
        //Se borra el contenido de los td para eliminar el número que aparezca en él
        td.textContent = "";
        //Se introduce la imagen como hijo del td
        td.appendChild(imagen);
        if (usuario == ""){ //En caso de que el usuario no introduzca nada se muestra la imagen JS.png
          imagen.setAttribute("src", "JS.png");
        }
      }

      window.generarTabla = generarTabla;
      window.sustituirPorImg = sustituirPorImg;

}
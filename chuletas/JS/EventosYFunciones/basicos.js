window.onload = function (){
    function hacerAlgo (){
        alert("gitanos de la palma");
    }
    //Manejador de eventos
    document.getElementById("boton").onclick = hacerAlgo;

    /**
     * También así:
     * let elemento = document.getElementById("boton");
     * elemento.onclick = hacerAlgo;
     */

    let parrafo = document.getElementById("parrafo");
    function cambiarEstilo (){
        parrafo.style.color = "red";
    }   

    function restaurar (){
        parrafo.style.color = "black";
    }

    parrafo.onmouseover = cambiarEstilo;
    parrafo.onmouseout = restaurar;

    let lista = document.querySelectorAll("ul li");
    for (let i = 0; i < lista.length; i++){
        lista[i].onclick = cambiarColor;

    }

    function cambiarColor (evento){
        let elemento = evento.target;
        elemento.style.backgroundColor = "lightblue";
    }

    let listatd = document.getElementsByTagName("td");
    for (let i = 0; i < listatd.length; i++){
        listatd[i].ondblclick = cambiarCelda;
    }

    function cambiarCelda (columna){
        columna.style.backgroundColor = "green";
        columna.style.fontStyle = "italic"
    }

    function generarTabla() {
        let tabla = document.createElement("table");
        let contador = 1; 
        tabla.border = 1;
    
        do {
          var numFilas = parseInt(prompt("Introduce el número de filas.")); 
        } while (numFilas >= 10 || numFilas < 1);
    
        do {

          var numColumnas = parseInt(prompt("Introduce el número de columnas.")); 
        } while (numColumnas >= 10 || numColumnas < 1);
        
        for (let i = 0; i < numFilas; i++) {
          let filas = document.createElement("tr"); 
    
          for (let j = 0; j < numColumnas; j++) {
            let columnas = document.createElement("td"); 
            //columnas.onclick = cambiarCelda;
            columnas.onclick = function (){
              cambiarCelda(this);
            }
            columnas.textContent = contador; 
    
            filas.appendChild(columnas);
          }
    
          tabla.appendChild(filas);
          contador++;
        }
        
        document.body.appendChild(tabla) 
      }

      document.getElementById("generarTabla").onclick = generarTabla;

      let parrafo2 = document.getElementById("parrafo2");
      parrafo2.onmouseover = function (){
        parrafo2.style.color = "blue";
      }
      parrafo2.onmouseout = function (){
        parrafo2.style.color = "black";
      }

    

}
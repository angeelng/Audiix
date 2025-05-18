window.onload = function () {
    function anadir() {
      let li = document.createElement("li");
  
      let ul = document.getElementById("ula");
  
      let patata = prompt("Introduce un texto");
  
      let texto = document.createTextNode(patata);
  
      li.appendChild(texto);
  
      ul.appendChild(li);
    }
  
    function generar() {
      let container = document.getElementById("container");
      let p = document.createElement("p");
  
      p.setAttribute("class", "clase2");
  
      let patata = prompt("Introduce un texto");
  
      let texto = document.createTextNode(patata);
     
      document.body.appendChild(p)
  
      p.appendChild(texto);
  
      let boton = document.getElementById("BN");
  
      boton.removeAttribute("disabled");
      
    }
  
    function borrarViejo() {
      // PrimerParrafo es un array porque coge todas las etiquetas p
      let primerParrafo = document.getElementsByTagName("p");
      let padre = primerParrafo[0].parentNode;
      padre.removeChild(primerParrafo[0]);
    }
  
    function borrarNuevo() {
      let parrafos = document.querySelectorAll("p")
      let clase; 
      for(let i = 1; i < parrafos.length; i++){
            parrafos[i].remove();
      }
    }

    function sustituir (){
      let parrafos = document.querySelectorAll("p");
      let parrafoPrincipal = parrafos[0];
      padre = parrafoPrincipal.parentNode;
      tabla = document.createElement("table");
      tabla.setAttribute("border", 1)
      padre.replaceChild(tabla, parrafoPrincipal)
      
      for (let i = 0; i < 2; i++){
        let precio = (1 + (Math.random() * 100)).toFixed(2);
        let texto = document.createTextNode(precio);
        fila =document.createElement("tr");
        columna = document.createElement("td");
        columna.appendChild(texto)
        fila.appendChild(columna)
        tabla.appendChild(fila)
      }

      let boton = document.getElementById("sustituir");
      boton.disabled = true;

    }

    function cambiarColor(color){
      if(color.style.backgroundColor == "blue"){
        color.style.backgroundColor ="white";
      }else{
        color.style.backgroundColor = "blue"
      }
    }

    function crearTabla() {
        let tabla = document.createElement("table");
        tabla.border = "1";
        let contador = 1;
    
        do {
          var numFilas = parseInt(prompt("Introduce el número de filas."));
        } while (numFilas > 10 || numFilas < 1);
    
        do {
          var numColumnas = parseInt(prompt("Introduce el número de columnas."));
        } while (numColumnas > 10 || numColumnas < 1);
    
        for (let i = 0; i < numFilas; i++) {
          let filas = document.createElement("tr");
    
          for (let j = 0; j < numColumnas; j++) {
            let columnas = document.createElement("td");
    
            columnas.textContent = contador;
    
            filas.appendChild(columnas);
            columnas.setAttribute("onclick", "cambiarColor(this)")
          }
    
          tabla.appendChild(filas);
    
          contador++;
        }
    
        //! Sin terminar
        document.body.appendChild(tabla);
        let tedes = document.querySelectorAll("td");
    
      }
    
      function agregar() {
        let enlace = prompt("Introduce el enlace");
    
        let a = document.createElement("a");
        a.setAttribute("href", enlace);
    
        let texto = document.createTextNode(enlace);
        a.setAttribute("target", "_blank");
        a.appendChild(texto);
    
        let li = document.createElement("li");
        let div = document.getElementById("divlista");
        let ul = div.firstElementChild;
    
        ul.appendChild(li);
        li.appendChild(a);
      }
    
      function borrar() {
        let div = document.getElementById("divlista");
        //let eleis = div.getElementsByTagName("li");
        //let eleis = document.querySelectorAll("div ul li");
        let ul = div.firstElementChild
        ul.innerHTML = "";
      }
    
    window.cambiarColor = cambiarColor;
    window.borrar = borrar;
    window.agregar = agregar;
    window.crearTabla = crearTabla;
    window.sustituir = sustituir;   
    window.borrarNuevo = borrarNuevo;
    window.borrarViejo = borrarViejo;
    window.anadir = anadir;
    window.generar = generar;
}
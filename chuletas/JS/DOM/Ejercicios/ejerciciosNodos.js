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
    
    function generarTabla(){
      do{
        var numFilas = parseInt(prompt("Introduzca el número de filas"))
      }while(numFilas < 0 || numFilas > 10);
      
      do{
        var numColumnas = parseInt(prompt("Introduzca el número de columnas"))
      }while(numColumnas < 0 || numColumnas > 10);

      
      let tabla = document.createElement("table");
      tabla.setAttribute("border", 1)
      let cont = 0;
      

      for(let i = 0; i < numFilas; i++){
        cont++
        console.log("hola")
        let tr = document.createElement("tr");
        tabla.appendChild(tr)
        for(let j = 0; j < numColumnas; j++){
          texto = document.createTextNode(cont)
          let td = document.createElement("td");
          td.appendChild(texto)
          tr.appendChild(td);

        }
      }
      let div = document.createElement("div");
      document.body.appendChild(div)
      div.appendChild(tabla)
    }

    function agregarEnlace(){
      let usuario = prompt("Introduce un enlace")
      let enlace = document.createTextNode(usuario)
      let div = document.getElementById("divlista")
      let ul = div.firstElementChild;
      let li = document.createElement("li")
      let a = document.createElement("a")
      a.appendChild(enlace)
      a.setAttribute("href", usuario)
      console.log(enlace)
      a.setAttribute("target", "_blank")
      ul.appendChild(li)
      li.appendChild(a)
    }

    function borrarEnlace (){
      let hijosLista = document.querySelectorAll("li")
      for(i = 0; i < hijosLista.length; i++){
        hijosLista[i].remove()
      }
    }

    function generarNumeros(){
      let divs = document.getElementsByTagName("div");
      let primerDiv = divs[0];
      let segundoDiv = primerDiv.nextElementSibling;
        let num1 = (1 + (Math.random() * 50)).toFixed(0);
        let num2 = (1 + (Math.random() * 50)).toFixed(0);
        let textoPrimerDiv = document.createTextNode(num1)
        let textoSegundoDiv = document.createTextNode(num2)
        primerDiv.appendChild(textoPrimerDiv)
        segundoDiv.appendChild(textoSegundoDiv)
      let boton = document.getElementById("agregar");
      boton.disabled = true;
    }

    function compararNumeros(){
      let divs = document.querySelectorAll("div");
      let primerDiv = divs[0];
      let segundoDiv = divs[1]
      let tercerDiv = divs[2]
      console.log(tercerDiv)
      if(parseFloat(primerDiv.textContent) > parseFloat(segundoDiv.textContent)){
          let mayor = document.createTextNode(primerDiv.textContent);
          tercerDiv.appendChild(mayor)
          console.log("hola")
      }else{
        let mayor = document.createTextNode(segundoDiv.textContent);
        tercerDiv.appendChild(mayor)
        console.log("hola")
      }
    }

    window.compararNumeros = compararNumeros;
    window.generarNumeros = generarNumeros;
    window.borrarEnlace = borrarEnlace;
    window.agregarEnlace = agregarEnlace;
    window.generarTabla = generarTabla;
    window.sustituir = sustituir;
    window.borrarNuevo = borrarNuevo;
    window.borrarViejo = borrarViejo;
    window.anadir = anadir;
    window.generar = generar;
  };
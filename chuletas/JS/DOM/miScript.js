window.onload = function () {
  /*

    let parrafos = document.getElementsByTagName("p");
  console.log(parrafos);
  for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].textContent);
  }

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Este es el párrafo número " + (i + 1);
   
  }
*/
  /***************************/
  function mostrarNombre() {
    let inputUsuario = document.getElementsByName("usuario");
    console.log(inputUsuario);

    let nombre = inputUsuario[0].value;
    console.log(nombre);
    if (nombre.length == 0) {
      alert("No has introducido nada");
    } else {
      alert("Nombre introducido " + nombre);
    }
  }

  let enlaces = document.getElementsByClassName("nav-link");
  console.log(enlaces);
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].style.backgroundColor = "lightblue";
  }

  let homeLink = document.getElementById("link");
  console.log(homeLink);
  homeLink.href = "home.html";
  homeLink.textContent = "Página pincipal";

  /***************************/
  let texto = document.querySelector("div p");
  console.log(texto);
  texto.textContent = "Hola mundo";
  texto.style.backgroundColor = "red";

  let texto2 = document.querySelectorAll("div p");

  /***************************/
  function modificarTabla(){
    let tabla = document.getElementById("miTabla");
    let ancho = tabla.width;
    let altura = tabla.height;
    let borde = tabla.border;
    tabla.width =  "500";
    tabla.border = "4";
    console.log("Anchura inicial: " + ancho);
    console.log("Altura inicial: " + altura);
    console.log("Borde inicial: " + borde);
    let elemento = document.getElementById("parra");
    elemento.align = "center";
    console.log(elemento);

     altura = tabla.getAttribute("height");
     tabla.setAttribute ("height", "300px");
     console.log("Altura inicial " + altura);
  }

 /***************************/
  function cambiarTexto(){
    let parrafo = document.getElementById("text-paragraph");
    console.log(parrafo.innerHTML);
    //Lo modifico
    parrafo.innerHTML = "<em>Este es el nuevo contenido</em>";
    parrafo.textContent = "<em>Este es el nuevo contenido</em>";
  }
  
  function copiarTexto(){
    let parrafoOrigen = document.getElementById("source-paragraph");
    let parrafoDestino = document.getElementById("destination-paragraph");

    parrafoDestino.innerHTML = parrafoOrigen.innerHTML;
    
  }

  function cambiarClase(){
    let parrafo = document.getElementById("parrafo");
    console.log(parrafo.className);
    parrafo.className = "nuevoEstilo";
    console.log(parrafo.className);
  }

  window.modificarTabla = modificarTabla;
  window.mostrarNombre = mostrarNombre;
  window.cambiarTexto = cambiarTexto;
  window.copiarTexto = copiarTexto;
  window.cambiarClase = cambiarClase;

};

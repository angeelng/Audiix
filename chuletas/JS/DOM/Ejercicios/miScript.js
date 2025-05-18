window.onload = function () {

    function mostrarAlert (){
        let enlace = document.getElementById("enlace");
        let textoEnlace = enlace.textContent;
        let destinoEnlace = enlace.getAttribute("href");
        alert("Enlace: " + textoEnlace + destinoEnlace);
    }

    function cambiarUrl (){
        let enlace = document.getElementById("enlace");
        enlace.textContent = "He cambiado";
        enlace.setAttribute("href", "www.marca.com");
        let enlaceNuevo = enlace.getAttribute("href");
        console.log(enlaceNuevo);
    }

    function mostrarMedidas() {
        let tabla = document.getElementById("tabla1");
        let anchura = tabla.getAttribute("width");
        let altura = tabla.getAttribute("height");
        alert("Anchura " + anchura + " Altura " + altura);

        do {

            var newAnchura = parseInt(prompt("Introduce una nueva anchura."))

        } while (newAnchura <= 0 || isNaN(newAnchura));

        do {

            var newAltura = parseInt(prompt("Introduce una nueva altura."))

        } while (newAltura <= 0 || isNaN(newAltura));

        tabla.setAttribute("width", newAnchura);
        tabla.setAttribute("height", newAltura);

    }

    function mostrarBorde() {

        let tabla = document.getElementById("tabla1");
        let borde = tabla.getAttribute("border");
        alert("El valor actual del borde de la tabla es: " + borde);

        do{
            var newBorder = parseFloat(prompt("Introduce una nueva medida para el borde: "));
        }while (newBorder < 0 || isNaN(newBorder));
        
        tabla.setAttribute("border", newBorder);

    }

    function cambiarAlineacion (){
        let tabla = document.getElementById("tabla1");
        let alineacion = tabla.getAttribute("align");
        console.log(alineacion);


        switch (alineacion) {
            case "center":
                tabla.setAttribute("align", "right");
                break;
            case "right":
                tabla.setAttribute("align", "left");
                break;
            case "left":
                tabla.setAttribute("align", "center");
                break;  
            default:
                break;
        }
    }

    function sumar (){
        let div = document.getElementById ("div1");
        let numero = parseFloat (div.textContent);
        let suma = numero + 1;
        div.textContent = suma;
    }

    function restar (){
        let div = document.getElementById ("div1");
        let numero = parseFloat (div.textContent);
        let resta = numero - 1;
        div.textContent = resta;
    }

    function cambiarParrafo() {
        let parrafo = document.getElementById("cambiarParrafo");
        /*
        if (parrafo.className == "uno") {
            parrafo.className = "dos";
        } else {
            parrafo.className = "uno";
        }
        */
        parrafo.style.backgroundColor = "lightblue";
        parrafo.style.fontSize = "20px";  
    }

    var contador = 0;

    function avanzarImagen(){
        let galeria = document.getElementById("galeria"); 
        let botonAvanzar = document.getElementById("avanzar");
        contador++;
        if (contador > 4){
            botonAvanzar.disabled = true
        } 
        switch (contador) {
            case 1:
                galeria.setAttribute
                break;
            case 2:
                galeria.setAttribute
                break;
            case 3:
                galeria.setAttribute
                break; 
            case 4:
                galeria.setAttribute
                break;                  
            default:
                break;
        }        

    }

    function retrocederImagen(){
        let galeria = document.getElementById("galeria");  
        let botonRetroceder = document.getElementById("retroceder");
        contador--;
        if (contador <= 0){
            botonRetroceder.disabled = true
        } 
        switch (contador) {
            case 1:
                galeria.setAttribute("src", "Images/seccion-hombre.jpg")
                break;
            case 2:
                galeria.setAttribute("src", "Images/seccion-mujer.jpg");
                break;
            case 3:
                galeria.setAttribute("src", "Images/seccion-ninio.jpg");
                break; 
            case 4:
                galeria.setAttribute("src", "Images/zapatillas.jpg");
                break;                  
            default:
                break;
        }        

    }

    function cambiarColor (color){
        document.body.style.backgroundColor = color.value;
    }

    var contadorColores = -1;

    function cambiarFondo(celda){
        let colores = ["green", "blue", "pink", "yellow"];
        contadorColores++;
        celda.style.backgroundColor = colores[contadorColores];
        if(contadorColores > colores.length){
            contadorColores = -1;
        }
    }

    function ej10 (color){
        document.body.style.backgroundColor = color.style.backgroundColor;
    }

    function salirDiv(){
        document.body.style.backgroundColor = "white";
    }

    function mostrarDiv(){
        //document.getElementById("div2").style.visibility = "visible";
        document.getElementById("div2").style.display = "block";
    }

   
    function moverDivDerecha (){
        let imagen = document.getElementById("imagen"); 
        let posicion = parseInt(imagen.style.left) + 5;
        imagen.style.left = posicion + "px";

    }
    
    function moverDivIzquierda (){
        let imagen = document.getElementById("imagen"); 
        let posicion = parseInt(imagen.style.left) - 5;
        imagen.style.left = posicion + "px";

    }

    function resetearPos (){
        let imagen = document.getElementById("imagen");
        let posicionIzq = parseInt(imagen.style.left)
        let posicionDer = parseInt(imagen.style.right)
        imagen.style.right = posicionIzq;
        imagen.style.left = posicionDer;
    }

    var movimiento;
    function mover (){
         movimiento = setInterval(moverDivDerecha, 100);
    }

    function parar (){
        clearInterval(movimiento);
    }

    function moverDivDerecha (){
        let imagen = document.getElementById("imagen"); 
        let posicion = parseInt(imagen.style.left) + 5;
        imagen.style.left = posicion + "px";
    }

    var contador = 0;
    var incremento;
    function cargar (){
        incremento = setInterval(ejercicio15, 10);
    }

    function ejercicio15 () {
        contador++;
        let barra = document.getElementById("barra");
        let boton = document.getElementById("cargar");
        barra.setAttribute("value", contador);
        if (barra.getAttribute("value") == 100){
            alert("Has llegado al máximo");
        }else{
            boton.disabled = true;
        }
    }

    var carrera;
    function empezarCarrera (){
        carrera = setInterval(moverDivCarrera, 1000);
   }

    function moverDivCarrera (){
        let div1 = document.getElementById("d1"); 
        let div2 = document.getElementById("d2"); 
        let div3 = document.getElementById("d3"); 
        let div4 = document.getElementById("d4"); 
        let competidores = [div1, div2, div3, div4];
        let random;
        for (let i = 0; i < competidores.length; i++){
            random = Math.random() * (500 - 100) + 100;
            competidores[i].style.left = random + "px";

        }


    }

    //Ejercicio 17

    

    window.ejercicio15 = ejercicio15;
    window.cargar = cargar;
    window.mostrarAlert = mostrarAlert;
    window.cambiarUrl = cambiarUrl;
    window.mostrarMedidas = mostrarMedidas;
    window.mostrarBorde = mostrarBorde;
    window.cambiarAlineacion = cambiarAlineacion;
    window.sumar = sumar;
    window.restar = restar;
    window.avanzarImagen = avanzarImagen;
    window.retrocederImagen = retrocederImagen;
    window.cambiarColor = cambiarColor;
    window.cambiarFondo = cambiarFondo;
    window.cambiarParrafo = cambiarParrafo;
    window.ej10 = ej10;
    window.salirDiv = salirDiv;
    window.mostrarDiv = mostrarDiv;
    window.moverDivDerecha = moverDivDerecha;
    window.moverDivIzquierda = moverDivIzquierda;
    window.resetearPos = resetearPos;
    window.mover = mover;
    window.parar = parar;
    window.moverDivCarrera = moverDivCarrera;
    window.empezarCarrera = empezarCarrera;
};
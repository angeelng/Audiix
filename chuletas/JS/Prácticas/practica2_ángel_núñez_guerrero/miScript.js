window.onload = function (){
    //Ejercicio 1
    /** Se recogen todos los enlaces con la funcion getElementsbytagname y se modifica la propiedad href de cada uno
     * accediendo a la posición correspondiente de cada enlace.
     * El console.log se realiza para comprobar que se han cambiado correctamente.
    */
    function actualizarURL (){
        let enlaces = document.getElementsByTagName("a");
        enlaces[0].href = "inicio.html";
        enlaces[1].href = "servicios.html";
        enlaces[2].href = "contacto.html";
       console.log (enlaces[0])
       console.log (enlaces[1])    
       console.log (enlaces[1])    
    }

    window.actualizarURL = actualizarURL;
    /**Para resaltar el enlace servicio se accede a este enlace en concreto mediante su id.
     * Se accede a los estilos de este enlace y se controla mediante un if que estos vayan intercalándose.
     */
    function resaltarServicios (){
        let servicios = document.getElementById("servicios");
        if(servicios.style.backgroundColor == "yellow" && servicios.style.color == "red"){
            servicios.style.backgroundColor = "white";
            servicios.style.color = "blue";
        }else{
            servicios.style.backgroundColor = "yellow"
            servicios.style.color = "red"
        }
    
    }

    window.resaltarServicios = resaltarServicios;
    //Ejercicio 2
    /**Para que el estilo1 salga de forma predeterminada se accede a las etiquetas parrafo y a la primera de ellas 
     * se le cambia el nombre de la clase mediante la función classname (Esto se hace fuera de una función para que se aplique directamente).
        Mediante un if se controla que las dos clases se vayan intercalando.
    */

        var parrafo = document.getElementsByTagName("p")
        parrafo[0].className = "estilo1";

        function cambiarClase (){           
            if (parrafo[0].className == "estilo1"){
                parrafo[0].className = "estilo2";
            }else if (parrafo[0].className == "estilo2"){
                parrafo[0].className = "estilo1";
            }
        }
        
        window.cambiarClase = cambiarClase;

        /**Para cambiar el color de texto  se crea la variable estilos para acceder al CSS del párrafo
         * para controlar que se vayan intercalando se crea una variable para guardar el color original.
         * La comparación se realiza utilizando los rgb porque la función getpropertyvalue recoge así los colores.
        */

        function cambiarColorTexto (){
            let estilos = window.getComputedStyle(parrafo[0]);
            let colorActual = estilos.getPropertyValue("color");
            
            if (colorActual == "rgb(0, 0, 255)"){
                parrafo[0].style.color = "red";
            }else if (colorActual == "rgb(255, 255, 255)"){
                parrafo[0].style.color = "green";
            }

        }

        window.cambiarColorTexto = cambiarColorTexto;
        // Ejercicio 3
        /**Se crea el array lista, que contiene las palabras que se irán intercalando en la tabla.
         * Se crea un bucle que recorrerá la lista, y en el momento en el que encuentre una coincidencia 
         * entre lo que hay dentro de las celdas y una de las palabras del array, igualará la variable posición al índice
         * donde se encuentra la coincidencia, una vez hecho esto se sale del bucle.
         * Finalmente con un ternario se controla que al llegar a la última palabra se repita la lista y se iguala el contenido de la celda
         * con la palabra correspondiente en el array.
         */
        function cambiarFrase (celda){
            
            let lista = ["Marcado", "Pendiente", "Completado"];

            let posicion = 0;
            for(let i = 0; i<lista.length;i++){
    
                if(celda.textContent == lista[i]){
                    posicion=i;
                    i=lista.length;
                }
            }

            posicion = posicion==lista.length-1?0:posicion+1;

            celda.textContent= lista[posicion];
            
        }

        window.cambiarFrase = cambiarFrase;

        //Ejercicio 4
        /**
         * Se crea un bucle que recorrerá las imágenes, y en el momento en el que encuentre una imagen que esté visible, 
         * hará que deje de estarlo y saldrá del bucle.
         * Finalmente se controla que al llegar a la última imagen la posición se reinicie a 0 para volver a iniciar la galería de imágenes.
         * En la función siguienteImagen() la posición se va sumando para ir a la siguiente.
         * En la función anteriorImagen() La posición se va restando para ir a la siguiente.
         */
        var posicion = 0;
        function siguienteImagen (){
            let imagenes = document.getElementsByTagName("img");
            
            for(let i = 0; i<imagenes.length;i++){

                if(imagenes[posicion].style.display == "block"){
                    imagenes[posicion].style.display = "none";               
                    i = imagenes.length;
                }
            }  
            if (posicion == imagenes.length - 1){
                posicion = 0;
                imagenes[posicion].style.display = "block";
            }else{
                posicion++;
                imagenes[posicion].style.display = "block";
            }
            

        }

        window.siguienteImagen = siguienteImagen;

        function anteriorImagen (){
            let imagenes = document.getElementsByTagName("img");
            
            for(let i = 0; i<imagenes.length;i++){

                if(imagenes[posicion].style.display == "block"){
                    imagenes[posicion].style.display = "none";               
                    i = imagenes.length;
                }
            }

           
            if (posicion == 0){
                posicion = imagenes.length - 1;
                imagenes[posicion].style.display = "block";
            }else{
                posicion--;
                imagenes[posicion].style.display = "block";
            }
        }

        window.anteriorImagen = anteriorImagen;

}
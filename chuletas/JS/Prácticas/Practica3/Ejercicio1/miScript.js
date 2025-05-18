window.onload = function (){
    
    function iniciarCarga (boton){
        //Se llama a la función setInterval para que la función cargarbarra se repita  
        //una vez por segundo, además se desactica el botón.
         id = setInterval(cargarBarra, 100);
        boton.disabled = true;
    }
    
    let cont = 0;//Contador para ir aumentando el value del meter
    function cargarBarra (){
        cont+=25;
        let barra = document.getElementById("meter");
        let boton = document.getElementById("coinButton");
        let contador = document.getElementById("coinCount");
        barra.setAttribute("value", cont); //Se establece el value del meter con el contador
        if (barra.getAttribute("value") == 100){
            boton.disabled = false;//En caso de que la barra llegue al máximo el botón se vuelve a habilitar
            contador.textContent++//Se le suma uno a las monedas
            clearInterval(id)   //Se finaliza la función setInterval para que la función no se siga repitiendo
            barra.setAttribute("value", 0)
            cont = 0; //El contador se reinicia a cero para que al pulsar otra vez el botón la carga de la barra se reinicie
        }
        let article = document.getElementById("imageContainer");

        if (contador.textContent == 3){ //En caso de que el textContent del contador sea 3, se crea un elemento imagen y con la ruta a la imagen JS.png
            let imagen = document.createElement("img");
            imagen.setAttribute("src", "JS.png")
            article.appendChild(imagen)
            boton.disabled = true;
        }
        
    }

    window.iniciarCarga = iniciarCarga;
    window.cargarBarra = cargarBarra;


}
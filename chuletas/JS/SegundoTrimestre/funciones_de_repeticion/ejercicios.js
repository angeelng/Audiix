window.onload = function (){
    let contadorDescargar = 100;
    let id;
    function descargar (){
        id = setInterval(descargarBarra, 10);
    }
    function descargarBarra (){     
        contadorDescargar--;
        let descargar = document.getElementById("meter");
        descargar.setAttribute("value", contadorDescargar)
    }
    let contadorCargar = 0;

    function cargar (){
        id = setInterval(cargarBarra, 10);
    }

    function cargarBarra (){     
        contadorCargar++;
        let cargar = document.getElementById("progress");
        cargar.setAttribute("value", contadorCargar)
    }

    let contadorMonedas = 0;
    let boton = document.getElementById("botonMonedas");
    function generadorDeMonedas (){
        contadorCargar++;
        let cargar = document.getElementById("progress2");
        cargar.setAttribute("value", contadorCargar)
        console.log(cargar.getAttribute("value"))
        let div = document.getElementById("monedas");
        if (cargar.getAttribute("value") == 100){
            contadorMonedas++
            div.textContent = contadorMonedas;
            boton.disabled = false;
        }
    }
    function generarMoneda (){
        id = setInterval(generarMonedas, 10);
        
        boton.disabled = true;
    }

    window.descargarBarra = descargarBarra;
    window.descargar = descargar;
    window.cargar = cargar;
    window.cargarBarra = cargarBarra;
    window.generarMoneda = generarMoneda;
    window.generarMonedas = generadorDeMonedas;
}
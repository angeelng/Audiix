window.onload = function (){

    function cambiarTexto (fondo){
        fondo.textContent = "Has hecho click en mí";
    }

    window.cambiarTexto = cambiarTexto;

};
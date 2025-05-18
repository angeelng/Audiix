window.onload = function (){

    var colores = ["green", "red", "pink", "blue"];

    function cambiarColor (celda){
        let posicion = 0;
        for (let i = 0; i < colores.length; i++){
            if (celda.style.backgroundColor == colores[i]){
                posicion = i;
                i = colores.length;
            }
        }
    }

    window.cambiarColor = cambiarColor;

    function enlace (){
        let enlace = document.getElementById("enlace");
        let texto = enlace.textContent;
        let direccion = enlace.getAttribute("href");
        alert("Texto: " + texto + " Enlace: " + direccion);
    }   

    window.enlace = enlace;

}
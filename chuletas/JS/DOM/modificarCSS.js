window.onload = function (){

    function cambiarEstilo (){
        let parrafo = document.getElementById("miParrafo");
        parrafo.style.setProperty("color", "blue");
        parrafo.style.fontSize = "20px";
        parrafo.style.setProperty("background-color", "green");
    }

    window.cambiarEstilo=cambiarEstilo;

    function cambiarColorFondo (){
        let cuadro = document.querySelector("div");
        //console.log ("color:" + cuadro.style.backgroundColor)
        let estiloActual = window.getComputedStyle(cuadro);
        //console.log(estiloActual)
        let colorFondo = estiloActual.getPropertyValue("background-color");
        console.log (colorFondo)

        if (colorFondo === "rgb(173, 216, 230)"){
            cuadro.style.backgroundColor = "green"
        }else{
             cuadro.style.backgroundColor = "lightblue"
        }

    }

    window.cambiarColorFondo = cambiarColorFondo;

    function cambiarFuente (){
        let cuadro = document.querySelector("div");
        let estiloActual = getComputedStyle(cuadro);
        let tamanioFuente = estiloActual.getPropertyValue("font-size")
        console.log (tamanioFuente);
        if(tamanioFuente=="16px"){
            cuadro.style.fontSize="20px";
        }else{
            cuadro.style.fontSize = "16px";
        }
    }

    window.cambiarFuente = cambiarFuente;

};
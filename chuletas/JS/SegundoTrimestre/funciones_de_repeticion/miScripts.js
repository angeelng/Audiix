window.onload = function (){

    let contador = 0;
    let parrafoCuenta = document.getElementById("contador");
    let id = setInterval(incrementarContador, 1000);
    function incrementarContador (){
        contador++;
        parrafoCuenta.textContent = contador;
    }

    function controlarCuenta () {
        let boton = document.getElementById("boton");
        if(boton.textContent=="Pausar"){
            clearInterval(id);
            boton.textContent = "Reanudar";
        }else{
            id = setInterval (incrementarContador, 1000);
            boton.textContent = "Pausar";
        }
    }

    window.controlarCuenta = controlarCuenta;
    
}
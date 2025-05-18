window.onload = function (){

    function eliminarParrafo (){
        //1 Obtener la referencia del nodo a eliminar
         let elemento = document.getElementById("texto");
        //2 Obtener la referencia del padre del nodo a eliminar
        let padre = elemento.parentNode;
        //3 Eliminar el nodo desde el padre
        padre.removeChild(elemento) 

    }

    function eliminarElemento (boton){
        //Obtener la refencia del nodo a eliminar
        let li = document.querySelectorAll("#lista1 li"); 

        if (li.length != 0){
       //Me voy al último elemento de la lista
        let ultimo = li[li.length-1]
        //Obtener el padre
        let padre = ultimo.parentNode;
        padre.removeChild(ultimo)
        }else{
            boton.disabled = true
        }
    }

    function eliminarFila (){
        let fila = document.querySelector ("tr+tr")
        let padre = fila.parentNode
        padre.removeChild(fila)
    }

    function eliminarEntrada (){
        let campo = document.querySelectorAll("form p")
        let ultimo = campo[campo.length-1]
        let padre = ultimo.parentNode
        padre.removeChild(ultimo)
    }

    window.eliminarParrafo = eliminarParrafo;
    window.eliminarElemento = eliminarElemento;
    window.eliminarFila = eliminarFila;
    window.eliminarEntrada = eliminarEntrada;
}
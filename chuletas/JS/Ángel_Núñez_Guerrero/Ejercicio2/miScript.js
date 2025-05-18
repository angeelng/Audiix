window.onload = function (){
    let form = document.forms["checkboxForm"];
    let inputText = form.elements["checkboxLabel"];
    let addCheckbox = form.elements["addCheckbox"];
    let checkboxContainer = document.getElementById("checkboxContainer");
    let readCheckboxes = document.getElementById("readCheckboxes");
    addCheckbox.onclick = function (){ //Cada vez que se pulsa el botón se realiza una función
        if (inputText.value != ""){
            let br = document.createElement("br"); //Se crea una br 
            let checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox"); //Se establece el tipo checkbox para cada input
            checkBox.setAttribute("name", "opciones");
            checkBox.value = inputText.value; //Se iguala el value del checkbox a lo que se ha escrito
            let texto = document.createTextNode(inputText.value); //Se crea una nodo de texto para cara checkbox
            checkboxContainer.appendChild(checkBox)
            checkboxContainer.appendChild(texto)
            checkboxContainer.appendChild(br)
            inputText.value = "";
        }
    }
    
    readCheckboxes.onclick = function (){
        let checksBox = document.getElementsByName("opciones"); //Se cogen todos los checkboxs creados 
        let textarea =document.getElementById("outputArea");
        var cadena = ""; //Se crea una cadena vacia, la cual se utilizará para escribir en ella los valores de los input y mostrarlos en el textarea
        for (let i = 0; i < checksBox.length; i++){ //Se recorren todos los checkbox
    
            if(checksBox[i].checked){ //En caso de que estén seleccionados se concatenan a la cadena con una salto de línea
                cadena += checksBox[i].value + "\n";
            }
            
        }
        textarea.value = cadena; //Se iguala el valor del textarea a la cadena
    }

}
window.onload = function (){

    let select = document.getElementById("imageSelect");
    let checkBoxs = document.getElementsByName("imageOption");
    let imagenContainer = document.getElementById("imageContainer");
    let options = select.options;

    select.onchange = function (){ //Cada vez que se cambie de opción se realiza una función
        for(let i = 0; i < options.length; i++){
            if (options[i].selected){ //Dependiendo de que opción se seleccione se creará una imagen cuya ruta será el valor de la opción seleccionada

                let img = document.createElement("img");
                img.setAttribute("src", options[i].value);
                imagenContainer.innerHTML = "" //Se vacía el contenedor para que la imagen se sobreescriba cada vez que se cambia de opción
                imagenContainer.appendChild(img)

                for (let j = 0; j < checkBoxs.length; j++){ //Se recorren todos los checkboxs y en el caso de que el valor de uno coincida con el valor de la opción seleccionada se marca
                    if (checkBoxs[j].value == options[i].value){
                        checkBoxs[j].checked = true;
                    }else{ //En caso contrario se desmarca, es decir, cuando la opción vacia se seleccione
                        checkBoxs[j].checked = false;
                    }
                }
            }
        }
    }

for (let i = 0; i < checkBoxs.length; i++){ //Se recorren todos los checkbox para poder comprobar cual se marca
    checkBoxs[i].onclick = function (){//Se realiza una función cada vez que se seleccione un checkbox
        for(let j = 0; j < checkBoxs.length; j++){
            if (checkBoxs[i].checked){ //Dependiendo de que checkbox se seleccione se creará una imagen cuya ruta será el valor del checkbox marcado
    
                let img = document.createElement("img");
                img.setAttribute("src", checkBoxs[i].value);
                imagenContainer.innerHTML = ""
                imagenContainer.appendChild(img)

                for (let z = 0; z < options.length; z++){ //Se recorren todass lass opciones y en el caso de que el valor de uno coincida con el valor del checkox seleccionado se marca
                    if (checkBoxs[i].value == options[z].value){
                        options[z].selected = true;
                    }
                }
            }
        }
    }
}


}
window.onload = function (){
    
    let form = document.forms["form2"];
    let textArea = form.elements["mainTextarea"];
    let boton = form.elements["splitTextarea"];
    let div = document.getElementById("inputContainer");

    boton.onclick = function (){ //Cada vez que se pulse el botón se realiza una función
        let inputs = document.getElementsByTagName("input"); //Se accede a todos los inputs del formulario
        let cadena = textArea.value; //Se mete en una variable lo que se escriba en el textarea
        if (textArea.value != "" && inputs.length == 0){ //En el caso de que el textarea esté vacio y no haya ningún input se crean tres nuevos inputs de tipo texto
            for (let i = 0; i < 3; i++){
                let inputText = document.createElement("input");
                div.appendChild(inputText) //Se crean dentro del div especificado
            }
            var division = cadena.length/3; //Se crea una variable en la que se guarda el resultado de dividir la longitud del valor del textarea entre 3
            division = Math.round(division) //Se redondea al entero más próximo
            let primerInput = cadena.slice(0, division); //Se guarda una subcadena que vaya desde el principip de la cadena hasta la primera parte de la división
            let segundoInput = cadena.slice(division, division*2) //Se guarda una subcadena que vaya desde la primera parte de la división hasta la tercera
            let tercerInput = cadena.slice(division*2, cadena.length) //Se guarda lo que queda de la división 
            //Se establecen las subcadenas como valor de cada input
            inputs[0].value = primerInput;
            inputs[1].value = segundoInput;
            inputs[2].value = tercerInput;       
            textArea.value = ""; //Se borra el contenido del textarea
        }
        if (inputs.length == 3){ //En el caso de que ya haya tres inputs (es decir que ya se le haya dado al botón anteriormente) se realiza la misma división y se modifican los valores de los input
            var division = cadena.length/3;
            let primerInput = cadena.slice(0, division);
            let segundoInput = cadena.slice(division, division*2)
            let tercerInput = cadena.slice(division*2, cadena.length)
            
            inputs[0].value = primerInput;
            inputs[1].value = segundoInput;
            inputs[2].value = tercerInput;       
            textArea.value = "";        
        }
    }
}
window.onload = function (){
    //Acceso con índice
    /**
        let primerFormulario = document.forms[0];
        let segundoFormulario = document.forms[1];
     */

    //Acceso con nombre
    /**
        let primerFormulario = document.forms['form1'];
        let segundoFormulario = document.forms['form2'];
     */

    //Acceso on id
    let primerFormulario = document.forms['cuenta1'];
    let segundoFormulario = document.forms['cuenta2'];
    console.log(primerFormulario.method);

    //Manejador de eventos
    document.getElementById("boton").onclick = function (){
        primerFormulario.submit();
    }

    document.getElementById("botonBorrar").onclick = function (){
        primerFormulario.reset();
    }

    //Acceso a los elementos de un formulario
    let miform = document.forms['cuenta1'];
    let usermane = miform.elements['username'];
    let password = miform.elements['password'];
    console.log(usermane);

    let campo1 = usermane.value;
    let campo2 = password.value;
    console.log(campo1)

    //Ejercicio
    document.getElementById("btnCopiar").onclick = function (){
        //Copiar el contenido del primer input en el segundo
        let form = document.forms[2];
        let nombre = form.elements['nombre'].value;
        form.elements['copia'].value = nombre;
    }

    //Checkbox
    let casilla = document.getElementById("casilla");

    casilla.onclick = function (){
        console.log(casilla.checked);
        console.log(casilla.value);
    }

    let listaLenguajes = document.querySelectorAll('input[name=language]:checked');
    for (let i = 0; i<listaLenguajes.length; i++){
        console.log(listaLenguajes[i].value);
    }

    document.getElementById("btn").onclick = function (){
        let cadena;
        let listaLenguajes2 = document.querySelectorAll('input[name=language]');
        for (let i = 0; i<listaLenguajes2.length; i++){
            if(listaLenguajes2[i].checked){
                cadena = cadena + " " + listaLenguajes2[i].value;
            }
        }
        console.log(cadena)
    }

    document.getElementById("marcar").onclick = function (){
        let texto = this.textContent;
        let elementos = document.querySelectorAll("input[name=language]");
        if(texto == "Marcar"){
            for (let i = 0; i<elementos.length; i++){
                elementos[i].checked = true;
            }
            this.textContent = "Desmarcar";
        }else{
            for (let i = 0; i<elementos.length; i++){
                elementos[i].checked=false;
            }
            this.textContent = "Marcar";
        }

    }

    let listaElementos = document.querySelectorAll("input[name=language]");
    for (let i = 0; i < listaElementos.length; i++){
        listaElementos[i].onclick = function (){
            let cuentaMarcada = 0;
            for(let j = 0; j < listaElementos.length; j++){
                if (listaElementos[i].checked){
                    cuentaMarcada++;
                }
            }
            if(cuentaMarcada==listaElementos.length){
                //Todos marcados
                document.getElementById("marcar").textContent = "Desmarcar";
            }else{
                //Alguno está desmarcado
                document.getElementById("marcar").textContent = "Marcar";
            }
        }

    }

    let textarea = document.getElementById("textarea");
    document.getElementById("textarea").oninput = function (){
        let cont = textarea.value.length;
        let p = document.getElementById("contador");
        p.textContent = "Caracteres: " + cont ;
    }

    document.getElementById("mostrar").onclick = function (){
        let select = document.getElementById("aficiones");
        console.log(select.value);
        console.log(select.selectedIndex);
        console.log(select.multiple);
        let cadena = [];
        let listaOpciones = select.options;
        for (let i = 0; i < listaOpciones.length; i++){
            if(listaOpciones[i].selected){
                cadena.push (listaOpciones[i].text);
            }
        }
        console.log(cadena.join(", "))
    }

    let select = document.getElementById("aficiones");
    let listaOpciones = select.options;
    console.log(listaOpciones);
    console.log(listaOpciones[0].text);
    console.log(listaOpciones[0].value);
    console.log(listaOpciones[0].selected); 

    let indice;
    for (let i = 0; i < listaOpciones.length; i++){
        if(listaOpciones[i].value == "musica"){
            indice = listaOpciones[i].index;
        }
    }

    console.log(indice)

    document.getElementById("boton2").onclick = function (){
        //Recorrer todos los radio button para comprobar cual etá seleccionado
        let radios = document.getElementsByName("color");
        let cadena = "Selección: ";
        for (let i = 0; i<radios.length; i++){
            if (radios[i].checked){
                cadena += radios[i].value;
            }
        }
        console.log(cadena);
    }

    
    

}
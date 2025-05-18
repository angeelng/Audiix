window.onload = function () {
    //Paso 1: Crear el nodo <p> 
    let p = document.createElement('p');

    //Paso 2: Añadir atributos align=center
    p.setAttribute('align', 'center');

    //Paso 3: Crear el nodo de texto
    let texto = document.createTextNode ('Este párrafo no estaba antes');

    //Paso 4: Añadir el nodo texto al párrafo p
    p.appendChild(texto);
    
    let capa = document.getElementById("capa");
    capa.appendChild(p);
    //document.body.appendChild(p);

    var cont = 0
    function anadirElementos (){
        cont++
        let li = document.createElement('li');
        let texto = document.createTextNode('Nueva tarea ' + cont)
        li.appendChild  (texto)
        let lista = document.getElementById("lista")
        lista.appendChild(li)
    }

    function anadirFila(){
        cont++
        let tr = document.createElement('tr');
        let dato1 = document.createElement('td');
        let texto1 = document.createTextNode('Producto ' + cont)
        dato1.appendChild(texto1);
        let dato2 = document.createElement("td");
        let precio = (1 + (Math.random() * 100)).toFixed(2);
        let texto2 = document.createTextNode(precio + "€");
        dato2.appendChild(texto2);

        tr.appendChild(dato1);
        tr.appendChild(dato2);

        let tabla = document.getElementById("tabla");
        tabla.appendChild(tr)
    }
    let campo = 0
    function anadirCampo (){
        campo++
        let texto = document.createTe
        xtNode("Campo Adicional " + campo);
        let input = document.createElement("input");
        let inputEnviar = document.getElementById("enviar");
        let formulario = document.getElementById("formulario");
        formulario.insertBefore(texto, inputEnviar);
        input.setAttribute("type", "text")
        input.setAttribute("id", "input"+campo)
        input.setAttribute("name", "name"+campo)
        formulario.insertBefore(input, inputEnviar);
        let salto = document.createElement("br")
        formulario.insertBefore(salto, inputEnviar);

    }

    function reemplazarElemento(){
        //Generar un nuevo elemento
        let li = document.createElement("li");
        let texto = document.createTextNode("Tarea sustituta");
        li.appendChild(texto);
        let lista = document.querySelectorAll("ul li");
        let ultimo = lista[lista.length-1];
        let padre = ultimo.parentNode;
        padre.replaceChild(li, ultimo);
    }

    //Seleccionar primer párrafo
    let div = document.getElementById("container");

    //Primer hijo 
    let primerHijo = div.firstElementChild;
    let primerParrafo = primerHijo.nextElementSibling;
    console.log(primerParrafo.textContent);

    //Segundo párrafo
    let segundoParrafo = primerParrafo.nextElementSibling;
    console.log(segundoParrafo.textContent)

    //último párrafo
    let ultimoParrafo = div.lastElementChild;
    console.log(ultimoParrafo.textContent)

    //Desde el último al segundo 
    let otroSegundo = ultimoParrafo.previousElementSibling;
    console.log(otroSegundo.textContent);

    //Número hijos del div
    let listaHijos = div.childNodes;
    console.log("Número de hijos " + listaHijos.length);

    window.reemplazarElemento=reemplazarElemento;
    window.anadirElementos=anadirElementos;
    window.anadirFila=anadirFila;
    window.anadirCampo=anadirCampo;
}
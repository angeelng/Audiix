window.onload = function (){

    //Ejercicio 14
    let id;

    function desplazarImagenDerecha(){
        let img = document.getElementById("imagen12");
        let mover = parseInt(img.style.left) + 5; 
        img.style.left = mover + "px";
    }

    document.desplazarImagenDerecha = desplazarImagenDerecha;

    function overImagen(){
        id = setInterval(desplazarImagenDerecha,100);
    }
    document.overImagen = overImagen;

    function outImagen(){
        clearInterval(id);
    }

    document.outImagen = outImagen;

    //Ejercicio 15
    let id_uno;
    let id_dos;

    function avanzarDescarga(id_barra, btn){
        let barra = document.getElementById(id_barra);
        let valor = isNaN(barra.value)?1:parseInt(barra.value)+5;
        console.log(barra.max);
        if(valor>barra.max){
            if(id_barra == "descarga"){
                clearInterval(id_uno);
                btn.textContent = "Descargado!!!";
            }
            else{
                clearInterval(id_dos);
                btn.textContent = "Cargado!!!";
            }
        }
        barra.value = valor;

    }

    document.avanzarDescarga = avanzarDescarga;

    function descargar(btn){
        id_uno = setInterval(avanzarDescarga,100,"descarga",btn);
        btn.disabled = true;
        btn.textContent = "descargando";
    }

    document.descargar = descargar;

    function cargar(btn){
        id_dos = setInterval(avanzarDescarga,100,"descarga2",btn);
        btn.disabled = true;
        btn.textContent = "cargando";

    }

    document.cargar = cargar;


    //Ejercicio 16

    let corre = [];

    function avanzar(elemento){
        let posicion = parseInt(elemento.style.left);
        posicion += ( parseInt(Math.random()*(10)));        
        elemento.style.left = posicion+"px";

        if(parseInt(elemento.style.left)>1000){
            corre.forEach(element => {
                clearInterval(element);
            });

            console.log("HA GANADO "+ elemento.style.backgroundColor);
        }
        
    }   

    document.avanzar = avanzar;

    
    function correr(btn){
        let corredores = document.getElementsByClassName("corredor");
        
        for(let i=0;i<corredores.length;i++){
            corre[i] = setInterval(avanzar, 5, corredores[i]);   
        };

        btn.disabled = true;

    }

    document.correr = correr;

    function reset(btn){
        let corredores = document.getElementsByClassName("corredor");

        for(let i=0;i<corredores.length;i++){
            
            corredores[i].style.left = "0px";
            
        };
        document.getElementById(btn).disabled = false;

    }

    document.reset=reset;

    //Ejercicio 17
    let id_tres;

    function minando(btn){

        let barra = document.getElementById("ej17");


        barra.value = parseInt(barra.value)+5;

        if(barra.value>=barra.max){

            clearInterval(id_tres);

            btn.disabled = false;
            btn.textContent = "Volver a buscar";

            let div = document.getElementById("monedas");
            div.textContent = parseInt(div.textContent) + 1;
        }

    }

    document.minando=minando;

    function ej17(btn){
        
        btn.disabled = true;
        let barra = document.getElementById("ej17");

        if(barra.value == barra.max){
            barra.value=0;
        }
        
        id_tres = setInterval(minando, 100,btn);
        btn.textContent = "Buscando moneda...";


    }

    document.ej17=ej17;


    //Ejercicio 18
    function expandir(clase){
        
        let todo = document.getElementsByClassName("b");
        let bloque = document.getElementsByClassName(clase);
        let j=0;

        for(i=0;i<todo.length;i++){

            if(todo[i]==bloque[j]){
                style = window.getComputedStyle(bloque[j]);
                bloque[j].style.display =   style.getPropertyValue("display")=="none"?"block":"none";
                j++;
            }
            else{
                todo[i].style.display = "none";

            }
        }



    }

    document.expandir = expandir;






}
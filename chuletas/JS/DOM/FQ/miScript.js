window.onload = function (){

    //1
    function mostrarURL(){
        let url = document.getElementById("enlace1");
        alert(url.href +" -> "+ url.textContent);

    }

    window.mostrarURL = mostrarURL;

    function cambiarURL(){
        let url = document.getElementById("enlace1");
        url.href = "https://www.youtube.com/";
        url.textContent = "he cambiado el enlace";


    }

    window.cambiarURL = cambiarURL;

    //2
    function mostrarTama単o(){
        let tabla = document.getElementById("tabla1");

        alert(tabla.getAttribute("width") + " anchura, "+tabla.getAttribute("height")+ " altura.");

        let anchura = prompt("Dime una nueva anchura");
        let altura = prompt("Dime una nueva altura");

        tabla.setAttribute("width",anchura);
        tabla.setAttribute("height",altura);

        alert("Nuevo tama単o "+tabla.getAttribute("width") + " anchura, "+tabla.getAttribute("height")+ " altura.");

    }

    document.mostrarTama単o=mostrarTama単o;

    function muestraBorde(){
        let tabla = document.getElementById("tabla1");
        alert(tabla.getAttribute("border"));

        let nuevoBorde = prompt("Dime el nuevo borde");
        tabla.setAttribute("border",nuevoBorde);

        alert(tabla.getAttribute("border"));
    
    }

    document.muestraBorde = muestraBorde;

    function cambiarAlineacion(){
        let tabla = document.getElementById("tabla1");

        let aux;
        
        if(tabla.getAttribute("align")=="center"){
            aux="right";
        }
        else if(tabla.getAttribute("align")=="right"){ 
            aux="left";
        }
        else{ 
            aux="center";
        }

        tabla.setAttribute("align",aux);
    }

    document.cambiarAlineacion=cambiarAlineacion;

    //3
    function sumar(){

        let num = document.getElementById("ej3");
        num.textContent = parseInt(num.textContent)+1; 
    }

    document.sumar = sumar;

    function restar(){
        let num = document.getElementById("ej3");
        num.textContent = parseInt(num.textContent)-1; 
    }

    window.restar=restar;

    //4
    let imagenes = ["fotoGym.jpeg","mancuernas.png","pelotaBaloncesto.png","pelotaFutbol.png","raquetas.png"];
    let posicion = 0;

    function siguiente(){
        let img = document.getElementById("imagenes");

        posicion++;
        img.setAttribute("src",imagenes[posicion]);
        if(posicion==imagenes.length-1){

            let b = document.getElementById("boton_siguiente");
            b.setAttribute("disabled","true");

        }
        if(posicion>0){
            let b = document.getElementById("boton_atras");
            b.removeAttribute("disabled");
        }
        

    }

    document.siguiente=siguiente;


    function atras(){
        let img = document.getElementById("imagenes");

        posicion--;
        img.setAttribute("src",imagenes[posicion]);
        if(posicion==0){

            let b = document.getElementById("boton_atras");
            b.setAttribute("disabled","true");

        }
        if(posicion>0){
            let b = document.getElementById("boton_siguiente");
            b.removeAttribute("disabled");
        }
    }

    document.atras = atras;

    //5
    function cambiar_p(){
        let p1 = document.getElementById("p1");
        
        p1.setAttribute("class",p1.getAttribute("class")=="uno"?"dos":"uno"); 
    }

    document.cambiar_p=cambiar_p;

    //REDACCION 2
    //6
    function cambiarFondo(color){

        document.body.style.backgroundColor=color.value;

    }

    document.cambiarFondo=cambiarFondo;

    let colores = ["white","black","red","yellow"];

    function cambiarCelda(celda){

        /*
        let posicion = 0;
        for(let i = 0; i<colores.length;i++){

            if(celda.style.backgroundColor == colores[i]){
                posicion=i;
                i=colores.length;
            }
        }

        posicion = posicion==colores.length-1?0:posicion+1;

        celda.style.backgroundColor = colores[posicion];
        */
       
        //celda.style.backgroundColor= celda.style.backgroundColor=="black"?"white":"black";

    }
    document.cambiarCelda=cambiarCelda;

    function cambiarImagen(img){

        img.src="mancuernas.png";

    }

    document.cambiarImagen=cambiarImagen;


    function salirImagen(img){
        img.src="fotoGym.jpeg";

    }

    document.salirImagen=salirImagen;
    
    function cambiarEj9(a){
        
        a.style.backgroundColor = "black";
        a.style.color = "white";
        a.style.width = "200px";
        a.style.border = "solid 10px";

    }

    document.cambiarEj9 = cambiarEj9;


    function cambiarColor(color){
        document.body.style.backgroundColor=color;
    }

   document.cambiarColor=cambiarColor;

    function volverColor(color){
        document.body.style.backgroundColor=color;
    }

   document.volverColor=volverColor;

   function mostrarDiv(){
        let div = document.getElementById("oculto");
        div.style.visibility = "visible";
    }

   document.mostrarDiv=mostrarDiv;

    function mostrarDiv2(){
        let div = document.getElementById("oculto2");
        div.style.display = "block";
    }

    document.mostrarDiv2=mostrarDiv2;

    function resetear(){

    }

    document.resetear=resetear;

    function ver(img){
        let estilo = window.getComputedStyle(img);

        console.log(estilo.left);
        console.log(estilo.right);

        console.log("Max-widht ->" + estilo.getPropertyValue("max-width"));
    }

    document.ver=ver;

    function moverDerecha(id){
        let img = document.getElementById(id);
        let x = parseInt(img.style.left) + 5;
        
        if(1080>=x){
            img.style.left=`${x}px`;
        }
    }

    document.moverDerecha=moverDerecha;

    function moverIzquierda(id){
        let img = document.getElementById(id);
        let x = parseInt(img.style.left) - 5;
        
        if(x>=0){
            img.style.left=`${x}px`;
        }
    }

    document.moverIzquierda=moverIzquierda;

    function resetear(id){
        let img = document.getElementById(id);
        
        img.style.left=`0px`;
    }

    document.resetear=resetear;

    function mostrarSpoiler(boton,id){
        let parrafo = document.getElementById(id);
        parrafo.style.visibility = boton.textContent=="Mostrar"?"visible":"hidden";
        boton.textContent = parrafo.style.visibility=="visible"?"Ocultar":"Mostrar";
    }

    document.mostrarSpoiler=mostrarSpoiler;






}
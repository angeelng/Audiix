window.onload = function (){
    
    let form1 = document.forms["form1"];
    form1.elements["textoform1"].oninput = function (){
        form1.elements["readonlyform1"].value = form1.elements["textoform1"].value;
    }

    let form2 = document.forms["form2"];
    let checks = form2.elements["aficiones"];

    for (let j = 0; j < checks.length; j++){
        checks[j].onclick = function (){
            let cadena = "";
            for (let i = 0; i < checks.length; i++){
                if (checks[i].checked){
                    cadena += checks[i].value;
                }
            }
            textarea.value = cadena;
        }
    }


    let form3 = document.forms["form3"];
    let convertir = form3.elements["convertir"];
    let resultado = form3.elements["resultado"];
    let select = form3.elements["opciones"];
    let listaOpciones = select.options;
    form3.elements["btn"].onclick = function (){
        let conversion;
        for (let i = 0; i < listaOpciones.length; i++){
            if (listaOpciones[0].selected){
                 conversion = parseFloat(convertir.value) * 1.04; 
               
            }else if(listaOpciones[1].selected){
                conversion = parseFloat(convertir.value) * 0.97; 
            }
        }
        resultado.value = conversion;
    }

    let opciones = document.getElementsByName("pais");
  for (let i = 0; i < opciones.length; i++) {
    opciones[i].onclick = function () {
      if (this.checked) {
        let option = document.createElement("option");
        option.setAttribute("value", this.value);
        option.appendChild(document.createTextNode(this.value));
        document.getElementById("seleccion").appendChild(option);
      }
    };
  }

  let textarea = document.getElementsByName("ta");
  let divi = document.getElementById("divi");
  document.getElementById("publicar").onclick = function () {
    let div = document.createElement("div");
    divi.appendChild(div);
    let contenido = textarea[0].value;
    let cadena = "";

    for (let i = 0; i < 100; i++) {
      cadena += contenido[i];
    }

    div.textContent = cadena;
  };

  textarea[0].oninput = function () {
    let cadena = "";
    let contenido = textarea[0].value;
    let contador = document.getElementById("cont");

    for (let i = 0; i < 99; i++) {
      cadena += contenido[i];
    }

    if (contenido.length > 99) {
      textarea[0].value = cadena;
    }
3
    contador.textContent = "Contador: " + contenido.length;
  };

  let formulario = document.forms["selecciones"];
  let radios = formulario.elements["radio"]; // Con esto cogemos el nombre o el tipo o lo que tu quieras
  let div = document.getElementById("colorFondo");
  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
      let color = this.value;
      div.style.backgroundColor = color;
    };
  }
  let formulario5 = document.forms["form5"];
  let checks2 = formulario5.elements["checks"];
  let opciones2 = checks2.options;

  for (let i = 0; i < opciones2.length; i++) {
    opciones2[i].onchange = function (){
        if (opciones2[i].selected) {
            let color = opciones2[i].value;
            div.style.backgroundColor = color;
          }
    }

  }// No funciona primo

   //*! Ejercicio 7
   let testo = document.getElementById("tipoTesto");
   let error = false;
   let numeroDNI = 0;
 
   function calcularLetraDNI(numeroDNI) {
     const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
     return letras[numeroDNI % 23]; // Fórmula oficial
   }
 
   testo.onblur = function () {
     let valor = testo.value;
     if (valor.length !== 9) {
       error = true;
     }
 
     if (!error) {
       for (let i = 0; i < valor.length - 1; i++) {
         if (isNaN(valor[i])) {
           error = true;
           console.log("true");
         }
 
         if (!error) {
           console.log("false");
           numeroDNI = parseInt(valor.slice(0, 8));
         }
       }
 
       let letra = valor[8]; // Último carácter
 
       numeroDNI = parseInt(numeroDNI); // Convertir a número
       let letraCorrecta = calcularLetraDNI(numeroDNI); // Calcular la letra correcta
 
       // Comprobar si la letra es correcta
       if (letra === letraCorrecta) {
         alert("✅ DNI válido: " + valor);
       } else {
         alert(
           "❌ Letra incorrecta. La correcta para " +
             numeroDNI +
             " es '" +
             letraCorrecta +
             "'."
         );
       }
     }
   };
 
   //*! Ejercicio 8
 
   /*let envia = document.getElementById("envia");
 
   envia.onclick = function () {
     let selectP = document.getElementById("selectP");
     let selectM = document.getElementById("selectM");
     for (let i = 0; i < selectP.options.length; i++) {
       if (selectP.options[1].selected) {
         selectM.options[0].textContent = "HD 3000";
         selectM.options[1].textContent = "HD 4000";
         selectM.options[2].textContent = "IRIS 600";
       } else if (selectP.options[2].selected) {
         selectM.options[0].textContent = "RX Series 500";
         selectM.options[1].textContent = "Vega Series";
         selectM.options[2].textContent = "RX Series 6000";
       } else if (selectP.options[3].selected){
         selectM.options[0].textContent = "GTX Serie 1000";
         selectM.options[1].textContent = "GTX Serie 2000";
         selectM.options[2].textContent = "GTX Serie 3000";
       }
     }*/
 
   let envia = document.getElementById("envia");
 
 envia.onclick = function () {
     let selectP = document.getElementById("selectP");
     let selectM = document.getElementById("selectM");
 
     // Obtener el valor seleccionado en selectP
     let selectedValue = selectP.value;
 
     // Limpiar opciones de selectM antes de agregar nuevas
     selectM.innerHTML = "";
 
     let opciones = [];
 
     switch (selectedValue) {
         case "intel":
             opciones = ["HD 3000", "HD 4000", "IRIS 600"];
             break;
         case "amd":
             opciones = ["RX Series 500", "Vega Series", "RX Series 6000"];
             break;
         case "nvidia":
             opciones = ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"];
             break;
         default:
             opciones = ["Selecciona un fabricante primero"];
     }
 
     // Agregar nuevas opciones al selectM
     opciones.forEach(texto => {
         let option = document.createElement("option");
         option.textContent = texto;
         selectM.appendChild(option);
     });
 };
    

}   
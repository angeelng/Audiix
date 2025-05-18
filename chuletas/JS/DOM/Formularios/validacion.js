window.onload = function (){
    let form = document.getElementById("miFormulario");
    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password");

    form.onsubmit = function (){
        if (usuario.value.length < 6){
            alert("introduce un usuario correcto");
            return false;
        }else if (password.value.length < 8) {
            alert("Introduce una contraseña correcta");
            return false;
        }else {
            return true;
        }
    }

    let form2 = document.getElementById("miFormulario2");
    form2.onsubmit = function (){
        let checkbox = document.querySelectorAll("input[name='opcion']:checked");
        if (checkbox.length == 0){
            //No hay elemento seleccionado
            alert("debes seleccionar una opción");
            return false;
        }else{
            return true;
        }
    }

    //Expresiones regulares
    let regex1 = /w(1:6)/;
    let res = regex1.test("3");
    console.log(res);

    let formDni = document.getElementById("dni");
    formDni.onsubmit = function (){
        let regex = /^\d{8}[A-Z]$/;
        let regex1 = /^[0-9]{8}[A-Z]$/;
        let dni = document.getElementById("dni").value;
        if (regex1.test(dni)){
            return true;
        }else{
            alert("Formato de dni incorrecto");
            return false;
        }
    }
}
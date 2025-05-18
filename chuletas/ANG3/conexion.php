<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
    $_servidor = "localhost";
    $_usuario = "root";
    $_contrasenia = "";
    $_db = "tienda_bd";

    $_conexion = new mysqli($_servidor, $_usuario, $_contrasenia, $_db);

    if ($_conexion -> connect_error){
        die("Error de conexión: " . $_conexion -> connect_error);
    }
    
?>
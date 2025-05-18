<?php
    //Config pa la conexión con la bd
    $_host = "localhost";
    $_bd = "videojuegos_bd";
    $_usuario = "root";
    $_contrasenia = "";

    //Crear la conexión usando PDO(PHP DATA OBJECT)
    try{
        //Creamos objeto PDO poque este influye info para interactuar con la bbdd y realizar consultas, inserciones...
        $_conexion = new PDO("mysql:host=$_host;dbname=$_bd;charset=utf8", $_usuario, $_contrasenia);
        $_conexion -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        die("ERROR: No se puede conectar a la BBDD -> " . $e->getMessage());
    }

?>  
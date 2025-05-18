<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
    $_host = "localhost";
    $_usuario = "root";
    $_contrasenia = "";
    $_db = "audiix";

    //$_conexion = new mysqli($_servidor, $_usuario, $_contrasenia, $_db);
    //Crear la conexión usando PDO(PHP DATA OBJECT)
    try{
        //Creamos objeto PDO poque este influye info para interactuar con la bbdd y realizar consultas, inserciones...
        $_conexion = new PDO("mysql:host=$_host;dbname=$_db;charset=utf8", $_usuario, $_contrasenia);
        $_conexion -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        die("ERROR: No se puede conectar a la BBDD -> " . $e->getMessage());
    }
    
?>
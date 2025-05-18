<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    
</body>
</html>

<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
    $_servidor = "localhost";
    $_usuario = "adminVideojuegos";
    $_contrasenia = "admin";
    $_db = "videojuegos_bd";

    $_conexion = new mysqli($_servidor, $_usuario, $_contrasenia, $_db);
    $_tablita = $_conexion -> query("SELECT * FROM videojuegos");
    if ($_conexion -> connect_error){
        die("Error de conexión: " . $_conexion -> connect_error);
    }
    echo "<table  border=1>";
     echo "<thead class=thead-dark>";
    if ($_tablita -> num_rows > 0){
        while($fila = $_tablita->fetch_assoc()){ 
           $resena = match (true) {
            $fila["porcentaje_reseñas"] < 50  => "La reseña es negativa",
            $fila["porcentaje_reseñas"] < 70  => "La reseña es mediocre",
            $fila["porcentaje_reseñas"] < 90  => "La reseña es buena",
            //$fila["porcentaje_reseñas"] === null => "No hay suficientes reseñas",
            default => "Excelente"
         }; 

         if ( $fila["porcentaje_reseñas"] === null){
            $resena = "No hay suficientes reseña";
         }

        echo "<tr>";
        echo " <td scope=col> " . $fila["id_videojuego"] . "</td>";
        echo " <td scope=col> " . $fila["titulo"] . "</td>";
        echo " <td scope=col> " . $fila["nombre_desarrolladora"] . "</td>";
        echo " <td scope=col>  " . $fila["anno_lanzamiento"] . "</td>";
        echo " <td scope=col>  " . $resena. "</td>";
        echo "<tr>";

        }
        echo "</thead>";
        echo "</table>";
    }else{
        echo "No se han encontrado datos";
    }

?>
<?php

echo "Te has conectado a la preciosa base de datos  " . $_db . "<br>";
    
//¿Cómo recorrer?
//fetch_assoc: Se utiliza para obtener una fila de un conjunto de resultado como un array asociativo
//             cada columna de la fila se almacena en el array asociativo utilizando el nombre de la columna como clave
$_tablita = $_conexion -> query("SELECT * FROM videojuegos");
echo "<table border=1>";
if ($_tablita -> num_rows > 0){
    while($fila = $_tablita->fetch_assoc()){ 
        echo "<tr>";
        echo " <td> ID: " . $fila["id_videojuego"] . "</td>";
        echo " <td> Título: " . $fila["titulo"] . "</td>";
        echo " <td> Nombre desarrolladora: " . $fila["nombre_desarrolladora"] . "</td>";
        echo " <td> Año de lanzamiento: " . $fila["anno_lanzamiento"] . "</td>";
        echo " <td> Porcentaje reseñas: " . $fila["porcentaje_reseñas"] . "</td>";
        if($fila["horas_duracion"] < 0){
            echo " <td> Juego como servicio </td>";
        }else{
            echo " <td>Horas de duración: " . $fila["horas_duracion"] . " </td>";
        }
       echo "</tr>";
       
    }
    echo "</table>";
}else{
    echo "No se han encontrado datos";
}



$_conexion -> close();
?>
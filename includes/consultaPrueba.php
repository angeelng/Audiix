<?php
require("conexion.php");
    $consulta = "INSERT INTO canciones(
           titulo,
           artista,
           genero,
           archivo,
           caratula     
    ) VALUES 
    (   
        :t,
        :a,
        :g,
        :ar,
        :c
    )";

    $stmt = $_conexion->prepare($consulta);
    $stmt->execute([
        ":t" => "Hellcat",
        ":a" => "IzaaK",
        ":g" => "Trap",
        ":ar" => "iZaak - HELLCAT (Official Visualizer).mp3",
        ":c" => "hellcat.png"
    ]);
?>







$consulta = "INSERT INTO videojuegos (
        titulo,
        nombre_desarrolladora,
        anno_lanzamiento,
        porcentaje_reseñas,
        horas_duracion
        ) VALUES 
        ( :t,
          :n,
          :a,
          :p,
          :h
          )";

        $stmt = $_conexion->prepare($consulta);
        $stmt->execute([
            "t" => $entrada["titulo"],
            "n" => $entrada["nombre_desarrolladora"],
            "a" => $entrada["anno_lanzamiento"],
            "p" => $entrada["porcentaje_resenna"],
            "h" => $entrada["horas_duracion"],
        ]);
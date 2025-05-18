<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Content-Type: application/json");
require "conexion_pdo.php";

$metodo = $_SERVER["REQUEST_METHOD"];
$entrada = file_get_contents("php://input");
$entrada = json_decode($entrada, true);
$metodo = match($metodo){
    "GET" => controlGet($_conexion),
    "POST" =>  controlPost($_conexion, $entrada),
    "DELETE" => controlDelete($_conexion, $entrada),
    "PUT" => controlPut($_conexion, $entrada)
};
   

function controlGet($_conexion)
{

    if (isset($_GET["titulo"]) && $_GET["titulo"] != "") {
        $consulta = "SELECT * FROM  videojuegos where titulo = :t";
        $stmt = $_conexion->prepare($consulta);
        $stmt->execute(["t" => $_GET["titulo"]]);
    } else {
        $consulta = "SELECT id_videojuego FROM videojuegos";
        $stmt = $_conexion->prepare($consulta);
        $stmt->execute();
    }
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($res);
}

function controlPost($_conexion, $entrada)
{
    if (isset($entrada["titulo"]) && isset($entrada["nombre_desarrolladora"]) && isset($entrada["anno_lanzamiento"]) && isset($entrada["porcentaje_resenna"]) && isset($entrada["horas_duracion"])) {

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
        if ($stmt) {
            echo json_encode(["mensaje" => "Se ha insertado correctamente la fila"]);
        } else {
            echo json_encode(["mensaje" => "Liada criminal (angel guapo)"]);
        }
    } else{
       echo json_encode(["mensaje" => "error"]);
   }
}

function controlDelete($_conexion, $entrada){
    if ($entrada["titulo_borrar"] == "ADMIN"){
        $consulta = "DELETE FROM videojuegos";
        $stmt = $_conexion->prepare($consulta);
        $stmt->execute();
        if ($stmt) {
            echo json_encode(["mensaje" => "Se ha borrado correctamente toda la tabla"]);
        } else {
            echo json_encode(["mensaje" => "Liada criminal (angel guapo)"]);
        }
    }elseif($entrada["titulo_borrar"] == ""){
        echo json_encode(["mensaje" => "error"]);
    }else{
        $consulta = "DELETE FROM videojuegos WHERE titulo = :t";
        $stmt = $_conexion->prepare($consulta);
        $stmt->execute([
            "t" => $entrada["titulo_borrar"]
        ]);
        if ($stmt) {
            echo json_encode(["mensaje" => "Se ha borrado correctamente la fila indicada"]);
        } else {
            echo json_encode(["mensaje" => "Liada criminal (angel guapo)"]);
        }
    }
}

function controlPut($_conexion, $entrada){
    if (empty($entrada["titulo"])){
        echo json_encode(["mensaje" => "Debes introducir la foreign key"]);
    }else{
        $consulta1 = "SELECT * FROM videojuegos WHERE titulo = :t";
        $stmt = $_conexion->prepare($consulta1);
        $stmt -> execute([
            "t" => $entrada["titulo"]
        ]);
        $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach($res as $fila){
            $desarrolladoraOriginal = $fila["nombre_desarrolladora"];
            $annoOriginal = $fila["anno_lanzamiento"];
            $resennaOriginal = $fila["porcentaje_reseñas"];
            $horaOriginal = $fila["horas_duracion"];   
        }
        echo $desarrolladoraOriginal;
        $consulta2 = "UPDATE videojuegos SET nombre_desarrolladora = :n, anno_lanzamiento = :a, porcentaje_reseñas = :p, horas_duracion = :h WHERE titulo = :t";
        
        if (empty($entrada["porcentaje_resenna"])){
            $entrada["porcentaje_resenna"] = $resennaOriginal;
        }
         if (empty($entrada["nombre_desarrolladora"])){
            $entrada["nombre_desarrolladora"] = $desarrolladoraOriginal;
            echo "hoola";
        }
         if (empty($entrada["anno_lanzamiento"])){
            $entrada["anno_lanzamiento"] = $annoOriginal;
        }
         if (empty($entrada["horas_duracion"])){
            $entrada["horas_duracion"] = $horaOriginal;
        }
        $stmt = $_conexion->prepare($consulta2);
        $stmt->execute([
            "n" => $entrada["nombre_desarrolladora"],
            "a" => $entrada["anno_lanzamiento"],
            "p" => $entrada["porcentaje_resenna"],
            "h" => $entrada["horas_duracion"],
            "t" => $entrada["titulo"],
        ]);

        if ($stmt) {
            echo json_encode(["mensaje" => "Se ha actualizado correctamente la fila indicada"]);
        } else {
            echo json_encode(["mensaje" => "Liada criminal (angel guapo)"]);
        }

    }
}
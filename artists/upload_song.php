<!DOCTYPE html>
<html lang="en">
<?php
require("../includes/conexion.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $titulo = htmlspecialchars(trim($_POST["titulo"]));
    $genero = htmlspecialchars(trim($_POST["genero"]));

    //Subir portada
    $nombrePortada = $_FILES["portada"]["name"];
    $tmp_namePortada = $_FILES["portada"]["tmp_name"];
    move_uploaded_file($tmp_namePortada, "../images/caratulas/" . $nombrePortada);

    //Subir archivo de audio
    $nombreArchivo = $_FILES["archivo"]["name"];
    echo $nombreArchivo;
    $tmp_nameArchivo = $_FILES["archivo"]["tmp_name"];
    echo $tmp_nameArchivo;
    move_uploaded_file($tmp_nameArchivo, "../music/" . $nombreArchivo);

    $consulta = "INSERT INTO canciones (titulo, artista, genero, archivo, caratula) VALUES (:t, :a, :g, :ar, :c)";
    $stmt = $_conexion->prepare($consulta);
    $stmt->execute([
        ":t" => $titulo,
        ":a" => $_SESSION["nombre"],
        ":g" => $genero,
        ":ar" => $nombreArchivo,
        ":c" => $nombrePortada
    ]);
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/upload_song.css">
    <title>Subir canción Audiix</title>
</head>
<body>
    <div class="form">
    <form action="" method="POST" enctype="multipart/form-data" class="form-uploadSong">
             <h1>Sube tu música!</h1>   
    <input type="text" name="titulo" id="titulo" placeholder="Título">
        <select name="genero" id="">
            <option value="" selected disabled>Género</option>
            <option value="Rap">Rap</option>
            <option value="Rap">Trap</option>
            <option value="Reggaeton">Reggaeton</option>
            <option value="Acustico">Acústico</option>
            <option value="R&B">R&B</option>
        </select>
        <label for="portada">Portada:</label>
        <input type="file" name="portada" id="portada" accept="image/*">
        <label for="archivo">Archivo de audio:</label>
        <input type="file" name="archivo" id="archivo" accept="audio/*">
        <input type="submit" value="Subir canción" id="button">
    </form>
    </div>
</body>

</html>


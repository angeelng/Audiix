<?php
require("../includes/conexion.php");
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = htmlspecialchars(trim($_POST["correo"]));
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $password = htmlspecialchars(trim($_POST["password"]));
    $rol = htmlspecialchars(trim($_POST["rol"]));
    //Comprobación datos introducidos
    $errores  = [];
    if (empty($correo)) {
        $errores["correo"] = "Se debe introducir un correo obligatoriamente";
    }
    if (empty($nombre)) {
        $errores["nombre"] = "Debe introducir su nombre obligatoriamente";
    }
    if (empty($password)) {
        $errores["contrasena"] = "Debe introducir una contraseña obligatoriamente";
    } else {
        $password_cifrada = password_hash($password, PASSWORD_DEFAULT);
    }
    if (empty($rol)) {
        $errores["rol"] = "Introduzca el tipo de cuenta que quiere crear";
    }


    if (empty($errores)) {
        //Comprobar si el usuario ya tiene cuenta
        $consulta = "SELECT * FROM usuarios WHERE correo_electronico = :c";
        $stmt = $_conexion->prepare($consulta);
        $stmt->execute([":c" => $correo]);
        if ($stmt->rowCount() == 0) {
            $consulta = "INSERT INTO usuarios (rol, nombre, correo_electronico, contrasenia) VALUES (:r, :n, :c, :p);";
            $stmt = $_conexion->prepare($consulta);
            $stmt->execute([
                ":r" => $rol,
                ":n" => $nombre,
                ":c" => $correo,
                ":p" => $password_cifrada
            ]);
            session_start();
            header("location: ../index.php");
            $_SESSION["nombre"] = $nombre; 
        } else {
            $errores["correo"] = "Este correo electrónico ya está asociado a una cuenta";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/signup.css">
    <title>Registro Audiix</title>
</head>

<body>
    <div class="signUp">

        <form action="" method="post" class="form-signup">
            <h1>Bienvenido a Audiix</h1>
            <input type="text" name="correo" id="correo" placeholder="Correo electrónico">
            <span><?php echo $errores["correo"] ?? "" ?></span>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre">
            <span><?php echo $errores["nombre"] ?? ""  ?></span>
            <input type="password" name="password" id="password" placeholder="Contraseña">
            <span><?php echo $errores["contrasena"] ?? "" ?></span>
            <select name="rol" id="">
                <option value="" selected disabled>Tipo de cuenta</option>
                <option value="user">Oyente</option>
                <option value="artist">Artista</option>
            </select>
            <span><?php echo $errores["rol"] ?? "" ?></span>
            <input id="button" type="submit" value="Registrarse">
        </form>
    </div>
</body>

</html>
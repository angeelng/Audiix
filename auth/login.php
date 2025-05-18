<?php
    require("../includes/conexion.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $correo = htmlspecialchars(trim($_POST["correo"]));
        $password = htmlspecialchars(trim($_POST["password"]));
        $errores = [];
        $consulta = "SELECT * FROM usuarios WHERE correo_electronico = :c";
        $stmt = $_conexion->prepare($consulta);
        $stmt -> execute([":c" => $correo]); 
        $datos=$stmt->fetch();
        if($datos){
            if (password_verify($password, $datos["contrasenia"])){
                session_start();
                $_SESSION["nombre"] = $datos["nombre"];
                header("location: ../index.php");
                exit;
            }else{
                $errores["contrasena"] = "La contraseña no es correcta";
            }
        }else{
            $errores["correo"] = "Este correo electrónico no está asociado a ninguna cuenta";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/login.css">
    <title>Inicio de sesión Audiix</title>
</head>

<body>
    <!---
    <header>
        <img src="../images/logo_audiix.png" alt="">
    </header>
    --->
    <div class="signUp">
        <form action="" method="post" class="form-signup">
            <h1>Bienvenido de nuevo!</h1>
            <input type="text" name="correo" id="correo" placeholder="Correo electrónico">
            <span><?php echo $errores["correo"] ?? ""?></span>
            <input type="password" name="password" id="password" placeholder="Contraseña">
            <span><?php  echo $errores["contrasena"] ?? "" ?></span>
            <div class="signup-login">
            <input class="button" type="submit" value="Iniciar sesión">
            <button class="button registrarse"><a href="signup.php">Registrarse</a></button>
            </div>
        </form>
    </div>
</body>
</html>
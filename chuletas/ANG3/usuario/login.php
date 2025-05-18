<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio Sesión</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
        error_reporting(E_ALL);
        ini_set("display_errors",1);
        require "../conexion.php";

    ?>
</head>
<body>
    <?php
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            
            $usuario = $_POST["usuario"];
            $contrasena = $_POST["contrasena"];

            $consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
            $res = $_conexion -> query($consulta);

            if($res -> num_rows == 0){
                echo "<h2> El usuario no existe </h2>";
            }else{
                $info_usuario = $res -> fetch_assoc();
                $acceso_concedido = password_verify($contrasena, $info_usuario["contrasena"]);
                if(!$acceso_concedido){
                    echo "<h2>Contraseña incorrecta</h2>";
                }else{
                    echo "<h2>Has entrao</h2>";
                    session_start();
                    $_SESSION["usuario"] = $usuario;
                    header("location: ../index.php");
                }
            }
        }
    ?>

    <div class="container">
        <h1>Iniciar sesión</h1>
        <form action="" method="post" enctype="multipart/form-data">
            <div class="mb-3">
                <label class="form-label">Usuario</label>
                <input type="text" class="form-control" name="usuario">
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" class="form-control" name="contrasena">
            </div>
            <div class="mb-3">
                <input type="submit" value="Iniciar sesión" class="btn btn-primary">
            </div>
        </form>
        <h3>Si aún no estas registrado, pincha debajo</h3>
        <a href="signup.php" class="btn btn-secondary">Registrarse</a>
    </div>
</body>
</html>
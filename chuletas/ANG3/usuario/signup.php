<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
        error_reporting(E_ALL);
        ini_set("display_errors",1);
        require "../conexion.php";
    ?>
</head>
<body>
    <?php
        //echo $_conexion->server_info;
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            $usuario_temp = $_POST["usuario"];
            $contrasena_temp = $_POST["contrasena"];
            $administrador = $_POST["administrador"] ?? "";

            if (empty($usuario_temp)){
                $error_usuario = "El nombre de usuario debe ser introducido obligatoriamente";
            }else{
                $usuario = $usuario_temp;
            }

            if (empty($contrasena_temp)){
                $error_contrasena = "La contraseña debe ser introducida obligatoriamente";
            }else{
                $contrasena = $contrasena_temp;
            }
            
            if(empty($administrador)){
                $administrador = 1;
            }

            $contrasena_cifrada = password_hash($contrasena, PASSWORD_DEFAULT);

            $consulta = "INSERT INTO usuarios VALUES ('$usuario', '$contrasena_cifrada', '$administrador')";
            $_conexion -> query($consulta);
        }
    ?>

    <div class="container">
        <h1>Formulario de registro :D</h1>
        <form action="" method="post" enctype="multipart/form-data" class="col-4">
            <div class="mb-3">
                <label class="form-label">Usuario</label>
                <input type="text" name="usuario" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" name="contrasena" class="form-control">
            </div>
            ADMINISTRADOR <input type="checkbox" name="administrador">
            <div class="mb-3">
                <input type="submit" value="Registrarse" class="btn btn-primary">
            </div>
            <h3>Si ya tienes cuenta, inicia sesión</h3>
            <a href="login.php" class="btn btn-secondary">Iniciar sesión</a>
        </form>
    </div>
    
</body>
</html>
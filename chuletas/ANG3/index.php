<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú principal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
            error_reporting(E_ALL);
            ini_set("display_errors",1);
            require "conexion.php";
    session_start();
    if (!isset($_SESSION["usuario"])) {
        header("location: usuario/login.php");
        exit;
    }
    $usuario = $_SESSION["usuario"];
    $consulta = "SELECT * FROM usuarios where usuario = '$usuario'";
    $res = $_conexion -> query($consulta);
    $comprobacion_admin = $res -> fetch_assoc();

    ?>
</head>

<body>
    <div class="container text-center mt-5">
        <h1>Bienvenido, <?php echo $_SESSION["usuario"] ?></h1>
        <p class="mt-3">Elige una opción:</p>
        <div class="d-grid gap-3 col-6 mx-auto mt-4">
            <a href="productos.php" class="btn btn-primary btn-lg">Productos</a>
            <a href="proveedores.php" class="btn btn-secondary btn-lg">Proveedores</a>
            <?php if ($comprobacion_admin["admin"] == 0) echo "<a href='nuevo.php' class='btn btn-info btn-lg'>Nuevo</a>" ?>
            
            <a href="usuario/logout.php" class="btn btn-danger">CERRAR SESIÓN</a>
        </div>
    </div>
</body>

</html>
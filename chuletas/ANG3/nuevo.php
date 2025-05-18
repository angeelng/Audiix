<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear juego</title>
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
        $res = $_conexion->query($consulta);
        $comprobacion_admin = $res->fetch_assoc();
        if($comprobacion_admin == 1){
            header("location: usuario/login.php");
            exit;
        }
    ?>
    <style>
        .cagada { color: red; }
        .tabien { color: green; }
    </style>
</head>
<body>
    <?php
        $consulta = "SELECT * FROM productos";
        $resultado = $_conexion -> query($consulta);
        $proveedores = [];
        while($fila = $resultado -> fetch_assoc()){
            array_push($proveedores, $fila["nombre_proveedor"]);
        }

        $errores = false;

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            //Sanitizar y recoger
            $nombre_producto = htmlspecialchars(trim($_POST["nombre_producto"] ?? ""));
            $categoria_producto = htmlspecialchars(trim($_POST["categoria_producto"] )) ?? "";
            $precio = $_POST["precio"] ?? "";
            $stock = $_POST["stock"] ?? "";
            $nombre_proveedor = htmlspecialchars(trim( $_POST["nombre_proveedor"] ))?? "";

            //Validar
            if (filter_var($nombre_producto, FILTER_VALIDATE_FLOAT)) {
                $err_nombre = "<p class='cagada'>Debes introducir el nombre de un producto, no un número</p>";
                $errores = true;

            }elseif(empty($nombre_producto)){
                $err_nombre = "<p class='cagada'>Debes introducir el nombre de un producto/p>";
                $errores = true;                
            }

            if (filter_var($categoria_producto, FILTER_VALIDATE_FLOAT)) {
                $err_categoria = "<p class='cagada'>Debes introducir la categoría del producto, no un número</p>";
                $errores = true;

            }elseif(empty($categoria_producto)){
                $err_nombre = "<p class='cagada'>Debes introducir la categoría del producto/p>";
                $errores = true;                
            }

            if (!in_array($nombre_proveedor, $proveedores)) {
                $err_proveedor = "<p class='cagada'>Seleccione un proveedor válido.</p>";
                $errores = true;
            }elseif(empty($nombre_proveedor)){
                $err_proveedor = "<p class='cagada'>Debes introducir un proveedor/p>";
                $errores = true;                
            }

            if (!filter_var($precio, FILTER_VALIDATE_FLOAT)) {
                $err_precio = "<p class='cagada'>El precio debe ser un número</p>";
                $errores = true;
            }elseif(empty($precio)){
                $err_nombre = "<p class='cagada'>Debes introducir un precio/p>";
                $errores = true;                
            }

            if (!filter_var($stock, FILTER_VALIDATE_INT)) {
                $err_stock = "<p class='cagada'>El stock debe ser un número</p>";
                $errores = true;
            }elseif(empty($stock)){
                $err_stock = "<p class='cagada'>Debes introducir el stock del producto/p>";
                $errores = true;                
            }

            if (!$errores) {
                $consulta = "INSERT INTO productos (
                                        nombre_producto,
                                        categoria_producto,
                                        precio,
                                        stock,
                                        nombre_proveedor) VALUES 
                                        ('$nombre_producto',
                                        '$categoria_producto',
                                        $precio,
                                        $stock,
                                        '$nombre_proveedor')";
                
                if ($_conexion->query($consulta)) {
                    echo "<p class='tabien'>El producto se ha añadido correctamente.</p>";
                } else {
                    echo "<p class='cagada'>Error al insertar el producto: " . $_conexion->error . "</p>";
                }
            }
        }
    ?>
 <div class="container text-center mt-5">
    <form action="" method="post" enctype="multipart/form-data">
        <label for="nombre_producto" class="form-label">Título:</label>
        <input type="text" name="nombre_producto" value=""  class="form-control">
        <?= $err_nombre ?? "" ?>
        <br><br>

        <label for="categoria_producto" class="form-label">Categoría:</label>
        <input type="text" name="categoria_producto" value=""  class="form-control"> 
        <?= $err_categoria ?? "" ?>
        <br><br>

        <label for="precio" class="form-label">Precio:</label>
        <input type="text" name="precio" value="" class="form-control" >
        <?= $err_precio ?? "" ?>
        <br><br>

        <label for="stock" class="form-label">Stock:</label>
        <input type="text" name="stock" value=""  class="form-control">
        <?= $err_stock ?? "" ?>
        <br><br>
        
        <label for="nombre_proveedor" class="form-label">Proveedor:</label>
        <select name="nombre_proveedor" class="form-select">
            <option value="" selected disabled hidden>--ELIJA SU PROVEEDOR--</option>
            <?php foreach($proveedores as $proveedor){ ?>
                <option value="<?= $proveedor ?>">>
                    <?= $proveedor ?>
                </option>
            <?php } ?>
        </select>
        <?= $err_proveedor ?? "" ?>
        <br><br>

        <input type="submit" value="CREAR" class="btn btn-primary btn-lg">
        <a href="index.php" class="btn btn-warning">Volver</a>
    </form>
    </div>
</body>
</html>

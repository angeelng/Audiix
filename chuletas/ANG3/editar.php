<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
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
    if ($comprobacion_admin == 1) {
        header("location: usuario/login.php");
        exit;
    }
    ?>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $id_producto = $_POST["id_producto"];
        $nombre_producto = htmlspecialchars(trim($_POST["nombre_producto"] ?? ""));
        $categoria_producto = htmlspecialchars(trim($_POST["categoria_producto"])) ?? "";
        $precio = $_POST["precio"] ?? "";
        $stock = $_POST["stock"] ?? "";
        $nombre_proveedor = $_POST["nombre_proveedor"] ?? "";
        $errores= false;

        //Validar
        if (filter_var($nombre_producto, FILTER_VALIDATE_FLOAT)) {
            $err_nombre = "<p class='cagada'>Debes introducir el nombre de un producto, no un número</p>";
            $errores = true;
        } elseif (empty($nombre_producto)) {
            $err_nombre = "<p class='cagada'>Debes introducir el nombre de un producto/p>";
            $errores = true;
        }

        if (filter_var($categoria_producto, FILTER_VALIDATE_FLOAT)) {
            $err_categoria = "<p class='cagada'>Debes introducir la categoría del producto, no un número</p>";
            $errores = true;
        } elseif (empty($categoria_producto)) {
            $err_nombre = "<p class='cagada'>Debes introducir la categoría del producto/p>";
            $errores = true;
        }

        if (!filter_var($precio, FILTER_VALIDATE_FLOAT)) {
            $err_precio = "<p class='cagada'>El precio debe ser un número</p>";
            $errores = true;
        } elseif (empty($precio)) {
            $err_nombre = "<p class='cagada'>Debes introducir un precio/p>";
            $errores = true;
        }

        if (!filter_var($stock, FILTER_VALIDATE_INT)) {
            $err_stock = "<p class='cagada'>El stock debe ser un número</p>";
            $errores = true;
        } elseif (empty($stock)) {
            $err_stock = "<p class='cagada'>Debes introducir el stock del producto/p>";
            $errores = true;
        }

        
        if (!$errores) {
            $consulta = "UPDATE productos SET
                nombre_producto = '$nombre_producto',
                categoria_producto = '$categoria_producto',
                precio = $precio,
                stock = $stock,
                nombre_proveedor = '$nombre_proveedor'
                WHERE id_producto = $id_producto";
            $_conexion->query($consulta);
            

            if ($_conexion->query($consulta)) {
                echo "<p class='tabien'>El producto se ha editado correctamente.</p>";
            } else {
                echo "<p class='cagada'>Error al insertar el producto: " . $_conexion->error . "</p>";
            }
        }
    }

    $consulta = "SELECT * FROM productos";
    $resultado = $_conexion->query($consulta);
    $proveedores = [];
    while ($fila = $resultado->fetch_assoc()) {
        array_push($proveedores, $fila["nombre_proveedor"]);
    }

    if (!isset($_GET["id_producto"])) die("ERROR: No se especificó ningún producto");
    else $id_producto = $_GET["id_producto"];

    $consulta = "SELECT * FROM  productos WHERE id_producto = $id_producto";
    
    $resultado = $_conexion->query($consulta);

    if ($resultado->num_rows === 0) die("ERROR: No se encontró el producto con el ID $id_producto");
    else $producto = $resultado->fetch_assoc();

    $nombre_producto = $producto["nombre_producto"] ?? "";
    $categoria_producto = $producto["categoria_producto"] ?? "";
    $precio = $producto["precio"] ?? "";
    $stock = $producto["stock"] ?? "";
    ?>

    <form action="" method="post" enctype="multipart/form-data">
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input class="form-control" type="text" name="nombre_producto" value="<?php echo $nombre_producto ?>">
        </div>
        <?= $err_nombre ?? "" ?>
        <div class="mb-3">
            <label class="form-label">Categoría</label>
            <input class="form-control" type="text" name="categoria_producto" value="<?php echo $categoria_producto ?>">
        </div>
        <?= $err_categoria ?? "" ?>
        <div class="mb-3">
            <label class="form-label">Precio</label>
            <input class="form-control" type="text" name="precio" value="<?php echo $precio ?>">
        </div>
        <?= $err_precio ?? "" ?>
        <div class="mb-3">
            <label class="form-label">Stock</label>
            <input class="form-control" type="text" name="stock" value="<?php echo $stock ?>">
        </div>
        <?= $err_stock ?? "" ?>
        <div class="mb-3">
            <label class="form-label">Proveedor</label>
            <select class="form-select" name="nombre_proveedor">
                <option value="<?php echo $producto["nombre_proveedor"] ?>" selected>
                    <?php echo $producto["nombre_proveedor"] ?>
                </option>
                <?php foreach ($proveedores as $proveedor) { ?>
                    <option value="<?php echo $proveedor ?>">
                        <?php echo $proveedor ?>
                    </option>
                <?php } ?>
            </select>
        </div>
        <?= $err_proveedor ?? "" ?>
        <br><br>
        <div class="mb-3">
            <input class="btn btn-primary" type="submit" value="CONFIRMAR CAMBIOS">
            <a class="btn btn-secondary" href="index.php">Volver</a>
        </div>
        <input type="hidden" name="id_producto" value="<?php echo $producto["id_producto"] ?>">
    </form>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de videojuegos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
    require "conexion.php";
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    ?>
</head>
<?php
session_start();
if (!isset($_SESSION["usuario"])) {
    header("location: usuario/iniciar_sesion.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $id_producto = $_POST["id_producto"];
    $consulta = "DELETE FROM productos WHERE id_producto = $id_producto";
    $_conexion -> query($consulta);
}

$order_by = $_GET['order_by'] ?? 'id_producto'; 
$direction = $_GET['direction'] ?? 'ASC'; 
$usuario = $_SESSION["usuario"];

$consulta = "SELECT * FROM usuarios where usuario = '$usuario'";
$res = $_conexion->query($consulta);
$comprobacion_admin = $res->fetch_assoc();

$consulta = "SELECT * FROM productos";
$res = $_conexion->query($consulta);
$consulta = "SELECT * FROM productos ORDER BY $order_by $direction";

$res = $_conexion->query($consulta);
?>

<body>
    <div class="container mt-4">
        <h1>Listado de productos</h1>
        <div class="mb-3">
            <a href="?order_by=precio&direction=ASC" class="btn btn-info">Ordenar por precio (Asc)</a>
            <a href="?order_by=precio&direction=DESC" class="btn btn-info">Ordenar por precio (Desc)</a>
            <a href="?order_by=id_producto&direction=ASC" class="btn btn-warning">Ordenar por ID (Asc)</a>
            <a href="?order_by=id_producto&direction=DESC" class="btn btn-warning">Ordenar por ID (Desc)</a>
        </div>
        <table class="table table-striped">
            <thead class="table-primary">
                <tr>
                    <th>id_producto</th>
                    <th>nombre_producto</th>
                    <th>categoria_producto</th>
                    <th>precio</th>
                    <th>stock</th>
                    <th>nombre_proveedor</th>
                    <?php if ($comprobacion_admin["admin"] == 0) echo "<th>Acciones<th>"; ?>
                </tr>
            </thead>
            <tbody>
                <?php
                while ($fila = $res->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>{$fila['id_producto']}</td>";
                    echo "<td>{$fila['nombre_producto']}</td>";
                    echo "<td>{$fila['categoria_producto']}</td>";
                    echo "<td>{$fila['precio']}</td>";
                    echo "<td>{$fila['stock']}</td>";
                    echo "<td>{$fila['nombre_proveedor']}</td>";
                    if ($comprobacion_admin["admin"] == 0) {
                        echo "<td>
                            <a class='btn btn-primary btn-sm' href='editar.php?id_producto={$fila['id_producto']}'>Editar</a>
                            <form action='' method='post' style='display:inline;'>
                                <input type='hidden' name='id_producto' value='{$fila['id_producto']}'>
                                <button class='btn btn-danger btn-sm' type='submit'>Borrar</button>
                            </form>
                          </td>";
                        echo "</tr>";
                    }
                }
                ?>
            </tbody>
        </table>
        <a href="index.php" class="btn btn-secondary">Volver al menú principal</a>
    </div>
</body>

</html>
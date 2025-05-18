<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de desarrolladoras</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <?php
        require "conexion.php";
    ?>
</head>
<body>
    <div class="container mt-4">
        <h1>Listado de proveedores</h1>
        <a href="index.php" class="btn btn-secondary mb-3">Volver al menú principal</a>

        <table class="table table-striped">
            <thead class="table-primary">
                <tr>
                    <th>nombre_proveedor</th>
                    <th>ciudad</th>
                    <th>telefono</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $consulta = "SELECT * FROM proveedores";
                    $res = $_conexion->query($consulta);
                    while ($fila = $res->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>{$fila['nombre_proveedor']}</td>";
                        echo "<td>{$fila['ciudad']}</td>";
                        echo "<td>{$fila['telefono']}</td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>

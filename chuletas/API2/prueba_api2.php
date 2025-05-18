<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pruebita api</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="container m-4">
        <h1>Testingggg2 (angel precioso)</h1>
        <form action="" method="post">
            <div class="mb-3">
                <label class="form-label">Selecciona el método</label>
                <select name="metodo" class="form-select" id="">
                    <option value="GET">GET (Recupera datos)</option>
                    <option value="POST">POST (Insertar datos)</option>
                    <option value="PUT">PUT (Actualizar datos)</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div id="datosPost" class="mb-3">
                <label class="form-label">Datos para POST:</label>
                <input type="text" name="titulo" class="form-control" placeholder="Nombre videojuego"><br>
                <input type="text" name="nombre_desarrolladora" class="form-control" placeholder="Nombre de la desarrolladora"><br>
                <input type="text" name="anno_lanzamiento" class="form-control" placeholder="Año de lanzamiento"><br>
                <input type="text" name="porcentaje_resenna" class="form-control" placeholder="Porcentaje de las reseñas"><br>
                <input type="text" name="horas_duracion" class="form-control" placeholder="Horas de duración">
            </div>
            <div id="datosPut" class="mb-3">
                <label class="form-label">Datos para PUT:</label>
                <input type="text" name="titulo_put" class="form-control" placeholder="Nombre videojuego"><br>
                <input type="text" name="nombre_desarrolladora_put" class="form-control" placeholder="Nombre de la desarrolladora"><br>
                <input type="text" name="anno_lanzamiento_put" class="form-control" placeholder="Año de lanzamiento"><br>
                <input type="text" name="porcentaje_resenna_put" class="form-control" placeholder="Porcentaje de las reseñas"><br>
                <input type="text" name="horas_duracion_put" class="form-control" placeholder="Horas de duración">
            </div>
            <div>
                <label for="" class="form-label">Datos para el DELETE:</label>
                <input type="text" name="titulo_borrar" class="form-control" placeholder="Título de videojuego a borrar">
            </div>
            <br>              
            <button type="submit" class="btn btn-primary">Ejecutar acción</button>
        </form>

    <?php

        error_reporting(E_ALL);
        ini_set("display_errors", 1); 
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $metodo = $_POST["metodo"];
            $datos = [];
            $url = "http://localhost/API2/nucleo_api2.php";
            if ($metodo == "GET") {
                echo "<h3>Hemoz lanzao un get</h3>";
                $titulo = isset($_POST["titulo"]) && !empty($_POST["titulo"]) ? "?titulo=" . urlencode($_POST["titulo"]) : "";
                $url = "http://localhost/API2/nucleo_api2.php" . $titulo;
                echo "URL generada: " . htmlspecialchars($url);
                try {
                    $res = file_get_contents($url);
                    echo "<pre>" . htmlspecialchars($res) . "</pre>";
                } catch (Exception $e) {
                    echo "Error al realizar la solicitud " . $e->getMessage();
                }
            } elseif ($metodo == "POST"){
                    $datos = [
                        "titulo" => $_POST["titulo"],
                        "nombre_desarrolladora" => $_POST["nombre_desarrolladora"],
                        "anno_lanzamiento" => $_POST["anno_lanzamiento"],
                        "porcentaje_resenna" => $_POST["porcentaje_resenna"],
                        "horas_duracion" => $_POST["horas_duracion"]
                    ];    
                    $opciones = [
                        "http" => [
                            "header" => "Content-Type: application/json",
                            "method" => $metodo,
                            "content" => json_encode($datos)
                        ]
                    ];
                    $contexto = stream_context_create($opciones);
                    try {
                        $respuesta = file_get_contents($url, false, $contexto);
                    } catch (Exception $e) {
                        echo "Error al realizar la solicitud" . $e->getMessage();
                    }  
                    
                }elseif($metodo == "DELETE"){
                    $datos = [
                        "titulo_borrar" => $_POST["titulo_borrar"],
                    ]; 
                    $opciones = [
                        "http" => [
                            "header" => "Content-Type: application/json",
                            "method" => $metodo,
                            "content" => json_encode($datos)
                        ]
                    ];
                    $contexto = stream_context_create($opciones);
                    try {
                        $respuesta = file_get_contents($url, false, $contexto);
                    } catch (Exception $e) {
                        echo "Error al realizar la solicitud" . $e->getMessage();
                    }  
                    echo $respuesta;
                }elseif($metodo == "PUT"){
                    echo $_POST["titulo"];
                    echo $_POST["horas_duracion_put"];
                    $datos = [
                        "titulo" => $_POST["titulo_put"],
                        "nombre_desarrolladora" => $_POST["nombre_desarrolladora_put"],
                        "anno_lanzamiento" => $_POST["anno_lanzamiento_put"],
                        "porcentaje_resenna" => $_POST["porcentaje_resenna_put"],
                        "horas_duracion" => $_POST["horas_duracion_put"]
                    ];    
                    $opciones = [
                        "http" => [
                            "header" => "Content-Type: application/json",
                            "method" => $metodo,
                            "content" => json_encode($datos)
                        ]
                    ];
                    $contexto = stream_context_create($opciones);
                    try {
                        $respuesta = file_get_contents($url, false, $contexto);
                    } catch (Exception $e) {
                        echo "Error al realizar la solicitud" . $e->getMessage();
                    }        
                    echo $respuesta;
                }

            }
        

    ?>
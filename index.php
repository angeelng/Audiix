<?php
require("includes/conexion.php");
session_start();
$consulta = "SELECT * FROM canciones";
$stmt = $_conexion->prepare($consulta);
$stmt->execute();
$canciones = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menuprincipal.css">
    <script src="js/script.js"></script>
    <title>Audiix</title>
</head>

<body>
    <header>
        <div class="logo">
            <img src="images/logo_audiix.png" alt="Audiix Logo">
        </div>
        <?php if (isset($_SESSION["nombre"])){
        echo "<h1>Bienvenido, ". $_SESSION["nombre"] ." </h1>"; }
        else{
             echo "<h1>Bienvenido a Audiix! </h1>";
            }?>
        <nav class="menuHeader">
            <ul>
                <li><a id="cerrarSesion" href="auth/logout.php">Cerrar sesión</a></li>
                <li><a id="subirMusica" href="artists/upload_song.php">Subir música</a></li>
            </ul>
        </nav>
    </header>
    <!--BUSCAR-->
    <section class="sectionSearch">
        <form action="search.php" method="GET">
            <input id="buscador" type="text" name="query" placeholder="¿Qué te apetece hoy?">
            <button type="submit" id="buscar">Buscar</button>
        </form>
    </section>
    <!--LISTA DE CANCIONES-->
    <section id="canciones">
        <table>
            <tr>
                <th>#</th>
                <th>Portada</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Fecha de subida</th>
            </tr>
            <?php
            foreach ($canciones as $cancion) {
                echo "<tr>";
                echo "<td>";
            ?>
                <img class="play" id="play" src="images/play_white.svg" onclick="reproducir('<?php echo $cancion['archivo'] ?>', '<?php echo $cancion['caratula'] ?>')"></img>
                <img class="play" id="pause" src="images/pause_white.svg" onclick="pausar('<?php echo $cancion['archivo'] ?>', this)" alt="" style="display: none;">
                <?php
                echo "</td>";
                echo "<td>";
                ?>
                <img class="portadas" src="images/caratulas/<?php echo $cancion["caratula"] ?>" alt="">
            <?php
                echo "</td>";
                echo "<td>";
                echo $cancion["titulo"];
                echo "</td>";
                echo "<td>";
                echo $cancion["artista"];
                echo "</td>";
                echo "<td>";
                echo $cancion["fecha_subida"];
                echo "</td>";
                echo "</tr>";
            }

            ?>
        </table>
    </section>
    <div class="divReproductor" id="containerReproductor">
    </div>
</body>
</html>
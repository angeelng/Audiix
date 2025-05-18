<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    ?>
<body>
    <h1>Lista pokemitos</h1>
    <?php
        $apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=10/";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $apiURL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($curl);
        curl_close($curl);
        $datos = json_decode($res, true);
        $pokemons = $datos["results"];

        foreach($pokemons as $pokemon){
            $nombre = ucfirst($pokemon["name"]);
            echo "<p>Nombre del pokémon: $nombre <br> <a href='detailed_pokemon.php?name={$pokemon["name"]}'>Ver más detalles</a></p>";
        }

        

    ?>
</body>
</html>
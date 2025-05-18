<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="" alt="">
</body>
</html>

<?php

    $urlApi = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $urlApi);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, $urlApi);
    $res = curl_exec($curl);
    curl_close($curl);
    $datos = json_decode($res, true);

    foreach ($datos["results"] as $pokemon){
        $urlPokemon = $pokemon["url"];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $urlPokemon);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        $res = curl_exec($curl);
        curl_close($curl);
        $datos = json_decode($res, true);

        echo "<img src='".$datos["sprites"]["front_default"]."'>";
        echo "<a href='detalle_pokemon.php?name={$datos["name"]}'><img src=" . $datos["sprites"]["front_default"] . "></a>";
        
    }

?>
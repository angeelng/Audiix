<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detallitos pokemitos</title>
    <?php
        error_reporting(E_ALL);
        ini_set("display_errors", true);
    ?>
</head>
<body>
    <?php
        $nombrePokemon = $_GET["name"];
        $apiURL = "https://pokeapi.co/api/v2/pokemon/$nombrePokemon/";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $apiURL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($curl);
        curl_close($curl);
        $datos = json_decode($res, true);
        echo "<h1>" . ucfirst($datos["name"]) . "</h1>";
        echo "<p>" . "Altura: " . $datos["height"] . "cm </p>";
        echo "<p>" . "Peso: " . $datos["weight"] . "g </p>";
        echo "<img src='".$datos["sprites"]["front_default"]."' alt='Imagen de ". $datos["name"]. "'>";
        echo "<h3>Tipos: </h3>";
        echo "<ul>";
        foreach($datos["types"] as $tipo){
            echo "<li>" . $tipo["type"]["name"] . "</li>";
        }
        echo "</ul>";
       
        echo "<h1>Habilidades: </h1>";
        echo "<ul>";
        foreach ($datos["abilities"] as $habilidad){
            $nombre = $habilidad["ability"]["name"];
            $urlHabilidad = $habilidad["ability"]["url"];
            echo "<li>" . $nombre. "</li>";
            
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $urlHabilidad);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
            $res = curl_exec($curl);
            curl_close($curl);
            $datos = json_decode($res, true);
            foreach ($datos["effect_entries"] as $efecto){
                echo "<li>" . $efecto["effect"]. "</li>";
            }

        }
        echo "</ul>";

    


    ?>
</body>
</html>
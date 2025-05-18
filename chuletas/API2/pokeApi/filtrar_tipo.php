<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
    error_reporting(E_ALL);
    ini_set("display_errors", true);
?>
<body>
    <h1>Selecciona un tipo</h1>
    <form action="" method="post">
        <select name="tipo" id="">
            <option value="fire">Fuego</option>
            <option value="grass">Planta</option>
            <option value="water">Agua</option>
            <option value="poison">Veneno</option>
            <option value="electric">Eléctrico</option>
        </select>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>

<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $tipo = $_POST["tipo"];
        $apiURL = "https://pokeapi.co/api/v2/type/$tipo";
        echo $tipo;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $apiURL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($curl);
        $datos = json_decode($res, true);
        curl_close($curl);
        $pokemons = $datos["pokemon"];
        foreach ($pokemons as $pokemon){
                echo "<p>" . $pokemon["pokemon"]["name"] . "</p>";
        }

    }
?>
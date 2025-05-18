<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    ?>
</head>
<body>
    <?php
        $id = $_GET["id"];
        $apiUrl = "https://api.jikan.moe/v4/anime/$id/full";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $apiUrl);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($curl);
        curl_close($curl);

        $datitos = json_decode($res, true);
        $anime = $datitos["data"];
    ?>
    <h1>
        <?php echo $anime["title"]; ?>
    </h1>
    <h1>
        <?php echo $anime["title_japanese"]; ?>
    </h1>
    <h2>
        <?php echo $anime["score"]; ?>
    </h2>
    <h2>
        <?php echo $anime["rank"]; ?>
    </h2>
    <h2>
        <?php echo $anime["year"]; ?>
    </h2>
    <img src="<?php echo $anime["images"]["jpg"]["image_url"]; ?>" width="200px" alt="">
    <h3>Estudios</h3>
    <p>
        <?php
            $estudios = $anime["studios"];
            foreach($estudios as $estudio){
                echo "<p> Nombre del estudio". $estudio["name"] . " URL estudio: " . $estudio["url"]. "</p>";
            }
        ?>
    </p>
    <p>
        <?php
            $generos = $anime["genres"];
            foreach($generos as $genero){
                echo "<p> Tipo: ".  $genero["type"] . " Género: " . $genero["name"] .  " URL: ". $genero["url"] ."</p>";
            }
        ?>
    </p>

    <p>
        <?php echo $anime["synopsis"]; ?>
    </p>
    <h1>Trailer</h1>
    <iframe src="<?php echo $anime["trailer"]["embed_url"]; ?>"></iframe>
    <h1>Relacionados</h1>
    <p>
    <?php
            $relacionados = $anime["relations"];
            foreach($relacionados as $relacion){
                $relacionados = $relacion["entry"];
                foreach($relacionados as $aux){
                    if ($aux["type"] == "anime"){
                        echo "<p>" . $aux["name"] . "</p>";
                    }
                }
            }
        ?> 
    </p>
    <p>
        <?php
            $productores = $anime["producers"];
            foreach($productores as $productor){
                echo "<p> Tipo: ".  $productor["type"] . " Nombre: " . $productor["name"] .  " URL: ". $productor["url"] ."</p>";
            }
        ?>
    </p>
</body>
</html>
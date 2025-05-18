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
        $apiURL = "https://api.jikan.moe/v4/top/anime"; //URL a la que realizamos solicitudes HTTP

        $curl = curl_init(); //Iniciar una sesión cURL, por qué? Porque cURL requiere de una esctructura en memoria para
                            // almacenar la info de la solicitud y la respuesta
        curl_setopt($curl, CURLOPT_URL, $apiURL); //Establecer la URL a consultar 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); //Devolver el resultado en lugar de imprimirlo en pantalla
        $res = curl_exec($curl); //Ejecutar la sesión
        curl_close($curl);
       //Mostrarlo primero para ver el formato de json
        $res = json_decode($res, true); //
        //var_dump($res);
        $animes = $res["data"];
    ?>
    <table>
        <thead>
            <tr>
                <th>Posición</th>
                <th>Título</th>
                <th>Nota</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach($animes as $anime){
            ?>
            <tr>
                <td><?php echo $anime["rank"]?></td>
                <td>
                    <a href="infoAnime.php?id=<?php echo $anime["mal_id"]?>"><?php echo $anime["title"] ?></a>
                </td>
                <td><?php echo $anime["score"] ?></td>
                <td>
                    <img src="<?php echo $anime["images"]["jpg"]["image_url"] ?>" alt="Imagen del anime" width="100px">
                </td>
            </tr>
            <?php }?>
        </tbody>
    </table>
</body>
</html>
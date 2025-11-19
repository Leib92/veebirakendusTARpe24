<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/joonis.css">
    <script src="JS/joonisScript.js"></script>
    <script src="JS/jsKalk.js"></script>
</head>
<body>
<?php
//päis
include("header.php");
?>

<?php
//navigeerimismenüü
include("nav.php");
?>
<div class="flex-container">
    <div>
        <?php
        // sisu - laetakse content kaustast
        if(isset($_GET["leht"])){
            include('content/'.$_GET["leht"]);
        }
        else{
            include('content/kodu.php');
        }
        ?>
    </div>
    <div><strong>PHP -</strong>
        Skriptikeel - skript teeb oma tööd pärast seda, kui toimus mingi sündmus.
    </div>
    <div>
        <img src="pilt/phpPilt.png" alt="PHP pilt">
    </div>
</div>
<br>

<?php
//jalus
include("footer.php");
?>
</body>
</html>


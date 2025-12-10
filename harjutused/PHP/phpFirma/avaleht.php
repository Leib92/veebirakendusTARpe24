<?php

?>

<html lang="et">
<head>
    <style type="text/css">

    </style>
</head>
<body>
<nav>
    <ul>
        <li><a href="avaleht.php">Avaleht</a></li>
        <li><a href="teenused.php">Teenused/Tooted</a></li>
        <li><a href="admin.php">Admin</a></li>
    </ul>
</nav>
<div id="menyykiht">
    <h2>Teated</h2>
    <ul>
        <?php
        $kask = $yhendus->prepare(
            "SELECT id, pealkiri FROM lehed"
        );
        $kask->bind_result($id, $pealkiri);
        $kask->execute();
        while ($kask->fetch()) {
            echo "<li><a href='".$_SERVER["PHP_SELF"].
                "?id=$id'>".htmlspecialchars($pealkiri)."</a></li>";
        }
        ?>
    </ul>
    <a href="<?=$_SERVER['PHP_SELF']?>?lisamine=jah">Lisa ...</a>
</div>

</body>

</html>



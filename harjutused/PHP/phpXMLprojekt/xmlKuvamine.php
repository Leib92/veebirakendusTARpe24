<!DOCTYPE html>
<html>
<head>
    <title>XML Faili kuvamine - Opilased.xml</title>
</head>
<body>
<h1>XML faili kuvamine</h1>
<?php
$opilased = simplexml_load_file("opilased.xml");
//opilase otsing
function erialaOtsing($paring){
    global $opilased;
    $tulemus=array();
    foreach($opilased->opilane as $opilane){
        if(substr(strtolower($opilane->eriala), 0, strlen($paring)) == strtolower($paring)){
            array_push($tulemus, $opilane);
        }
    }
    return $tulemus;
}

?>
<form action="?" method="post">
    <label for="otsing">Eriala</label>
    <input type="text" name="otsing" id="otsing">
    <input type="submit" value="Ok">
</form>
<?php
if(!empty($_POST['otsing'])){
    $tulemus = erialaOtsing($_POST['otsing']);
    foreach($tulemus as $opilane){
        echo  $opilane->nimi." - ".$opilane->eriala."<br>";
    }
}
?>

<table>
    <tr>
        <th>Õpilase Nimi</th>
        <th>Isikukood</th>
        <th>Eriala</th>
        <th>Elukoht</th>
    </tr>
    <?php
    foreach ($opilased->opilane as $opilane) {
        echo "<tr>";
        echo "<td>".$opilane->nimi."</td>";
        echo "<td>".$opilane->isikukood."</td>";
        echo "<td>".$opilane->eriala."</td>";
        echo "<td>".$opilane->elikoht->linn.", ".$opilane->elukoht->maakond."</td>";
        echo "</tr>";
    }
    ?>
</table>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>XML Faili kuvamine - Opilased.xml</title>
</head>
<body>
<h1>XML faili kuvamine</h1>
<table>
    <?php
    $opilased = simplexml_load_file("opilased.xml");
    $feed = simplexml_load_file("https://www.err.ee/feed");
    // 1.opilase nimi
    echo "1.õpilase nimi: ".$opilased->opilane[0]->nimi;
    // kõik opilased
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
<h1>RSS uudiste lugemine</h1>
<?php
echo "<ul>";
foreach($feed->channel->item as $item) {
    echo "<li>";
    echo "<a href='$item->link' target='_blank'>".$item->title."</a>";
    echo $item->description;
    echo " Kuupäev: ".$item->pubDate;
    echo "</li>";
}
echo "</ul>";
?>


</body>
</html>


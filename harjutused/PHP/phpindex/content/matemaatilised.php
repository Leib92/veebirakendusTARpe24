<?php
function clearVarsExcept($url, $varname){
    $url=basename($url);
    if(str_starts_with($url, "?")){
        return "?$varname=".$_REQUEST[$varname];
    }
    return strtok($url, "?")."?$varname=".$_REQUEST[$varname];
}
?>

<?php
//aritmeetilised operaatorid
$x = 8;
$y = 2;
$liitm = $x + $y;
$lahut = $x - $y;
$korru = $x * $y;
$jagam = $x / $y;
$jaak = $x % $y;
echo "Vastused x= $x ja y= $y: 
Liitmine $liitm, Lahutamine $lahut, 
Korruitamine $korru, Jagamine $jagam, 
Jaak $jaak";

echo "<br><br>";


$x = 10;
echo "x = $x";
echo "<br>";

$x++; //sama mis $x = $x + 1
echo "x++ = $x";
echo "<br>";

$x = 10;
$x--; //sama mis $x = $x - 1
echo "x-- = $x";

echo "<br><br>";


$x = 10;
echo "<strong>Ruutjuur -sqrt()</strong> = ".sqrt($x);

echo "<br><br>";

echo "<strong>Kõige väiksem ja suurem</strong>";
echo "<br> Väiksem: ";
echo min(11,21,32,43,54);
echo "<br> Suurem: ";
echo max(11,21,32,43,54);
echo "<br> ";

echo "arvud = array(11,21,32,43,54);";
echo "<br> ";
echo "arvud2 = array(60,72,42,34,45);";
echo "<br> ";
$arvud = array(11,21,32,43,54);
$arvud2 = array(60,72,42,34,45);
echo "Suurem kage arvude vahel: ";
echo max(max($arvud), max($arvud2));


echo "<br><br>";

echo "<strong>Ümardamine</strong>";
$arv = 3.456;
echo "<br> Arv: $arv  ";

echo "<br> Ümardadud arv: ";
echo round($arv);

echo "<br> Osaliselt ümardadud: ";
echo round($arv,2);

echo "<br> Ceil: ";
echo ceil($arv);

echo "<br> Floor: ";
echo floor($arv);

echo "<br><br>";


echo "<strong>Juhuslik arv</strong>";
echo "<br>";
echo "Random: ".rand();
echo "<br>";
echo "Mersenne Twister Random: ".mt_rand();
echo "<br>";
echo "1-10 Random: ".rand(1,10);

echo "<br><br>";


echo "<strong>Astendamine, ruutjuur ja pii</strong>";
echo "<br>";
echo "Astendamine (5^2): ".pow(5,2);
echo "<br>";
echo "Astendamine (5^3): ".pow(5,3);
echo "<br>";
echo "Ruutjuur (9): ".sqrt(9);
echo "<br>";
echo "pi: ".pi();

echo "<br><br>";


echo "<strong>Trigonomeetria</strong>";
echo "<br>";
echo "Cosine (0.8): ".cos(0.8);
echo "<br>";
echo "Degree to Radius (30); ".deg2rad(30);

echo "<br><br>";


echo "<strong>Arvmõistatus. Arva ära kaks arvu vahemikus 0...10</strong>";
echo "<br>";
$arv1=4;
$arv2=3;
// kirjuta matemaatilise tehtega või funktisooni abil 5 vihjet
$valem1 = $arv1 + $arv2;
$valem2 = $arv1 - $arv2;
$valem3 = $arv1 * $arv2;
$valem4 = $arv1 / $arv2;
echo "<ol>";
echo "<li>Arvutates kaks arvu on ".$valem1."</li>";
echo "<li>Lahutates kaks arvu on ".$valem2."</li>";
echo "<li>Korrutades kaks arvu on ".$valem3."</li>";
echo "<li>Jagades kaks arvu on ".round($valem4, 1)."</li>";
echo "<li>Esimene arv saab jagada 2-ga täisarvuna, aga teist mitte.</li>";
echo "</ol>";
echo "<br>";
?>
<form action="<?=clearVarsExcept($_SERVER['REQUEST_URI'], "leht")?>" method="post">
    <label for="arv1">Arv1:</label>
    <input type="number" id="arv1" name="arv1" min="0" max="10" step="1">
    <br>
    <label for="arv2">Arv2:</label>
    <input type="number" id="arv2" name="arv2" min="0" max="10" step="1">
    <input type="submit" value="Kontrolli">
</form>

<?php
if (isset($_REQUEST['arv1'])) {
    if($_REQUEST['arv1'] != $arv1) {
        echo $_REQUEST['arv1']." on vale";
    }
    else if($_REQUEST['arv2'] != $arv2){
        echo $_REQUEST['arv2']." on vale";
    }
    else{
        echo $_REQUEST['arv1']." ja ".$_REQUEST['arv2']." on õige.";
    }
}
?>

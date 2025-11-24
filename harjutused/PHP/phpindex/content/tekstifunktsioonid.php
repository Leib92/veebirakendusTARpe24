<?php
function clearVarsExcept($url, $varname){
    $url=basename($url);
    if(str_starts_with($url, "?")){
        return "?$varname=".$_REQUEST[$varname];
    }
    return strtok($url, "?")."?$varname=".$_REQUEST[$varname];
}

echo "<h2>Tekstifunktsioonid</h2>";
echo '<br><br>';

$tekst = 'Veebirakendus on arvutitarkvara program.';

echo $tekst;
echo '<br><br>';

$tekst2 = ' 	A woman should soften but not weaken a man   ';
echo "<pre>$tekst2</pre>";
echo "Eemaldab tühikud tekstist - trim() <pre>".trim($tekst2)."</pre>";
echo "Eemaldab tühikud eest - ltrim() <pre>".ltrim($tekst2)."</pre>";
echo "Eemaldab tühikud taga - rtrim() <pre>".rtrim($tekst2)."</pre>";
echo '<br><br>';

echo "<h3>Tekst kui massiiv</h3>";
$tekst3 = 'All thinking men are atheists';
echo "Võtab tekstist esimese täht - tekst[0]= ".$tekst3[0];
echo '<br>';
echo "Võtab tekstist viis tähte- tekst[4]= ".$tekst3[4];
echo '<br><br>';

echo "Alatest 4-st 5 tükki - substr(tekst, 3, 5)= ".substr($tekst3, 3, 5);		//thin
echo '<br>';
echo "Alatest 5-st kuni 13 täheni - substr(tekst, 4, -13)= ".substr($tekst3, 4, -13);	//thinking men
echo '<br>';
echo "Võtab paremalt poolt alatest 8, 7 tükki (tekst, -8, 7)= ".substr($tekst3, -8, 7);		//atheist
echo '<br><br>';

$sona = str_word_count($tekst3, 1);
echo "Võtab kolmas sõna teksti massiivist = ".$sona[2];
echo '<br><br>';

echo "<h3>Teksti asendamine</h3>";
$asendus = 'Tarkvara';
$otsitav_algus = 16;
$otsitav_pikkus = 14;
echo substr_replace($tekst, $asendus, $otsitav_algus, $otsitav_pikkus);
echo '<br><br>';

$otsi = array('on', 'programm');
$asenda = array('----', 'software');
echo "otsib ja asendab käks sõna? ürpgramm - str_replace(otsi, asenda, tekst)=".str_replace($otsi, $asenda, $tekst);
echo '<br><br>';

echo "<h3>Mis linn see on?</h3>";
$linn="keila";
$censor="**";
echo "<ol>";
echo "<li>Linn algab ".substr($linn, 0,1)." tähega;</li>";
echo "<li>Linn lõppeb ".substr($linn, 4,1)." tähega;</li>";
echo "<li>Linn koosneb ".strlen($linn)." tähest;</li>";
echo "<li>Linna vihje: ".substr_replace($linn, $censor, 1, 2);"</li>";
echo "<li>Kõik tähed olemas, aga vahetatud ringi: ".str_shuffle($linn).";</li>";
echo "</ol>";
echo '<br><br>';
?>

<form action="<?=clearVarsExcept($_SERVER['REQUEST_URI'], "leht")?>" method="post">
    <label for="linn">Sisesta linna nimi</label>
    <input type="text" id="linn" name="linn">
    <input type="submit" value="Kontrolli">
</form>

<?php
if (isset($_REQUEST['linn'])) {
    if($_REQUEST['linn'] == "keila") {
        echo $_REQUEST['linn']." on õige";
    }
    else{
        echo $_REQUEST['linn']." on vale";
    }
}
?>

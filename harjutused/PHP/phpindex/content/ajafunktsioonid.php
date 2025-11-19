<?php
echo "<div class='flex-container'>";

echo "<div>";
echo "<h1>Ajafunktsioonid</h1>";
echo "Tänane kuupäev ".date("d.m.Y");
echo "</div>";

// timezone - juhul kui timezone ei ole määratud,
// siis php kasutab localhost aega

echo "<div>";
echo date_default_timezone_set("Europe/Tallinn");
echo "<br>";
echo "<a href='https://ww.php.net/manual/en/timezones.europe.php'>Timezone</a>";
echo "<br>";
echo "time()- aeg seknundites ".time();
echo "<br>";

echo "<pre>
date('d.m.Y G:i:s', time())
d = 01...31
m - 01...12
y - neljakohane arv
G - 24h formaat
i - minutid 0...59
s - sekundid 0...59
</pre>";
echo "<br>";
echo "+1min = ". date('d.m.Y G:i:s', time()+60);
echo "<br>";
echo "+1tund = time()+60*60 = ".date('d.m.Y G:i:s', time()+60*60);
echo "<br>";
echo "+1päev = time()+60*60*24 = ".date('d.m.Y G:i:s', time()+60*60*24);
echo "<br>";
echo "</div>";

echo "<div>";
echo "<h2>Kuupäeva genereerimine </h2>";
echo "<br>";
echo "mktime(tunnid, minutid, sekundid, kuu, päev, aasta)";
echo "<br>";
$synnipaev=mktime(0,0,0,2,9,2002);
echo "Minu sünnipäev ".date("d.m.Y", $synnipaev);
echo "<br>";
echo "massiivi abil näidata tänane kuu nimi";
echo "<br>";
$kuud=array(1=>'jaanuar','veebruar');
$paev=date('d');
$aasta=date('Y');
$kuu=$kuud[date('m')];
echo "Tänane kuupäev kuu nimega".$paev.".".$kuu." ".$aasta." a";
//ise kirjuta oma sünnipäeva kuu nimega
echo "<br>";
echo "</div>";
echo "</div>";

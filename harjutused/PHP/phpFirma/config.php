<?php
$serverinimi='localhost';
$kasutajanimi='Leib';
$parool='1111';
$andmebaasinimi='leib';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");

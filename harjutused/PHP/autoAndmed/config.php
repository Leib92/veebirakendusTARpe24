<?php
$serverinimi='localhost';
$kasutajanimi='Leib';
$parool='1111';
$andmebaasinimi='leib';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");

/*
 * zone.ee andmebaasi seadistamine
$serverinimi='d132376.mysql.zonevs.eu';
$kasutajanimi='d132376_leibenau';
$parool='Steel19443331';
$andmebaasinimi='d132376_phpbaas';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");
*/
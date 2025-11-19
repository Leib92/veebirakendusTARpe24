<h1>Juhuslik pilt images-kaustast</h1>
<input type="button" value="Random pilt" onclick="juhuslikPilt()">
<br>
<img src="" alt="" id="randomPilt" width="500">
<br><br>

<h2>Piltmõistatus. Vali mida sa näed pildil</h2>
<input type="radio" name="valik" id="v1" value="pilt/mtndew.png" onchange="piltMyVastus()">
<label for="v1">Mountain Dew</label>
<br>
<input type="radio" name="valik" id="v2" value="pilt/pepsi.png" onchange="piltMyVastus()">
<label for="v2">Pepsi</label>
<br>
<input type="radio" name="valik" id="v3" value="pilt/rootbeer.png" onchange="piltMyVastus()">
<label for="v3">Root Beer</label>
<br><br>
<div id="vastus"></div>
<br><br>

<h2>Mitu pilti soovid osta?</h2>
<input type="number" id="tk" min="1" max="100" step="1" value="1" onchange="arvutaProduct()">
<label for="tk">Vali kogus</label>
<br>
<div id="vastus2"></div>
<h1>Joonistamine JS-ga</h1>

<h2>Tava canvas</h2>
<canvas id="tahvel" width="300" height="250"></canvas>
<br>

<input type="button" value="Puhasta" onclick="puhasta()">
<br>

<input type="button" value="Sirge joon" onclick="sirgeJoon()">
<input type="button" value="Kolmnurk" onclick="kolmnurk()">
<br>

<label for="raadius">R:</label>
<input type="number" id="raadius" min="0" max="100" value="5" onchange="ring()">
<input type="button" value="Ring" onclick="ring()">
<br>

<label for="laius">Laius</label>
<input type="number" id="laius" min="0" max="100" value="5" onchange="ristkylik()">
<label for="korgus">Kõrgus</label>
<input type="number" id="korgus" min="0" max="100" value="5" onchange="ristkylik()">
<input type="button" value="Ristkülik" onclick="ristkylik()">
<br>

<input type="button" value="picsum pilt" onclick="pilt()">
<br>
<br>

<h2>Lippu canvas</h2>
<!--  Lipude joonistamine -->
<canvas id="lipp" width="330" height="210"></canvas>
<br>
<input type="button" value="Eesti lipp" onclick="eestiLipp()">
<input type="button" value="Itaalia lipp" onclick="itaaliaLipp()">
<input type="button" value="Albaania lipp" onclick="albaaniaLipp()">
<br>
<br>

<h2>Valgusfoor canvas</h2>
<!--  Valgusfoor -->
<canvas id="valgus" width="100" height="200"></canvas>
<br>
<input type="button" value="Mine" onclick="resetFoor(),rohelineFoor()">
<input type="button" value="Oota" onclick="resetFoor(),kollaneFoor()">
<input type="button" value="Hoia" onclick="resetFoor(),punaneFoor()">
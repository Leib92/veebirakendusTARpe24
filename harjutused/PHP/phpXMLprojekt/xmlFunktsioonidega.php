<?php
require ('funktsioonid.php');
?>
<!DOCTYPE html>
<html>
<head>
    <title>XML Faili kuvamine funktsioonide abil</title>
</head>
<body>
<h1>RSS uudised</h1>
<?php
uudised('https://www.err.ee/rss', 5)
?>
<h1>Postimees uudised</h1>
<?php
uudised('https://www.postimees.ee/rss', 3)
?>
<h1>Delfi uudised</h1>
<?php
uudised('https://feeds2.feedburner.com/delfieesti', 3)
?>

</body>
</html>

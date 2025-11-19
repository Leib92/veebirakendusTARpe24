<?php
echo "<h2>GIT CMD käsurida</h2>";
echo "<ol>";
echo "<li>git init -  uus repo</li>";
echo '<li>
git config --global user.name "Allan Leibenau"
<br>
git config --global user.email "your_email@example.com"
<br>
git config --global --list
</li>
<li>
ssh-keygen -o -t rsa -C "your_email@example.com"
</li>

<li>
git add .
<br>
git commit -a -m "on loodud phpIndex"
<br>
git remote remove origin
</li>

<li>
git remote add origin git@github.com:Leib92/phpIndex
<br>
git branch -M main
<br>
git push -u origin main
</li>
';
echo "</ol>";
?>


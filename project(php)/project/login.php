<html>
<body style="background: url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80); background-size:100% 100%;">
<?php
$mysqli = new mysqli("localhost","root","", "transport");
$result = $mysqli->query("SELECT * FROM `admin` WHERE Name='$_POST[uname]'and Email ='$_POST[umail]' and Number = '$_POST[unumber]'");
if($result->num_rows == 0) {
?>
<center><font size= "10">You are a Visitor</font><br><br><br><br>
<font size= "6">View As:</font><br><br><br>
<button type="button"><a href = "userpage.php"><font size ="4">USER</a></font></button></form><br><br>
</centre>
</body>
<?php
} else {
?>
<body style="background-color:skyblue">
<center><font size= "10">You are an Admin</font><br><br><br><br>
<font size= "6">View As:</font><br><br><br>
<button type="button"><a href = "userpage.php"><font size ="4">USER</a></font></button></form><br><br>
<button type="button"><a href = "adminpage.php"><font size ="4">ADMIN</a></font></button></form><br><br>
</centre>
</body>
<?php
}
$mysqli->close();
?>
</html>
<html>
<body style="background: url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80); background-size:100% 100%;">
<center>
<?php

$conn = new mysqli("localhost", "root","", "transport");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM `bookinglist`";
$result = $conn->query($sql);
?>
<table><th><font size ="6">Booking ID</th><th><font size ="6">Schedule</th><th><font size ="6">Route</th><th><font size ="6">Price</font></th>
<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo '<tr><td>' . $row["Booking_ID"]. "</td><td>" . $row["Schedule"]. "</td><td>" . $row["Route"]."</td><td>". $row["Price"]. "</td></tr>";
    }
} else {
    echo "0 results";
}
?>
</table>
<br><br><br>

<?php
$conn->close();
?>

<form action="addqr.php" method = "Post">
<font size = "5">
Booking id:<input type = "text" name="bid"></input><br><br>
Schedule :<input type = "text" name="sch"></input><br><br>
Route:<input type = "text" name="rt"></input><br><br>
Price:<input type = "text" name="pr"></input><br><br>
<input type = "submit" name="Submit"></input><br><br>
</font>
</form>
</center>
</body>
</html>
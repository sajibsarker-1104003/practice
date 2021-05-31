
<html>
<body style="background: url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80); background-size:100% 100%;">
<center>
<?php
$conn = new mysqli("localhost", "root","", "transport");
$ids = implode($_POST ['id']);

 

$Q="Select Price from `bookinglist` where Booking_ID in (".$ids.")";

 


$result = $conn->query($Q);
?>
<font size = "6"> Price </font><br><br><br><br>
Your Selected Booking Details Below: <br><br><br>
<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<td>Booking id: ". $ids ."</td><br><br><td>Price: ". $row['Price']."</td>";
    }
} else {
    echo "0 results";
}
?>
 
<br><br><br><br>
<form action="Pay.php" method = "Post">
To confirm<br><br>
Enter Name:<input type="text" name = "n"></input><br><br>
Enter Number:<input type="text" name = "num"></input><br><br>
Enter booking id:<input type="text" name = "id"></input><br><br>
<button type ="Submit"> Pay </button>
</form>
</body>
</center>
</html>
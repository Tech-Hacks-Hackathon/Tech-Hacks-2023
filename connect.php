<?php
$fname=$_POST["input1"];
$lname=$_POST["input2"];
$mail=$_POST["input3"];
$pwd=$_POST["input4"];
$country=$_POST["countries"];
$gender=$_POST["gender"];

$conn=new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('Connection failed :'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare('insert into registration(FirstName,LastName,Password,Mail,Gender)values(?,?,?,?,?,?)');
   $stmt->bind_param("sssssi",$fname,$lname,$mail,$pwd,$country,$gender);
   $stmt->execute();
   echo "Registration Successfully Completed";
   $stmt->close();
   $conn->close();
}
?>
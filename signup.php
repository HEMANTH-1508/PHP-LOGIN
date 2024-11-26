<?php

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "library_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, username, password) VALUES ('$email', '$username', '$password')";

if ($conn->query($sql) === TRUE) 
{
    echo "Registration successful!";
    header('Location:login.html');
    exit;
} 
else 
{
    echo "Error: " . $conn->error;
}

$conn->close();
?>

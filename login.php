<?php

session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) 
    {
        $_SESSION['username'] = $row['username'];
        echo "Login successful!";
        header('Location:index.html');
        exit;
    } 
    else 
    {
        echo "Invalid password.";
    }
} 
else 
{
    echo "User not found.";
}

$conn->close();
?>

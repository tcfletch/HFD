<?php

$servername = "hosting-data.io"; // Change this to your server name
$username = "dbu1451822"; // Change this to your MySQL username
$password = "OswegoHistory1848!"; // Change this to your MySQL password
$database = "dbheritage"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Close connection
$conn->close();

?>

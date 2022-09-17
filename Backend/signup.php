<?php

include("connection.php");

$full_name = $_POST["full_name"];
$dob = $_POST["dob"];
$email = $_POST["email"];
$user_name = $_POST["user_name"];
$user_password = $_POST["user_password"];

$query = $mysqli -> prepare("INSERT INTO users (full_name, dob, email, user_name, user_password) VALUE (?, ?, ?, ?, ?)");
$query -> bind_param("sssss", $full_name, $dob, $email, $user_name, $user_password);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
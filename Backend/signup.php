<?php

include("connection.php");

$full_name = $_POST["full_name"];
$email = $_POST["email"];
$dob = $_POST["dob"];
$user_password = $_POST["user_password"];

$query = $mysqli -> prepare("INSERT INTO users (full_name, email, dob, user_password) VALUE (?, ?, ?, ?)");
$query = bind_param("ssis", $full_name, $email, $dob, $user_password);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response)

?>
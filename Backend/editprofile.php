<?php

include("connection.php");

$user_name = $_POST["user_name"];
$email = $_POST["email"];
$full_name = $_POST["full_name"];
$dob = $_POST["dob"];
$profile_picture = $_POST["profile_picture"]
$user_password = $_POST["user_password"];

$query = $mysqli -> prepare("INSERT INTO users (user_name, email, full_name, dob, profile_picture, user_password) VALUE (?, ?, ?, ?, ?)");
$query = bind_param("sssiss",$user_name, $email, $full_name, $dob, $profile_picture, $user_password);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response)

?>
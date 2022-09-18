<?php

include("connection.php");

$full_name = $_POST["full_name"];
$user_name = $_POST["user_name"];
$email = $_POST["email"];
$dob = $_POST["dob"];
$user_password = hash("sha256", $_POST["user_password"]);
$user_password .= "a";

$query = $mysqli -> prepare("INSERT INTO users (full_name, user_name, email, dob, user_password) VALUE (?, ?, ?, ?, ?)");
$query -> bind_param("sssss", $full_name, $user_name, $email, $dob, $user_password);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
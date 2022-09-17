<?php

include("connection.php");

$email = $_POST["email"];
$user_name = $_POST["user_name"]
$user_password = $_POST["user_password"];

$query = $mysqli -> prepare("INSERT INTO users (user_name, email, user_password) VALUE (?, ?, ?)");
$query = bind_param("ssi", $user_name, $email, $user_password);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response)

?>
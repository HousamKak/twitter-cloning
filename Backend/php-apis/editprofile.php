<?php

include("connection.php");

$cover_picture = $_POST["cover_picture"];
$profile_picture = $_POST["profile_picture"];
$full_name = $_POST["full_name"];
$user_name = $_POST["user_name"];
$email = $_POST["email"];
$dob = $_POST["dob"];
$user_password = $_POST["user_password"];
$user_id = $_POST["user_id"];

$query = $mysqli -> prepare("UPDATE users SET cover_picture = ?, profile_picture = ?, full_name = ?, user_name = ?, email = ?, dob = ?, user_password = ? WHERE user_id = ?");
$query -> bind_param("sssssssi", $cover_picture, $profile_picture, $full_name, $user_name, $email, $dob, $user_password, $user_id);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

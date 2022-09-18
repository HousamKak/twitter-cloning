<?php

include("connection.php");

$following_id = $_POST["following_id"];
$follower_id = $_POST["follower_id"];


$query = $mysqli -> prepare("INSERT INTO following_followers (following_id, follower_id) VALUE (?, ?)");
$query -> bind_param("ii", $following_id, $follower_id);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
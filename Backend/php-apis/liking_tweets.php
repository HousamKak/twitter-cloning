<?php

include("connection.php");

$user_id = $_POST["user_id"];
$tweet_id = $_POST["tweet_id"];


$query = $mysqli->prepare("INSERT INTO user_likes(user_id, tweet_id) VALUE (?, ?)");
$query->bind_param("ii", $user_id, $tweet_id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
?>
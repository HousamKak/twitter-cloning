<?php

include("connection.php");

$user_id = $_POST["user_id"];
$tweet_text = $_POST["tweet_text"];
$tweet_picture = $_POST["tweet_picture"];


$query = $mysqli -> prepare("INSERT INTO tweets (user_id ,tweet_text, tweet_picture) VALUE (?, ?, ?)");
$query -> bind_param("iss", $user_id, $tweet_text, $tweet_picture);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
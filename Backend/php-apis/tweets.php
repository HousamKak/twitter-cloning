<?php

include("connection.php");

$tweet_text = $_POST["tweet_text"];
$tweet_picture = $_POST["tweet_picture"];


$query = $mysqli -> prepare("INSERT INTO tweets (tweet_text, tweet_picture) VALUE (?, ?)");
$query -> bind_param("ss", $tweet_text, $tweet_picture);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
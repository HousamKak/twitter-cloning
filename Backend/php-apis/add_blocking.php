<?php

include("connection.php");

$blocked_id = $_POST["blocked_id"];
$user_id = $_POST["user_id"];

$query = $mysqli->prepare("INSERT INTO blocked_blockers (blocked_id, user_id) VALUE (?, ?)");
$query->bind_param("ii", $blocked_id, $user_id);
$query->execute();


$following_id = $_POST["following_id"];
$follower_id = $_POST["follower_id"];

$query2 = $mysqli -> prepare("DELETE FROM following_followers WHERE following_id = ? & follower_id = ?");
$query2 -> bind_param("ii", $following_id, $follower_id);
$query2 -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

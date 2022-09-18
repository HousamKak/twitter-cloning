<?php

include("connection.php");

$user_id = $_POST["user_id"];

$query = $mysqli->prepare("SELECT tweet_text, tweet_picture FROM tweets WHERE user_id = ?");
$query->bind_param("s", $user_id);
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>

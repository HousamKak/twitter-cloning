<?php

include("connection.php");

$user_id = $_POST["user_id"];
$tweet_text = $_POST["tweet_text"];
$tweet_picture = $_POST["tweet_picture"];
// $base_to_img = base64_decode($tweet_picture);



// I retrieved some code from google.



// $size = getImageSizeFromString($base_to_img);
// if (empty($size['mime']) || strpos($size['mime'], 'image/') !== 0) {
//     die('Base64 value is not a valid image');
// }
// $ext = substr($size['mime'], 6);
// $img_file = "tweeted_pictures/filename.{$ext}";

$query = $mysqli -> prepare("INSERT INTO tweets (user_id ,tweet_text, tweet_picture) VALUE (?, ?, ?)");
$query -> bind_param("iss", $user_id, $tweet_text, $tweet_picture);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
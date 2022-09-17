<?php

include("connection.php");

$blocked_id = $_POST["blocked_id"];
$blocker_id = $_POST["blocker_id"];

$query = $mysqli -> prepare("INSERT INTO blocked_blockers (blocked_id, blocker_id) VALUE (?, ?)");
$query -> bind_param("ii", $blocked_id, $blocker_id);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>
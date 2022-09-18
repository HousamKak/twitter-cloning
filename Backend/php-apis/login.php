<?php

include("connection.php");

//getting the data from the frontend 
$user_name = $_POST["user_name"];

// hashing the password
$user_password = hash("sha256", $_POST["user_password"]);
$user_password .= "a";

// getting the query result
$query = $mysqli->prepare("SELECT user_name, user_password FROM users where user_name=?");
$query->bind_param("s", $user_name);
$query->execute();
$array = $query->get_result();

// Constructing emoty array
$response = [];

// Check initially if the user exists
if ($array->num_rows == 1) {
    $response["ispresent"] = true;

    // fetching the data base password 
    $data_base_pass = $array->fetch_assoc()['user_password'];

    //  Check for the validity of input password
    if ($data_base_pass != $user_password) {
        $response["pass_valid"] = false;
    } else {
        $response["pass_valid"] = true;
    }
} else {
    $response["ispresent"] = false;
}

// Sending the json object
$json = json_encode($response);
echo $json;

?>

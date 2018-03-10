<?php
header('Content-Type: application/json');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$to = "stephany@pdlawomaha.com";
$subject = "Form Enquiry";

$name = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$title = $_POST['title'];

$email_message = "Title: ".$title. "\n";
$email_message .= "Name: ".$name."\n";
$email_message .= "Email: ".$email."\n";
$email_message .= "Telephone: ".$phone."\n";
$email_message .= "Message: ".$text."\n";
$headers = "From:".$email."\r\n".
mail($to,$subject,$email_message);
?>

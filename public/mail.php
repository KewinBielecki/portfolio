<?php
$to      = 'kewinbielecki@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$message .= 'Dziękujemy za wysłanie formularza';	// Komunikat
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8\r\n';

mail($to, $subject, $message, $headers);
?>
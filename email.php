<?php
$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$message = $_GET['message'];

header('Content-Type: application/json');

$subject = 'Заявка с сайта';
$content = "Имя: $name\nEmail: $email\nТелефон: $phone\nСообщение: $message";
$copy = "$name, добрый день. Благодарим вас за обращение, мы свяжемся с вами в ближайшее время.\nВаше сообщение:\n$message.\n\nС уважением,\nкоманда Semantis,\n+375 (29) 2624063\n+7 (921) 7750328\ninfo@semantis.by";

$semantis = 'info@semantis.by';

mail($semantis, $subject, $content, "Content-Type: text/plain; charset=\"utf-8\"\n From: $email") or die('Error!');

if (isset($_GET['copy'])) {
mail($email, 'Копия письма Semantis', $copy, "Content-Type: text/plain; charset=\"utf-8\"\n From: $semantis") or die('Error!');
}

echo json_encode('Email successfully sent!');
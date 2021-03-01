<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$messenger = $_POST['whatsapp']." ".$_POST['telegram']." ".$_POST['viber'];
$description = $_POST['description'];
$message = $_POST['message'];

header('Content-Type: application/json');

$subject = 'Заявка с сайта';
$content = "Имя: $name\nEmail: $email\nТелефон: $phone\nМессенджер для связи: $messenger\n\n$description\n\n$message";
$copy = "$name, добрый день. Благодарим Вас за обращение.\nВаше сообщение: \n$description\n\n$message\n\nМы свяжемся с Вами в ближайшее время!\n\nС уважением,\nкоманда Semantis,\n+375 (29) 2624063\n+7 (921) 7750328\ninfo@semantis.by";

$semantis = 'info@semantis.by';

mail($semantis, $subject, $content, "Content-Type: text/plain; charset=\"utf-8\"\n From: $email") or die('Error!');

if (isset($_GET['copy'])) {
mail($email, 'Копия письма Semantis', $copy, "Content-Type: text/plain; charset=\"utf-8\"\n From: $semantis") or die('Error!');
}

echo json_encode('Email successfully sent!');
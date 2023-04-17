<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.8.0/src/Exception.php';
require 'PHPMailer-6.8.0/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.8.0/language/');
$mail->IsHTML(true);

$mail->setFrom('everlast1ng7@mail.ru', 'Арсений Техническое Задание');
$mail->addAddress('art-css@yandex.ru');
$mail->Subject = 'Hello!';

$body = 'This is letter!';

if(trim(!empty($_POST))){
    $body.='<p>E-mail: '.$_POST['email'].'</p>';
};

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
} else {
    $message = 'Successfull!';
};

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
<?php

  $userName = $_POST['userName'];
  $userEmail = $_POST['userEmail'];
  $userPassword = $_POST['userPassword'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 4;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'trew.tr2019@gmail.com';                     // SMTP username
    $mail->Password   = 'Vladlen1973';                               // SMTP password
    $mail->SMTPSecure = 'TLS';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('trew.tr2019@gmail.com', 'Тимур');
    $mail->addAddress('trew.tr2019@yandex.ru');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка c сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его почта: ${userEmail}, его пароль: ${userPassword}";

    

    if ($mail->send()) {
      echo "Успех, письмо отправлено";
    } else {
      echo "Ошибка, письмо не отправлено, код ошибки: {$mail->ErrorInfo}";
    }
    

} catch (Exception $e) {
    echo "Ошибка, письмо не отправлено, код ошибки: {$mail->ErrorInfo}";
}


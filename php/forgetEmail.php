<?php
// Exception
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';
require './PHPMailer-master/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer();
$m_email = $_POST["forgetEmail"];
$href = $_POST["href"];
$md5_email = base64_encode($_POST["forgetEmail"]);
$url=base64_encode('memId='.$m_email);
try {

    require_once("./connectBook.php");
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->SMTPSecure = "ssl";                                   // Enable SMTP authentication
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;
    $mail->Username   = 'checkie102@gmail.com';                     // SMTP username
    $mail->Password   = 'ed102ed102';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->CharSet = "utf-8";
    //Recipients
    $mail->setFrom('checkie102@gmail.com', 'checkie');
    $mail->addAddress("$m_email", 'User');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // 加入附檔
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // 信件內容
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Checkie 忘記密碼確認信';
    // 信件內容放下面~~~ 想加內容都可以加喔~
    $mail->Body    = '點擊網址列以更改密碼 <a href="'.$href.'?'.$url.'">'.$href.'?'.$url.'</a>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
    
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>

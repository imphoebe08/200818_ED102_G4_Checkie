<?php
$dsn="mysql:host=localhost;port=3306;dbname=ed102g4;charset=utf8";
$user="ed102g4";
$password="ed102g4";
$options=array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo=new PDO($dsn, $user, $password, $options);
echo '123';
?>
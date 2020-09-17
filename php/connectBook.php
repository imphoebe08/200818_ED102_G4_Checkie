<?php
$dsn="mysql:host=localhost;port=3306;dbname=ed102g4;charset=utf8";
$user="root";
$password="root";
$options=array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo=new PDO($dsn, $user, $password, $options);

?>
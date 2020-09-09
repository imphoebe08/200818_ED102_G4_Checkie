<?php
        //此處建立初步PDO，登入資料庫 *port後面要使用「=」
        $dsn = "mysql:host=localhost;port=8889;dbname=books;charset=utf8";
        $user = "root";
        $password = "root";
        $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
        $pdo = new PDO($dsn, $user, $password, $options);
        
?>
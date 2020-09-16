<?php

$errMsg = "";
//連線資料庫
try {
    $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);


    $sql = "select * from text";

    $textInfo = $pdo->query($sql);
    $textRow = $textInfo->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($textRow, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

?>

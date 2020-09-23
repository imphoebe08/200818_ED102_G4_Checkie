<?php

session_start();
$memNo = $_SESSION["memNo"];
$csNo = $_REQUEST["csNo"];

$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");
    // 計算總頁數
    $sql = "INSERT INTO message (`csNo`, `memNo`, `mesFrom`, `mesContent`, `mesTime`, `mesBool`, `memRead`) 
            VALUES ($csNo, $memNo, 0, 'Hi!諮商師您好!', now() , 0, 0);";

    $type = $pdo->query($sql);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

<?php

session_start();
$memNo = $_SESSION["memNo"];
$csNo = $_REQUEST["csNo"];

$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");
    $sql1 = "INSERT INTO message (`csNo`, `memNo`, `mesFrom`, `mesContent`, `mesTime`, `mesBool`, `memRead`) 
    VALUES ($csNo, $memNo, 1, 'Hi!歡迎跟我分享任何大小事哦!', now() , 0, 0);";

    $type1 = $pdo->query($sql1);
    

    $sql2 = "INSERT INTO message (`csNo`, `memNo`, `mesFrom`, `mesContent`, `mesTime`, `mesBool`, `memRead`) 
            VALUES ($csNo, $memNo, 0, 'Hi!諮商師您好!', now() , 0, 0);";

    $type2 = $pdo->query($sql2);

} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

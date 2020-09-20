<?php

$textNo = $_REQUEST["textNo"];
$textTypeNo = $_REQUEST["textTypeNo"];
$textContent = $_REQUEST["textContent"];


$errMsg = "";
//連線資料庫
try {
    //$dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    //$user = "root";
    //$password = "root";
    //$options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    //$pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");

    $sql = "update text 
            set textTypeNo = :textTypeNo, 
                textContent = :textContent
            where (textNo = :textNo)";
            
    $textInfo = $pdo->prepare($sql);
    $textInfo->bindValue(':textNo', $textNo);
    $textInfo->bindValue(':textTypeNo', $textTypeNo);
    $textInfo->bindValue(':textContent', $textContent);
    
    $textInfo->execute();
    echo "問券修改成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

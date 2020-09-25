<?php
$cardNo = $_REQUEST["cardNo"];
$cardTitle = $_REQUEST["cardTitle"];
$cardContent = $_REQUEST["cardContent"];
$cardPic = $_REQUEST["cardPic"];
$cardTypeNo = $_REQUEST["cardTypeNo"];
$deckNo = $_REQUEST["deckNo"];
$errMsg = "";
$errMsg = "";
//連線資料庫
try {
    require_once('./connectBook.php');
    // $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);


    $sql = "INSERT INTO card (cardTitle, cardContent,cardPic,cardTypeNo,deckNo)
            VALUES (:cardTitle, :cardContent,:cardPic , :cardTypeNo, :deckNo);
    ";
    $csInfo = $pdo->prepare($sql);
    // $csInfo->bindValue(':cardNo', $cardNo);
    $csInfo->bindValue(':cardTitle', $cardTitle);
    $csInfo->bindValue(':cardContent', $cardContent);
    $csInfo->bindValue(':cardPic', $cardPic);
    $csInfo->bindValue(':cardTypeNo', $cardTypeNo);
    $csInfo->bindValue(':deckNo', $deckNo);
    $csInfo->execute();
    echo "卡片新增成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

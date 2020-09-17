<?php

$errMsg = "";
//連線資料庫
try {
    $pageNow = $_REQUEST['pageNow'];
    // $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");

    $sql = "SELECT * FROM member;";
    $total = $pdo->query($sql);
    $totalCount = $total->rowCount();
    $totalPage = ceil($totalCount / 10);

    $limit_low = $pageNow * 10 - 10;
    $limit_high = 10;

    $sql = "SELECT * 
            FROM member 
            limit $limit_low, $limit_high";


    $memInfo = $pdo->query($sql);
    $memRow = $memInfo->fetchAll(PDO::FETCH_ASSOC);

    $result = array("memberData" => $memRow);
    array_push($result, $totalPage);



    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

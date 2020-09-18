<?php


$errMsg = "";
//連線資料庫
try {
    $admName = $_REQUEST["admName"];
    $admId = $_REQUEST["admId"];
    $admPsn = $_REQUEST["admPsn"];
    // $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");

    $sql = "INSERT INTO admin (admName, admId, admPsn)
            VALUES (:admName , :admId, :admPsn);
    ";
    $csInfo = $pdo->prepare($sql);
    $csInfo->bindValue(':admName', $admName);
    $csInfo->bindValue(':admId', $admId);
    $csInfo->bindValue(':admPsn', $admPsn);
    $csInfo->execute();
    echo "管理員新增成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

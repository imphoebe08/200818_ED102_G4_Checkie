<?php
$csName = $_REQUEST["csName"];
$csId = $_REQUEST["csId"];
$csPsd = $_REQUEST["csPsd"];
$csBD = $_REQUEST["csBD"];
$csGender = $_REQUEST["csGender"];
$csEmail = $_REQUEST["csEmail"];
$csTel = $_REQUEST["csTel"];
$csPic = $_REQUEST["csPic"];
$csPosNo = $_REQUEST["csPosNo"];
$csBool = $_REQUEST["csBool"];
$csHis = $_REQUEST["csHis"];
$csEdu = $_REQUEST["csEdu"];
$csType0 = $_REQUEST["csType0"];
$csType1 = $_REQUEST["csType1"];
$csType2 = $_REQUEST["csType2"];
$csType3 = $_REQUEST["csType3"];
$csType4 = $_REQUEST["csType4"];

$errMsg = "";
//連線資料庫
try {
    $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);


    $sql = "INSERT INTO counselor (`csName`, `csId`, `csPsd`, `csBD`, `csGender`, `csEmail`, `csTel`, `csPic`, `csPosNo`, `csBool`, `csHis`, `csEdu`) 
                 VALUES (:csName, :csId, :csPsd, :csBD, :csGender, :csEmail, :csTel, :csPic, :csPosNo ,:csBool, :csHis, :csEdu);
           
            INSERT INTO cstype (`csNo`, `csTypeNo`, `csTestValue`) 
                VALUES  (last_insert_id(), 1, :csType0),
                        (last_insert_id(), 2, :csType1),
                        (last_insert_id(), 3, :csType2),
                        (last_insert_id(), 4, :csType3),
                        (last_insert_id(), 5, :csType4);";

    $csInfo = $pdo->prepare($sql);
    $csInfo->bindValue(':csName', $csName);
    $csInfo->bindValue(':csId', $csId);
    $csInfo->bindValue(':csPsd', $csPsd);
    $csInfo->bindValue(':csBD', $csBD);
    $csInfo->bindValue(':csGender', $csGender);
    $csInfo->bindValue(':csEmail', $csEmail);
    $csInfo->bindValue(':csTel', $csTel);
    $csInfo->bindValue(':csPic', $csPic);
    $csInfo->bindValue(':csPosNo', $csPosNo);
    $csInfo->bindValue(':csBool', $csBool);
    $csInfo->bindValue(':csHis', $csHis);
    $csInfo->bindValue(':csEdu', $csEdu);
    $csInfo->bindValue(':csType0', $csType0);
    $csInfo->bindValue(':csType1', $csType1);
    $csInfo->bindValue(':csType2', $csType2);
    $csInfo->bindValue(':csType3', $csType3);
    $csInfo->bindValue(':csType4', $csType4);
    $csInfo->execute();

    echo "管理員新增成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

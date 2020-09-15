<?php

$csNo = $_REQUEST["csNo"];
$csName = $_REQUEST["csName"];
$csId = $_REQUEST["csId"];
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


    $sql = "UPDATE `counselor` 
            SET `csName` = :csName, 
                `csId` = :csId, 
                `csBD` = :csBD, 
                `csGender` = :csGender, 
                `csEmail` = :csEmail, 
                `csTel` = :csTel, 
                `csPic` = :csPic, 
                `csPosNo` = :csPosNo, 
                `csBool` = :csBool, 
                `csHis` = :csHis, 
                `csEdu` = :csEdu
            WHERE (`csNo` = :csNo);

            UPDATE `cstype` SET `csTestValue` = :csType0 WHERE (`csNo` = :csNo) and (`csTypeNo` = '1');
            UPDATE `cstype` SET `csTestValue` = :csType1 WHERE (`csNo` = :csNo) and (`csTypeNo` = '2');
            UPDATE `cstype` SET `csTestValue` = :csType2 WHERE (`csNo` = :csNo) and (`csTypeNo` = '3');
            UPDATE `cstype` SET `csTestValue` = :csType3 WHERE (`csNo` = :csNo) and (`csTypeNo` = '4');
            UPDATE `cstype` SET `csTestValue` = :csType4 WHERE (`csNo` = :csNo) and (`csTypeNo` = '5');
    ";
    $csInfo = $pdo->prepare($sql);
    $csInfo->bindValue(':csNo', $csNo);
    $csInfo->bindValue(':csName', $csName);
    $csInfo->bindValue(':csId', $csId);
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
    echo "會員修改成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

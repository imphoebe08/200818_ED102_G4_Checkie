<?php

$errMsg = "";
//連線資料庫
try {
    $csNo = $_REQUEST["csNo"];
    $csName = isset($_REQUEST["csName"]) ? $_REQUEST["csName"] : "noName";
    $csId = isset($_REQUEST["csId"]) ? $_REQUEST["csId"] : "noId";
    $csBD = isset($_REQUEST["csBD"]) ? $_REQUEST["csBD"] : "1970-01-01";
    $csGender = isset($_REQUEST["csGender"]) ? $_REQUEST["csGender"] : "m";
    $csEmail = isset($_REQUEST["csEmail"]) ? $_REQUEST["csEmail"] : "noEmail";
    $csTel = isset($_REQUEST["csTel"]) ? $_REQUEST["csTel"] : "noTel";
    $csPic = isset($_REQUEST["csPic"]) ? $_REQUEST["csPic"] : "https://www.csmu.edu.tw/var/file/0/1000/plugin/mobile/pictures/linkdet_1567_64639_22966.jpg";
    $csPosNo = isset($_REQUEST["csPosNo"]) ? $_REQUEST["csPosNo"] : "1";
    $csBool = isset($_REQUEST["csBool"]) ? $_REQUEST["csBool"] : "1";
    $csHis = isset($_REQUEST["csHis"]) ? $_REQUEST["csHis"] : "未填經歷";
    $csEdu = isset($_REQUEST["csEdu"]) ? $_REQUEST["csEdu"] : "未填學歷";
    $csType0 = isset($_REQUEST["csType0"]) ? $_REQUEST["csType0"] : "50";
    $csType1 = isset($_REQUEST["csType1"]) ? $_REQUEST["csType1"] : "50";
    $csType2 = isset($_REQUEST["csType2"]) ? $_REQUEST["csType2"] : "50";
    $csType3 = isset($_REQUEST["csType3"]) ? $_REQUEST["csType3"] : "50";
    $csType4 = isset($_REQUEST["csType4"]) ? $_REQUEST["csType4"] : "50";

    // $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");

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

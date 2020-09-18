<?php


$errMsg = "";
//連線資料庫
try {
    $csName = isset($_REQUEST["csName"]) ? $_REQUEST["csName"] : "noName";
    $csId = isset($_REQUEST["csId"]) ? $_REQUEST["csId"] : "noId";
    $csPsd = $_REQUEST["csPsd"];
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

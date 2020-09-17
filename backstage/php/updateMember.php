<?php



$errMsg = "";
//連線資料庫
try {

    $memNo = $_REQUEST["memNo"];
    $memId = $_REQUEST["memId"];
    $memName = $_REQUEST["memName"];
    $memNickname = isset($_REQUEST["memNickname"]) ? $_REQUEST["memNickname"] : $_REQUEST["memName"];
    $memGender = isset($_REQUEST["memGender"]) ? $_REQUEST["memGender"] : "m";
    $memBD = isset($_REQUEST["memBD"]) ? $_REQUEST["memBD"] : "1970-01-01";
    $memTel = isset($_REQUEST["memTel"]) ? $_REQUEST["memTel"] : "電話";
    $memAdd = isset($_REQUEST["memAdd"]) ? $_REQUEST["memAdd"] : "地址";
    $memPic = isset($_REQUEST["memPic"]) ? $_REQUEST["memPic"] : "https://www.csmu.edu.tw/var/file/0/1000/plugin/mobile/pictures/linkdet_1567_64639_22966.jpg";
    $memOccupation = isset($_REQUEST["memOccupation"]) ? $_REQUEST["memOccupation"] : "職業";
    $memBool = $_REQUEST["memBool"];
    // $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");

    $sql = "UPDATE `member` 
            SET `memName` = :memName,  
            `memId` = :memId, 
            `memBD` = :memBD, 
            `memNickname` = :memNickname, 
            `memGender` = :memGender, 
            `memTel` = :memTel, 
            `memAdd` = :memAdd, 
            `memPic` = :memPic, 
            `memBool` = :memBool, 
            `memOccupation` = :memOccupation 
            WHERE (`memNo` = :memNo);
    ";
    $memInfo = $pdo->prepare($sql);
    $memInfo->bindValue(':memNo', $memNo);
    $memInfo->bindValue(':memName', $memName);
    $memInfo->bindValue(':memId', $memId);
    $memInfo->bindValue(':memBD', $memBD);
    $memInfo->bindValue(':memNickname', $memNickname);
    $memInfo->bindValue(':memGender', $memGender);
    $memInfo->bindValue(':memTel', $memTel);
    $memInfo->bindValue(':memAdd', $memAdd);
    $memInfo->bindValue(':memPic', $memPic);
    $memInfo->bindValue(':memBool', $memBool);
    $memInfo->bindValue(':memOccupation', $memOccupation);
    $memInfo->execute();
    echo "會員修改成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

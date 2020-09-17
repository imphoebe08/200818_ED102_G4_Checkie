<?php
try{
    // session_start();
    require_once("./connectBook666.php");


    $sql = "
    INSERT INTO `csorder` (`csNo`, `memNo`, `csODate`, `csModeNo`, `csPosNo`, `csOCost`, `csOTime`, `csOAnticipate`, `csOTopic`,`csOTalk`,`csName`,`csGender`,`csBD`,`csAdd`,`csOcc`,`csTel`,`csEmail`,`csHour`,`csPayment`) 
    VALUES (:csNo, :memNo , :csODate , :csModeNo , :csPosNo, :csOCost ,current_date(), :csOAnticipate, :csOTopic, :csOTalk, :csName , :csGender, :csBD, :csAdd,:csOcc,concat(:csTelA,',',:csTelB),:csEmail,:csHour,:csPayment);
    ";
    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);


    $memberOrder->bindValue(":memNo", $_POST["memNo"]);
    $memberOrder->bindValue(":csName", $_POST["csName"]);
    $memberOrder->bindValue(":csGender", $_POST["csGender"]);
    $memberOrder->bindValue(":csBD", $_POST["csBD"]);
    $memberOrder->bindValue(":csAdd", $_POST["csAdd"]);
    $memberOrder->bindValue(":csOcc", $_POST["csOcc"]);
    $memberOrder->bindValue(":csEmail", $_POST["csEmail"]);
    $memberOrder->bindValue(":csTelA", $_POST["csTelA"]);
    $memberOrder->bindValue(":csTelB", $_POST["csTelB"]);

    $memberOrder->bindValue(":csHour", $_POST["csHour"]);
    $memberOrder->bindValue(":csPayment", $_POST["csPayment"]);

    $memberOrder->bindValue(":csNo", $_POST["csNo"]);

    $memberOrder->bindValue(":csODate", $_POST["csODate"]);
    $memberOrder->bindValue(":csModeNo", $_POST["csModeNo"]);
    $memberOrder->bindValue(":csPosNo", $_POST["csPosNo"]);
    $memberOrder->bindValue(":csOCost", $_POST["csOCost"]);
    $memberOrder->bindValue(":csOAnticipate", $_POST["csOAnticipate"]);

    $memberOrder->bindValue(":csOTopic", $_POST["csOTopic"]);
    $memberOrder->bindValue(":csOTalk", $_POST["csOTalk"]);


    //$memNo = $_POST["memNo"];
    // $acName = $_POST["acName"];
    // $acBD = $_POST["acBD"];
    // $acEmail = $_POST["acEmail"];
    // $acTelA = $_POST["acTelA"];
    // $acTelB = $_POST["acTelB"];
    // $actNo = $_POST["actNo"];
    // $acTicket = $_POST["acTicket"];
    // $acPrice = $_POST["acPrice"];
    // $csPayment = $_POST["acPayment"];
    // $acGender = $_POST["acGender"];
    // $memberOrder->bindParam(":memNo", $memNo);
    // $memberOrder->bindParam(":acName", $acName);
    // $memberOrder->bindParam(":acGender", $acGender);
    // $memberOrder->bindParam(":acBD", $acBD);
    // $memberOrder->bindParam(":acEmail", $acEmail);
    // $memberOrder->bindParam(":acTelA", $acTelA);
    // $memberOrder->bindParam(":acTelB", $acTelB);
    // $memberOrder->bindParam(":actNo", $actNo);
    // $memberOrder->bindParam(":acTicket", $acTicket);
    // $memberOrder->bindParam(":acPrice", $acPrice);
    // $memberOrder->bindValue(":acPayment", $acPayment);

    $memberOrder->execute();
    echo 'suss';


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

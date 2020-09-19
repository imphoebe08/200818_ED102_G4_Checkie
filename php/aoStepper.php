<?php
try{
    // session_start();
    require_once("./connectBook666.php");

    // $sql = "
    // insert into actorder (`memNo`, `actNo`, `actOTime`, `acBD`, `acName`, `acTel`, `acGender`, `acEmail`,`acTicket`,`acPrice`,`acPayment`) 
    // VALUES (:memNo , :actNo, current_date(), :acBD, :acName,'886,986789123', :acGender, :acEmail,:acTicket,:acPrice,:acPayment)
    // ";

    $sql = "
    INSERT INTO `actorder` ( `memNo`, `actNo`, `actOTime`, `acBD`, `acName`, `acTel`, `acGender`, `acEmail`,`acTicket`,`acPrice`,`acPayment`) 
VALUES (:memNo, :actNo, current_date(), :acBD ,:acName , concat(:acTelA,',',:acTelB), :acGender, :acEmail,:acTicket,:acPrice,:acPayment);
    ";
    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);


    // $memberOrder->bindValue(":memNo", $_POST["memNo"]);
    // $memberOrder->bindValue(":acName", $_POST["acName"]);
    // $memberOrder->bindValue(":acGender", $_POST["acGender"]);
    // $memberOrder->bindValue(":acBD", $_POST["acBD"]);
    // $memberOrder->bindValue(":acEmail", $_POST["acEmail"]);
    // $memberOrder->bindValue(":acTelA", $_POST["acTelA"]);
    // $memberOrder->bindValue(":acTelB", $_POST["acTelB"]);
    // $memberOrder->bindValue(":actNo", $_POST["actNo"]);
    // $memberOrder->bindValue(":acTicket", $_POST["acTicket"]);
    // $memberOrder->bindValue(":acPrice", $_POST["acPrice"]);
    // $memberOrder->bindValue(":acPayment", $_POST["acPrice"]);

    $memNo = $_POST["memNo"];
    $acName = $_POST["acName"];
    $acBD = $_POST["acBD"];
    $acEmail = $_POST["acEmail"];
    $acTelA = $_POST["acTelA"];
    $acTelB = $_POST["acTelB"];
    $actNo = $_POST["actNo"];
    $acTicket = $_POST["acTicket"];
    $acPrice = $_POST["acPrice"];
    $acPayment = $_POST["acPayment"];
    $acGender = $_POST["acGender"];
    $memberOrder->bindParam(":memNo", $memNo);
    $memberOrder->bindParam(":acName", $acName);
    $memberOrder->bindParam(":acGender", $acGender);
    $memberOrder->bindParam(":acBD", $acBD);
    $memberOrder->bindParam(":acEmail", $acEmail);
    $memberOrder->bindParam(":acTelA", $acTelA);
    $memberOrder->bindParam(":acTelB", $acTelB);
    $memberOrder->bindParam(":actNo", $actNo);
    $memberOrder->bindParam(":acTicket", $acTicket);
    $memberOrder->bindParam(":acPrice", $acPrice);
    $memberOrder->bindParam(":acPayment", $acPayment);

    $memberOrder->execute();
    echo $memNo;


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

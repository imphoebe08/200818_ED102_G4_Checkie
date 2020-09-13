<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "INSERT INTO `ed102g4`.`actorder` (`memNo`, `actNo`, `actOTime`, `acBD`, `acName`, `acTel`, `acGender`, `acEmail`,`acTicket`,`acPrice`,`acPayment`) VALUES (:memNo, :actNo, current_date(), :acBD, :acName, concat(:acTelA,',',:acTelAB), :acGender, :acEmail,:acTicket,:acPrice,:acPayment);";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberOrder->bindValue(":memNo", $_POST["memNo"]);
    $memberOrder->bindValue(":acName", $_POST["acName"]);
    $memberOrder->bindValue(":acGender", $_POST["acGender"]);
    $memberOrder->bindValue(":acBD", $_POST["acBD"]);
    $memberOrder->bindValue(":acEmail", $_POST["acEmail"]);
    $memberOrder->bindValue(":acTelA", $_POST["acTelA"]);
    $memberOrder->bindValue(":acTelB", $_POST["acTelB"]);
    $memberOrder->bindValue(":actNo", $_POST["actNo"]);

    $memberOrder->bindValue(":acTicket", $_POST["acTicket"]);
    $memberOrder->bindValue(":acPrice", $_POST["acPrice"]);
    $memberOrder->bindValue(":acPayment", $_POST["acPayment"]);

    $memberOrder->execute();
    
    echo "訂購成功";

    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

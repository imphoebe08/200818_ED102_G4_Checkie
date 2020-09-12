<?php
try{
    session_start();
    require_once("./connectBook.php");
    $chatBox=$_POST["chatBox"];
    $csNo=$_POST["csNo"];
    $sql = "SET foreign_key_checks = 0;insert into message 
    (csNo, memNo, mesFrom, mesContent,mesTime,mesBool) 
    values (:csNo,:memNo, '0', :chatBox,now(),0)";
    $message = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$message->bindValue(":memNo", $memNo);

    $message->bindValue(":memNo", 1);
    $message->bindValue(":chatBox", $chatBox);
    $message->bindValue(":csNo", $csNo);
    $message->execute();
    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

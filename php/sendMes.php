<?php
try{
    session_start();
    require_once("./connectBook.php");
    $chatBox=$_POST["chatBox"];
    $csNo=$_POST["csNo"];
    $sql = "SET FOREIGN_KEY_CHECKS=0;
    INSERT INTO `message` (`csNo`, `memNo`, `mesFrom`, `mesContent`, `mesTime`, `mesBool`, `memRead`) VALUES (:csNo, :memNo, '0', :chatBox, current_time(), '0', '1');
    SET FOREIGN_KEY_CHECKS=1;";
    $message = $pdo->prepare($sql);
    // 正確做法
    $memNo = $_SESSION["memNo"];
    $message->bindValue(":memNo", $memNo);

    // $message->bindValue(":memNo", 1);
    $message->bindValue(":chatBox", $chatBox);
    $message->bindValue(":csNo", $csNo);
    $message->execute();
    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

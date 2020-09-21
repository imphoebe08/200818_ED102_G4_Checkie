<?php
    try{
        require_once("./connectBook.php");
    
        $sql = "DELETE FROM `artcollect` WHERE (`memNo` = :memNo) and (`artNo` = :artNo);";
    
        $memberOrder = $pdo->prepare($sql);

        $memberOrder->bindValue(":memNo", $_POST["memNo"]);
        $memberOrder->bindValue(":artNo", $_POST["artNo"]);
        $memberOrder->execute();

        echo '成功刪除';
    
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
?>

<?php
    try{
        require_once("./connectBook.php");
    
        $sql = "DELETE FROM `actcollect` WHERE (`memNo` = :memNo) and (`actNo` = :actNo);";
    
        $memberOrder = $pdo->prepare($sql);

    
        $memberOrder->bindValue(":memNo", $_POST["memNo"]);
        $memberOrder->bindValue(":actNo", $_POST["actNo"]);
        $memberOrder->execute();

        echo '成功刪除';
    
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
?>

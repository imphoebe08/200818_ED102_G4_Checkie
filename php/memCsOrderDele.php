<?php
    try{
        require_once("./connectBook.php");
    
        $sql = "delete  from csorder
        where csONo = :csONo;";
    
        $memberOrder = $pdo->prepare($sql);

    
        $memberOrder->bindValue(":csONo", $_POST["csONo"]);
        $memberOrder->execute();
    
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    
?>

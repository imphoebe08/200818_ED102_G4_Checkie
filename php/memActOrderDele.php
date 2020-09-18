<?php
    try{
        require_once("./connectBook666.php");
    
        $sql = "delete  from actorder
        where actONo = :actONo;";
    
        $memberOrder = $pdo->prepare($sql);

    
        $memberOrder->bindValue(":actONo", $_POST["actONo"]);
        $memberOrder->execute();

        echo '成功刪除';
    
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
?>

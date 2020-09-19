<?php
try{
    // session_start();
    require_once("./connectBook666.php");

    $coOrderModeType = $_REQUEST["coOrderModeType"];


    $sql = "
    SELECT * FROM csomode
    where csModeNo= :csModeNo;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    //$memberOrder->bindValue(":memNo", 1);
    $memberOrder->bindValue(":csModeNo", $coOrderModeType);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有方式???";
    }else{ 
    $memberOrderAll = $memberOrder->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

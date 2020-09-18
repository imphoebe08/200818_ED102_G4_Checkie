<?php
try{
    // session_start();
    require_once("./connectBook666.php");

    $sql = "SELECT pmNo, pmName FROM ed102g4.paymentMethod;";

    $paymentMethod = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $paymentMethod->execute();
    
    if( $paymentMethod->rowCount()==0){ 
    echo "沒有?";
    }else{ 
    $paymentMethodAll = $paymentMethod->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($paymentMethodAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

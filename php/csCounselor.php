<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $coOrderCsNo = $_REQUEST["coOrderCsNo"];


    $sql = "
    select csNo, csName, csPic, csPosNo
    from counselor
    where csNo = :csNo;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    //$memberOrder->bindValue(":memNo", 1);
    $memberOrder->bindValue(":csNo", $coOrderCsNo);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有訂單辣???";
    }else{ 
    $memberOrderAll = $memberOrder->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

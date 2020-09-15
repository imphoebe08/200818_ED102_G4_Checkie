<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "
    select csNo, csName, csPic, csPosNo
    from counselor
    where csNo = 19;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    //$memberOrder->bindValue(":memNo", 1);
    // $memberOrder->bindValue(":actONo", 9);
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

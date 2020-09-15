<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql ="            
    select  memName,
            memOccupation,
            memAdd,
            memNo,
            memBD,
            memEmail,
            memGender,
            memName,
            memTel
    from  member 
    where memNo = 1;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberOrder->bindValue(":memNo", 1);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有會員啊你是誰???";
    }else{ 
    $memberOrderAll = $memberOrder->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

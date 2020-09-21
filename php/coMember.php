<?php
try{
    // session_start();
    session_start();
    session_unset();
    require_once("./connectBook.php");
    if (isset($_SESSION["memNo"])) {
        $memNo = $_SESSION["memNo"];
    }else{
        $memNo = 0;
    };

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
    where memNo = :memNo;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberOrder->bindValue(":memNo", $memNo);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "0";
    }else{ 
    $memberOrderAll = $memberOrder->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

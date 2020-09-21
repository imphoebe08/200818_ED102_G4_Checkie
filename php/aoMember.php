<?php
try{
    session_start();
    require_once("./connectBook.php");

    if (isset($_SESSION["memNo"])) {
        $memNo = $_SESSION["memNo"];
    }else{
        $memNo = 0;
    };

    $sql ="select  memAdd,
                memNo,
                memBD,
                memEmail,
                memGender,
                memName,
                memOccupation,
                memTel
            from  member 
            where memNo = :memNo;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法


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

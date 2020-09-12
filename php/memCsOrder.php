<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "select a.csONo, date(a.csODate) 'csODate', b.csName, c.csPosName, b.csPic , a.csOCost ,d.csModeName, date(a.csOTime) 'csOTime', a.csOAnticipate, a.csOTopic, e.typeName
    from csorder a join counselor b using(csNo)  join csomode d using(csModeNo) join cspos c on a.csPosNo = c.csPosNo join type e on e.typeNo = a.csTypeNo
    where memNo = :memNo
    order by csODate;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberOrder->bindValue(":memNo", 1);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有訂單內容";
    }else{ 
    $memberOrderAll = $memberOrder->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

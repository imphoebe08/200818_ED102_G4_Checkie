<?php
try{
    // session_start();
    require_once("./connectBook666.php");
    $acOrderActNo = $_REQUEST["acOrderActNo"];

    $sql = "
    select  actNo, 
        actStart 'actStartAll',
        date(actStart) 'actStart',
        date(actEnd) 'actEnd', 
        time(actStart) 'actStartTime', 
        time(actEnd) 'actEndTime',
        hour(timediff(time(actEnd),time(actStart))) 'hour',
        minute(timediff(time(actEnd),time(actStart))) 'minute', 
        actName, 
        actHost, 
        actHostTitle , 
        actCost ,
        actAddress,
        actMin,
        actCount,
        actMax,
        weekday(actStart) 'week',
        actPic1
    from  activity 
    where actNo = :actONo;";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    //$memberOrder->bindValue(":memNo", 1);
    $memberOrder->bindValue(":actONo", $acOrderActNo);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有訂單內容???";
    }else{ 
    $memberOrderAll = $memberOrder->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

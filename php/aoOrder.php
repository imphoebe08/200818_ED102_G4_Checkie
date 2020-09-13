<?php
try{
    // session_start();
    require_once("./connectBook.php");

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
            actPicContent,
            actMin,
            actCount,
            actMax,
            weekday(actStart) 'week'
    from  activity b left join actPic c using(actNo) 
    where actNo = 9 and actPicNo = (select min(actPicNo)
    from  activity b left join actPic c using(actNo) 
                                    from actPic
                                    where actNo = 9)
    group by actNo";

    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    //$memberOrder->bindValue(":memNo", 1);
    // $memberOrder->bindValue(":actONo", 9);
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

<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "select  a.actONo, date(b.actStart) 'actStart', date(b.actEnd) 'actEnd', time(b.actStart) 'actStartTime', time(b.actEnd) 'actEndTime',hour(timediff(time(b.actEnd),time(b.actStart))) 'hour',minute(timediff(time(b.actEnd),time(b.actStart))) 'minute', b.actName, b.actHost, b.actHostTitle , b.actCost ,b.actAddress,c.actPicContent,b.actMin,b.actCount, date(a.actOTime) 'actOTime'
    from actorder a join activity b using(actNo) left join actPic c using(actNo)
    where memNo = :memNo
    group by actONo
    order by actStart;";

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

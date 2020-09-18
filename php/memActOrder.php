<?php
try{
    session_start();
    require_once("./connectBook666.php");
    //session應急
    $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];
    $sql = "select a.actONo, 
                date(b.actStart) 'actStart',
                date(b.actEnd) 'actEnd', 
                time(b.actStart) 'actStartTime', 
                time(b.actEnd) 'actEndTime',
                hour(timediff(time(b.actEnd),time(b.actStart))) 'hour',
                minute(timediff(time(b.actEnd),time(b.actStart))) 'minute', 
                b.actName, 
                b.actHost, 
                b.actHostTitle , 
                b.actCost ,
                b.actAddress,
                b.actPic1,
                b.actMin,
                b.actCount,
                b.actNo,
                date(a.actOTime) 'actOTime'
            from actorder a join activity b using(actNo) 
            where memNo = :memNo 
            order by actStart;";



    $memberOrder = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    $memberOrder->bindValue(":memNo", $memNo);

    // $memberOrder->bindValue(":memNo", $_POST["memNo"]);
    $memberOrder->execute();
    
    if( $memberOrder->rowCount()==0){ 
    echo "沒有訂單內容???";
    }else{ 
    $memberOrderAll = $memberOrder->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberOrderAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

<?php
try{
    // 一次只load 20筆 對話紀錄
    session_start();
    require_once("./connectBook.php");
    $sql = "select  time(a.mesTime) 
    from message a 
    join counselor b using(csNo)
    join member c on a.memNo = c.memNo
    where a.memNo = :memNo and a.mesBool=0 and csNo=(
    select csNo
    from message 
    where memNo = :memNo
    order by mesTime desc
    limit 1
    )
    order by a.mesNo asc";
    $mes = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$mes->bindValue(":memNo", $memNo);

    $mes->bindValue(":memNo", 1);
    $mes->execute();
    $rowNum = $mes->rowCount();
    $rowFrom = $rowNum -20;
    $sql = "select  a.mesContent,time(a.mesTime) 'mesTime',b.csName,b.csPic,c.memPic,a.mesFrom,a.csNo
    from message a 
    join counselor b using(csNo)
    join member c on a.memNo = c.memNo
    where a.memNo = :memNo and a.mesBool=0 and csNo=(
    select csNo
    from message 
    where memNo = :memNo
    order by mesTime desc
    limit 1
    )
    order by a.mesNo asc
    limit $rowFrom,$rowNum";
    $message = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$message->bindValue(":memNo", $memNo);

    $message->bindValue(":memNo", 1);
    $message->execute();
    $rowNum = $message->rowCount();
    if( $message->rowCount()==0){ 
    echo "{}";
    }else{ 
    $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);
   
    // $result = array("csName"=>$messageRow["csName"],"csPic"=>$messageRow["csPic"]);
    //           echo json_encode($result);
    //   }
    echo json_encode($messageRow,JSON_UNESCAPED_UNICODE);
    }
    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

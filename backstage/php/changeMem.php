<?php
try{
    
    session_start();
    require_once("./connectBook.php");
    $memNo = $_REQUEST["memNo"];
    // 已讀
    $sql2 = "UPDATE `message` SET `memRead` = 0  where memNo = :memNo and mesFrom=0 and csNo = :csNo;";
    $message2 = $pdo->prepare($sql2);
    // 正確做法
    $csNo = $_SESSION["csNo"];
    $message2->bindValue(":memNo", $memNo);

    // $message2->bindValue(":memNo", 1);
    $message2->bindValue(":csNo", $csNo);
    $message2->execute();
    // 抓聊天者
    // 一次只load 20筆 對話紀錄
    $sql = "
    select  a.mesContent,time(a.mesTime) 'mesTime',b.csName,b.csPic,c.memPic,a.mesFrom,a.csNo,a.mesNo
    from message a 
    join counselor b using(csNo)
    join member c on a.memNo = c.memNo
    where a.memNo = :memNo and a.mesBool=0 and csNo= :csNo
    order by a.mesNo desc
    limit 0,20";
    $message = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    // $message->bindValue(":memNo", 1);

    $message->bindValue(":memNo", $memNo);
    $message->bindValue(":csNo", $csNo);
    $message->execute();
    if( $message->rowCount()==0){ 
    echo "{}";
    }else{ 
    $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($messageRow,JSON_UNESCAPED_UNICODE);
    }

    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

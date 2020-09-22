<?php
try{
    
    session_start();
    require_once("./connectBook.php");
    // 已讀
    $csNo = $_REQUEST["csNo"];
    $mesNo = $_REQUEST["mesNo"];
    $sql2 = "UPDATE `message` SET `memRead` = 0  where memNo = :memNo and csNo = :csNo and mesNo > :mesNo";
    $message2 = $pdo->prepare($sql2);
    // 正確做法
    $memNo = $_SESSION["memNo"];
    $message2->bindValue(":memNo", $memNo);
    // $message2->bindValue(":memNo", 1);
    $message2->bindValue(":csNo", $csNo);
    $message2->bindValue(":mesNo", $mesNo);
    $message2->execute();
    // 抓聊天者
    $sql = "
    select  a.mesContent,time(a.mesTime) 'mesTime',b.csName,b.csPic,c.memPic,a.mesFrom,a.csNo,a.mesNo
    from message a 
    join counselor b using(csNo)
    join member c on a.memNo = c.memNo
    where a.memNo = :memNo and a.mesBool=0 and csNo=:csNo and mesNo > :mesNo
    order by a.mesNo desc";
    $message = $pdo->prepare($sql);
    // 正確做法
    $message->bindValue(":memNo", $memNo);
    // $message->bindValue(":memNo", 1);
    $message->bindValue(":csNo", $csNo);
    $message->bindValue(":mesNo", $mesNo);
    $message->execute();
    if( $message->rowCount()==0){ 
    echo "0";
    }else{ 
    $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($messageRow,JSON_UNESCAPED_UNICODE);
    }

    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

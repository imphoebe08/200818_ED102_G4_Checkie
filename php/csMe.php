<?php
try{
    session_start();
    require_once("./connectBook.php");
    $sql = " select  b.csName ,b.csPic,b.csNo,a.memRead
    from message a join counselor b 
    using(csNo)
    where memNo =:memNo  and mesBool=0 and memNo
    group by a.memRead
    order by a.mesNo desc";
    $message = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$message->bindValue(":memNo", $memNo);

    $message->bindValue(":memNo", 1);
    $message->execute();
    
    if( $message->rowCount()==0){ 
    echo "{}";
    }else{ 
    $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);
    
    // $result = array("csname"=>$messageRow["csname"],"csPic"=>$messageRow["csPic"]);
        echo json_encode($messageRow,JSON_UNESCAPED_UNICODE );
      }
    }catch(PDOException $e){
      echo $e->getMessage();
    };
    
?>

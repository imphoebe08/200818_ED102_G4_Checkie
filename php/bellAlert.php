<?php
try{
    session_start();
    require_once("./connectBook.php");
    $sql = "  select  max(a.memRead) 'memRead', b.csNo,max(a.mesNo)
    from message a join counselor b 
    using(csNo)
    where memNo=1 and mesFrom = 1
    group by b.csNo
    order by 3 desc;
";
    $message = $pdo->prepare($sql);
    // 正確做法
    $memNo = $_SESSION["memNo"];
    $message->bindValue(":memNo", $memNo);

    // $message->bindValue(":memNo", 1);
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

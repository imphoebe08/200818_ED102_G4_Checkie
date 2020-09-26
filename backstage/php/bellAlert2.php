<?php
try{
    session_start();
    require_once("./connectBook.php");
    $sql = "  select  max(a.memRead) 'memRead', b.memNo,max(a.mesNo)
    from message a join member b 
    using(memNo)
    where csNo=:csNo and mesFrom = 0
    group by b.memNo
    order by 3 desc;
";
    $message = $pdo->prepare($sql);
    // 正確做法
    $csNo = $_SESSION["csNo"];
    $message->bindValue(":csNo", $csNo);

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

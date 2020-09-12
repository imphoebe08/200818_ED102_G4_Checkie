<?php
try{
    session_start();
    require_once("./connectBook.php");
    $sql = "select  a.mesContent,a.mesTime,b.csName,b.csPic,c.memPic,a.mesFrom,a.csNo
    from message a 
    join counselor b using(csNo)
    join member c on a.memNo = c.memNo
    where a.memNo = :memNo and a.mesBool=0 and csNo=:csNo
    order by a.mesNo asc";
    $message = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$message->bindValue(":memNo", $memNo);
    $csNo = $_POST["csNo"];
    $message->bindValue(":memNo", 1);
    $message->bindValue(":csNo", $csNo);
    $message->execute();
    
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

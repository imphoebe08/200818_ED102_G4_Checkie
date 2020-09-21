<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql ="select csONo
    FROM csorder
    where memNo = :memNo and date(csOTime) = (select max(date(csOTime))
                                        from  csorder
                                        where memNo = :memNo)
                    and csONo = (select max(csONo)
                                    from csorder
                                    where memNo = :memNo)
    order by csOTime desc
    limit 1;";

    $orderNum = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $orderNum->bindValue(":memNo", $_POST['memNo']);
    $orderNum->execute();
    
    if( $orderNum->rowCount()==0){ 
    echo "沒有號碼???";
    }else{ 
    $orderNumAll = $orderNum->fetch(PDO::FETCH_ASSOC);
        echo json_encode($orderNumAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

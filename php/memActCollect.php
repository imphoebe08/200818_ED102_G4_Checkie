<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    // $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];

    $sql = "select 	a.memNo, 
                a.actNo ,
                b.actName,
                date(b.actPstart) 'actPstart',
                date(b.actStart) 'actStart',
                b.actHost, 
                b.actHostTitle , 
                b.actCost ,
                b.actAddress,
                b.actPic1,
                b.actMin,
                b.actCount
            from actcollect a join activity b using(actNo)
            where memNo = :memNo
            order by b.actStart desc;";

    $memberActCol = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberActCol->bindValue(":memNo", $memNo);
    $memberActCol->execute();
    
    if( $memberActCol->rowCount()==0){ 
    echo "沒有推薦內容";
    }else{ 
    $memberActColAll = $memberActCol->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberActColAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    // $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNo"];

    $sql = "
    select a.actName, 
        b.actTypeNo , 
        date(a.actPstart) 'actPstart',
        rpad(substr(a.actContent,1,16),20,'.') 'actContent',
        date(a.actStart) 'actStart',   
            a.actPic1,
            a.actNo
    from activity a join activitytype b using(actno) 
    where b.actTypeNo = (
    SELECT t.testResultTypeNo FROM testresult t 
                                join memtest mt on (t.memTestNo = mt.memTestNo 
                                and mt.memTestNo = (SELECT memTestNo FROM memtest  
                                                    where memNo = :memNo
                                                    order by memTestTime desc limit 1))
                                                        order by mt.memTestTime desc,t.testResultValue limit 1
    ) and a.actStart > current_date() 
    order by actStart limit 5;
";

    $memberArtRec = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberArtRec->bindValue(":memNo", $memNo);
    $memberArtRec->execute();
    
    if( $memberArtRec->rowCount()==0){ 
    echo "沒有推薦內容";
    }else{ 
    $memberArtRecAll = $memberArtRec->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberArtRecAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

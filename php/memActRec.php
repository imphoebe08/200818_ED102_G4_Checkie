<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "select a.actName, 
                rpad(substr(actContent,1,16),20,'.') 'actContent',
                date(a.actStart) 'actStart', 
                c.actPicContent, 
                group_concat(distinct d.actTypeNo) 'actTypeNo',
                f.testResultTypeNo
            from activity a join counselor b using(csNo) 
                        join actpic c using(actno) 
                        join activitytype d using(actNo) 
                        join type e on e.typeNo = d.actTypeNo 
                        join testresult f on f.testResultTypeNo = d.actTypeNo 
                        join memtest g using(memTestNo)
            WHERE memNo = 1  and testResultTypeNo = (select testResultTypeNo
                                                from testresult
                                                having max(testResultValue))
            group by actno 
            order by actStart desc limit 5;";

    $memberArtRec = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberArtRec->bindValue(":memNo", 1);
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

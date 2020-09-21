<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];

    $sql = "
    SELECT h.actName, 
            date(h.actPstart) 'actPstart',
            rpad(substr(h.actContent,1,16),20,'.') 'actContent',
            date(h.actStart) 'actStart',   
            d.actTypeNo 'actTypeNo',
            h.actPic1,
            f.testResultTypeNo,
            f.testResultValue,
            a.memTestTime,
            h.actNo
    FROM activitytype d join activity h using(actno) 
                        join type e on e.typeNo = d.actTypeNo 
                        
                        join testresult f on f.testResultTypeNo = d.actTypeNo 
                        join memtest a using(memTestNo)
    where memNo= :memNo and testResultTypeNo =(select a.testResultTypeNo 
                                        from testresult a
                                        join memtest b using(memTestNo) 
                                        where memNo= :memNo and memTestTime = (select max(memTestTime) 
                                                                        from memtest where memNo= :memNo) 
                                                        and testResultValue = (select min(testResultValue)
                                                        from testresult a join memtest b 
                                                        where memNo= :memNo)) and memTestTime = (select max(memTestTime) 
                                                                                            from memtest where memNo= :memNo)
    order by actStart desc
    limit 5;";

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

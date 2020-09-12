<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "
    select a.artTitle, 
            b.csName, 
            rpad(substr(artContent,1,16),20,'.') 'artContent',
            date(a.artDate) 'artDate', 
            c.artPicContent , 
            group_concat(distinct d.artTypeNo) 'artTypeNo',
            f.testResultTypeNo,
            f.testResultValue
    from article a join counselor b using(csNo) 
                    join artpic c using(artno) 
                    join articletype d using(artno) 
                    join type e on e.typeNo = d.artTypeNo 
                    join testresult f on f.testResultTypeNo = d.artTypeNo 
                    join memtest g using(memTestNo)
    WHERE memNo = 1  and  f.testResultValue = (select min(testResultValue)
                                            from testresult 
                                            where d.artTypeNo = f.testResultTypeNo)
    group by artno 
    order by artDate desc limit 5;";

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

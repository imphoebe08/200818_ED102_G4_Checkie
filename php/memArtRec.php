<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    // $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNo"];

    $sql = " 
    SELECT  h.artTitle, 
        b.csName, 
        rpad(substr(h.artContent,1,16),20,'.') 'artContent',
        date(h.artDate) 'artDate',  
        d.artTypeNo 'artTypeNo',
        h.artPic1,
        f.testResultTypeNo,
        f.testResultValue,
        a.memTestTime,
        h.artNo
    FROM articletype d join article h using(artno) 
                    join counselor b using(csNo) 
                    join type e on e.typeNo = d.artTypeNo 
                    join testresult f on f.testResultTypeNo = d.artTypeNo 
                    join memtest a using(memTestNo)
    order by artDate desc
    limit 5;
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

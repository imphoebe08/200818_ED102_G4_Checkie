<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    // $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];

    $sql = "select 	a.memNo, 
                a.artNo ,
                b.artTitle,
                b.artAuthor, 
                rpad(substr(b.artContent,1,30),36,'.') 'artContent',
                b.artPic1
            from artcollect a join article b using(artNo)
            where memNo = :memNo
            order by b.artDate desc;";

    $memberArtCol = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $memberArtCol->bindValue(":memNo", $memNo);
    $memberArtCol->execute();
    
    if( $memberArtCol->rowCount()==0){ 
    echo "沒有推薦內容";
    }else{ 
    $memberArtColAll = $memberArtCol->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberArtColAll);
      }


    }catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>

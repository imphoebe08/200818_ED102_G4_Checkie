<?php
try{
    session_start();
    require_once("./connectBook666.php");
    //session應急
    $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];

    $sql = "
    select a.memTestNo ,
            a.testResultValue, 
            b.typeNo,b.typeName,
            c.memTestTime,
            c.memNo
    from testresult a join type b on b.typeNo = a.testResultTypeNo
                        join memtest c using(memTestNo)
    where memNo = :memNo and c.memTestTime = (select max(memTestTime)
                                            from memtest
                                            where memNo = :memNo);";

    $member = $pdo->prepare($sql);


    $member->bindValue(":memNo", $memNo);
    $member->execute();
    
    if( $member->rowCount()==0){ 
    echo "no";
    }else{ 
    $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);

              echo json_encode($memberRow);
      }


    // if (isset($_SESSION['memId'])===true ) {
    //     $memId = $_SESSION['memId'];
    //     require_once("./connectBooks.php");
    //     echo
    // }

    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

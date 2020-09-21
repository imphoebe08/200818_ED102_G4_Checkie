<?php
try{
    session_start();
    require_once("./connectBook.php");
    //session應急
    // $_SESSION["memNO"]=1;
    //以上session應急
    $memNo = $_SESSION["memNO"];

    $sql = "select * from member
            where memNo = :memNo;";

    $member = $pdo->prepare($sql);


    $member->bindValue(":memNo", $memNo);
    $member->execute();
    
    if( $member->rowCount()==0){ 
    echo "no";
    }else{ 
    $memberRow = $member->fetch(PDO::FETCH_ASSOC);

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

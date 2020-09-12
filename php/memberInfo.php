<?php
try{
    // session_start();
    require_once("./connectBook.php");

    $sql = "select * from member
            where memNo = :memNo;";

    $member = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);

    $member->bindValue(":memNo", 1);
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

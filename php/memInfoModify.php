<?php
try{

    require_once("./connectBook.php");

    // session_start();
    //require_once("./connectBook666.php");
    // $newMemId = $_POST["newMemId"]
    $sql = 'update member
    set memName = :memName,
    memPsd = :memPsd,
    memBD = :memBD,
    memGender = :memGender,
    memTel = concat(:memTelA,",",:memTelB),
    memAdd = :memAdd,
    memPic = "./img/atSelf/doctors/doctors2.jpeg",
    memOccupation = :memOccupation,
    memNickname = :memNickname   
    where memNo = :memNo;';

    $member = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    $member->bindValue(":memNo", $_POST["memNo"]);
    $member->bindValue(":memName", $_POST["memName"]);
    $member->bindValue(":memPsd", $_POST["memPsd"]);
    $member->bindValue(":memBD", $_POST["memBD"]);
    $member->bindValue(":memGender", $_POST["memGender"]);
    $member->bindValue(":memTelA", $_POST["memTelA"]);
    $member->bindValue(":memTelB", $_POST["memTelB"]);
    $member->bindValue(":memAdd", $_POST["memAdd"]);
    $member->bindValue(":memOccupation", $_POST["memOccupation"]);
    $member->bindValue(":memNickname", $_POST["memNickname"]);
    // $member->bindValue(":memNo", 1);
    $member->execute();
    
    echo "suss";


    // if (isset($_SESSION['memId'])===true ) {
    //     $memId = $_SESSION['memId'];
    //     require_once("./connectBooks.php");
    //     echo
    // }

    }catch(PDOException $e){
        echo $e->getMessage();
    };
    
?>

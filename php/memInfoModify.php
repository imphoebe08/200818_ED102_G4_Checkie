<?php
try{
    // session_start();
    require_once("./connectBook.php");
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
    memPetName = :memPetName   
    where memNo = 1;';

    $member = $pdo->prepare($sql);
    // 正確做法
    // $memNo = $_SESSION["memNo"]
    //$member->bindValue(":memNo", $memNo);
    $member->bindValue(":memName", $_POST["memName"]);
    $member->bindValue(":memPsd", $_POST["memPsd"]);
    $member->bindValue(":memBD", $_POST["memBD"]);
    $member->bindValue(":memGender", $_POST["memGender"]);
    $member->bindValue(":memTelA", $_POST["memTelA"]);
    $member->bindValue(":memTelB", $_POST["memTelB"]);
    $member->bindValue(":memAdd", $_POST["memAdd"]);
    $member->bindValue(":memOccupation", $_POST["memOccupation"]);
    $member->bindValue(":memPetName", $_POST["memPetName"]);
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

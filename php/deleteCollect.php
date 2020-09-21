<?php
try {
    require_once("./connectBook.php");
    session_start();
    $memNo = isset($_SESSION["memNo"]) ? $_SESSION["memNo"] : 0;
    $artNo = isset($_GET["artNo"]) ? $_GET["artNo"] : 0;
    $actNo = isset($_GET["actNo"]) ? $_GET["actNo"] : 0;

    if ($memNo !== 0) {
        if ($artNo == 0) {
            $sql = "DELETE FROM actcollect 
                    WHERE memNo = :memNo AND actNo = :actNo;";

            $type = $pdo->prepare($sql);
            $type->bindValue(':memNo', $memNo);
            $type->bindValue(':actNo', $actNo);
            $type->execute();
            echo ("已刪除會員編號: $memNo 的 $actNo 號活動收藏");
        } else {
            $sql = "DELETE FROM artcollect 
                    WHERE memNo = :memNo AND artNo = :artNo;";

            $type = $pdo->prepare($sql);
            $type->bindValue(':memNo', $memNo);
            $type->bindValue(':artNo', $artNo);
            $type->execute();
            echo ("已刪除會員編號: $memNo 的 $artNo 號文章收藏");
        }
    } else {
        echo ("未登入會員");
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->GETMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->GETLine();
    echo $errMsg;
}

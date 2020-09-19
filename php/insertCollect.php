<?php
try {
    require_once("./connectBook.php");
    $memNo = isset($_SESSION["memNo"]) ? $_SESSION["memNo"] : 0;
    $artNo = isset($_GET["artNo"]) ? $_GET["artNo"] : 0;
    $actNo = isset($_GET["actNo"]) ? $_GET["actNo"] : 0;

    if ($memNo !== 0) {
        if ($artNo == 0) {
            $sql = "INSERT INTO actcollect (`memNo`, `actNo`) 
            VALUES (':memNo', ':actNo');";

            $type = $pdo->prepare($sql);
            $type->bindValue(':memNo', $memNo);
            $type->bindValue(':actNo', $actNo);
            $type->execute();
            echo ("已新增會員編號: $memNo 的 $actNo 號活動收藏");
        } else {
            $sql = "INSERT INTO artcollect (`memNo`, `artNo`) 
                    VALUES (':memNo', ':artNo');";

            $type = $pdo->prepare($sql);
            $type->bindValue(':memNo', $memNo);
            $type->bindValue(':artNo', $artNo);
            $type->execute();
            echo ("已新增會員編號: $memNo 的 $artNo 號文章收藏");
        }
    } else {
        echo ("未登入會員");
    }
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->GETMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->GETLine();
    echo $errMsg;
}

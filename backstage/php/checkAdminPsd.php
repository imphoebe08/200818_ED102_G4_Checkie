<?php

// 傳來所在頁碼


$errMsg = "";
//連線資料庫
try {
    $adminPsd = isset($_REQUEST['adminPsd']) ? $_REQUEST['adminPsd'] : '0';
    $admNo = $_REQUEST['admNo'];
    require_once("./connectBook.php");
    // 計算總頁數
    $sql = "SELECT 
                *
            FROM
                admin
            WHERE
            admNo = :admNo AND admPsn = :adminPsd;";
    $total = $pdo->prepare($sql);
    $total->bindValue(':admNo', $admNo);
    $total->bindValue(':adminPsd', $adminPsd);
    $total->execute();
    $totalCount = $total->rowCount();  //總筆數
    echo $totalCount;
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

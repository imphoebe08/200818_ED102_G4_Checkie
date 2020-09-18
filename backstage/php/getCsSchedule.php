<?php

$errMsg = "";
//連線資料庫
try {
    $pageNow = $_REQUEST['pageNow'];
    $csNo = $_REQUEST["csNo"];
    $year = $_REQUEST["year"];
    $month = $_REQUEST["month"];
    require_once("./connectBook.php");

    $sql = "SELECT 
                schDate,
                workTime1,
                workTime2,
                workTime3,
                workTime4,
                workTime5,
                workTime6
            FROM
                schedule
            WHERE
                csNo = :csNo and year(schDate) = :year and month(schDate) = :month;";
    $total = $pdo->prepare($sql);
    $total->bindValue(':csNo', $csNo);
    $total->bindValue(':year', $year);
    $total->bindValue(':month', $month);
    $total->execute();
    $totalCount = $total->rowCount();
    $perPage = 15;
    $totalPage = ceil($totalCount / $perPage);

    $limit_low = $pageNow * $perPage - $perPage;
    $limit_high = $perPage;

    $sql = "SELECT 
                schDate,
                workTime1,
                workTime2,
                workTime3,
                workTime4,
                workTime5,
                workTime6
            FROM
                schedule a
            WHERE
                csNo = :csNo and year(schDate) = :year and month(schDate) = :month
            limit $limit_low, $limit_high";

    $csInfo = $pdo->prepare($sql);
    $csInfo->bindValue(':csNo', $csNo);
    $csInfo->bindValue(':year', $year);
    $csInfo->bindValue(':month', $month);
    $csInfo->execute();
    $csRow = $csInfo->fetchAll(PDO::FETCH_ASSOC);

    $result = array("workDayData" => $csRow);
    array_push($result, $totalPage);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

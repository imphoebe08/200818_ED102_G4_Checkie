<?php

$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");

    $sql = "SELECT 
                distinct a.csNo 'csNo', b.csName 'csName'
            from schedule a JOIN counselor b USING (csNo);";
    $csNum = $pdo->query($sql);
    $csRow = $csNum->fetchAll(PDO::FETCH_ASSOC);


    $sql = "SELECT 
                distinct year(schDate) 'year'
            from schedule;
            ";

    $yearNum = $pdo->query($sql);
    $yearRow = $yearNum->fetchAll(PDO::FETCH_ASSOC);

    $sql = "SELECT 
                distinct month(schDate) 'month'
            from schedule
            order by 1 asc;
            ";

    $monthNum = $pdo->query($sql);
    $monthRow = $monthNum->fetchAll(PDO::FETCH_ASSOC);

    $result = array();

    $yearRowExtents = array();
    foreach ($yearRow as $key => $value) {
        array_push($yearRowExtents, $value['year']);
    }

    $monthRowExtents = array();
    foreach ($monthRow as $key => $value) {
        array_push($monthRowExtents, $value['month']);
    }

    array_push($result, $csRow);
    array_push($result, $yearRowExtents);
    array_push($result, $monthRowExtents);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

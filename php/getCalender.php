<?php
$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");
    $csNo = isset($_REQUEST["csNo"]) ? $_REQUEST["csNo"] : 1;

    $sql = "SELECT date(schDate) 'date', workTime1 'time1', workTime2 'time2'
            FROM schedule
            where csNo = :csNo and date(schDate) > curdate()
            order by 1 asc
            limit 100;";

    $result = $pdo->prepare($sql);
    $result->bindValue(":csNo", $csNo);
    $result->execute();
    $resultRow = $result->fetchAll(PDO::FETCH_ASSOC);

    $sql2 = "SELECT date(schDate) 'date', workTime3 'time1', workTime4 'time2'
            FROM schedule
            where csNo = :csNo and date(schDate) > curdate()
            order by 1 asc
            limit 100;";

    $result2 = $pdo->prepare($sql2);
    $result2->bindValue(":csNo", $csNo);
    $result2->execute();
    $resultRow2 = $result2->fetchAll(PDO::FETCH_ASSOC);

    $sql3 = "SELECT date(schDate) 'date', workTime5 'time1', workTime6 'time2'
            FROM schedule
            where csNo = :csNo and date(schDate) > curdate()
            order by 1 asc
            limit 100;";

    $result3 = $pdo->prepare($sql3);
    $result3->bindValue(":csNo", $csNo);
    $result3->execute();
    $resultRow3 = $result3->fetchAll(PDO::FETCH_ASSOC);




    $data_array = array();
    foreach ($resultRow as $key => $value) {
        array_push($data_array, array(
            "title" => "8:00-12:00",
            "date" => $resultRow[$key]["date"],
            "time1" => $resultRow[$key]["time1"],
            "time2" => $resultRow[$key]["time2"],
            "open" => false
        ));
        array_push($data_array, array(
            "title" => "13:00-17:00",
            "date" => $resultRow2[$key]["date"],
            "time1" => $resultRow2[$key]["time1"],
            "time2" => $resultRow2[$key]["time2"],
            "open" => false
        ));
        array_push($data_array, array(
            "title" => "18:00-22:00",
            "date" => $resultRow3[$key]["date"],
            "time1" => $resultRow3[$key]["time1"],
            "time2" => $resultRow3[$key]["time2"],
            "open" => false
        ));
    };



    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

<?php
try {
    require_once("./connectBook.php");

    session_start();
    $memNo = isset($_SESSION["memNo"]) ? $_SESSION["memNo"] : 1;
    $num1 = isset($_REQUEST["num1"]) ? $_REQUEST["num1"] * 10 : rand(50, 100);
    $num2 = isset($_REQUEST["num2"]) ? $_REQUEST["num2"] * 10 : rand(50, 100);
    $num3 = isset($_REQUEST["num3"]) ? $_REQUEST["num3"] * 10 : rand(50, 100);
    $num4 = isset($_REQUEST["num4"]) ? $_REQUEST["num4"] * 10 : rand(50, 100);
    $num5 = isset($_REQUEST["num5"]) ? $_REQUEST["num5"] * 10 : rand(50, 100);

    $sql = " INSERT INTO memtest (`memNo`, `memTestTime`) VALUES ($memNo, now());
             INSERT INTO testresult (`memTestNo`, `testResultTypeNo`, `testResultValue`) 
             VALUES (last_insert_id(), 1, $num1),
                    (last_insert_id(), 2, $num2),
                    (last_insert_id(), 3, $num3),
                    (last_insert_id(), 4, $num4),
                    (last_insert_id(), 5, $num5);";
    $statement = $pdo->query($sql);

    echo '測驗結果新增完成';
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->GETMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->GETLine();
    echo $errMsg;
}

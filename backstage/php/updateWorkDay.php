<?php


$errMsg = "";
//連線資料庫
try {
    $csNo = $_REQUEST["csNo"];
    $workDayList = json_decode($_REQUEST["workDayList"]);
    $schDate = $workDayList->{'schDate'};
    $workTime1 = $workDayList->{'workTime1'};
    $workTime2 = $workDayList->{'workTime2'};
    $workTime3 = $workDayList->{'workTime3'};
    $workTime4 = $workDayList->{'workTime4'};
    $workTime5 = $workDayList->{'workTime5'};
    $workTime6 = $workDayList->{'workTime6'};
    echo $schDate;
    echo $workTime1;
    echo $workTime2;
    echo $workTime3;
    echo $workTime4;
    echo $workTime5;
    echo $workTime6;
    require_once("./connectBook.php");

    $sql = "UPDATE `schedule` 
            SET 
                `workTime1` = :workTime1,
                `workTime2` = :workTime2,
                `workTime3` = :workTime3,
                `workTime4` = :workTime4,
                `workTime5` = :workTime5,
                `workTime6` = :workTime6
            WHERE
                (`csNo` = :csNo) AND (`schDate` = :schDate);
    ";
    $workDatInfo = $pdo->prepare($sql);
    $workDatInfo->bindValue(':csNo', $csNo);
    $workDatInfo->bindValue(':schDate', $schDate);
    $workDatInfo->bindValue(':workTime1', $workTime1);
    $workDatInfo->bindValue(':workTime2', $workTime2);
    $workDatInfo->bindValue(':workTime3', $workTime3);
    $workDatInfo->bindValue(':workTime4', $workTime4);
    $workDatInfo->bindValue(':workTime5', $workTime5);
    $workDatInfo->bindValue(':workTime6', $workTime6);
    $workDatInfo->execute();

    echo "班表修改成功";
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

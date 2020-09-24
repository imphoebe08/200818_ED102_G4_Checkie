<?php

$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");

    $sql1 = "SELECT 
                COUNT(*) 'num',
                YEAR(now()) -YEAR(memBD) 'year'
            FROM
                member
            where YEAR(memBD) IS NOT NULL
            GROUP BY 2
            ORDER BY 2 ASC;";
    $chart1 = $pdo->query($sql1);
    $chart1Row = $chart1->fetchAll(PDO::FETCH_ASSOC);

    $sql2 = "SELECT 
                COUNT(*),
                YEAR(csODate) 'year',
                MONTH(csODate) 'month',
                SUM(csOCost) 'sum'
            FROM
                csorder
            WHERE
                YEAR(csODate) = 2020
            GROUP BY 2 , 3
            ORDER BY 2 ASC , 3 ASC;";
    $chart2 = $pdo->query($sql2);
    $chart2Row = $chart2->fetchAll(PDO::FETCH_ASSOC);

    $sql3 = "SELECT 
                COUNT(*),
                YEAR(actOTime) 'year',
                MONTH(actOTime) 'month',
                SUM(acPrice) 'sum'
            FROM
                actorder
            WHERE
                YEAR(actOTime) = 2020
            GROUP BY 2 , 3
            ORDER BY 2 ASC , 3 ASC;";
    $chart3 = $pdo->query($sql3);
    $chart3Row = $chart3->fetchAll(PDO::FETCH_ASSOC);


    $result = array();

    $data1 = array();
    $labels1 = array();

    foreach ($chart1Row as $key => $value){
        array_push($data1, $chart1Row[$key]['num']);
    }
    foreach ($chart1Row as $key => $value){
        array_push($labels1, $chart1Row[$key]['year']);
    }

    $data2 = array();
    $labels2 = array();

    foreach ($chart2Row as $key => $value){
        array_push($data2, $chart2Row[$key]['sum']);
    }
    foreach ($chart2Row as $key => $value){
        array_push($labels2, $chart2Row[$key]['month']);
    }

    $data3 = array();
    $labels3 = array();

    foreach ($chart3Row as $key => $value){
        array_push($data3, $chart3Row[$key]['sum']);
    }
    foreach ($chart3Row as $key => $value){
        array_push($labels3, $chart3Row[$key]['month']);
    }
    
    $result['data1'] = $data1;
    $result['labels1'] = $labels1;
    $result['data2'] = $data2;
    $result['labels2'] = $labels2;
    $result['data3'] = $data3;
    $result['labels3'] = $labels3;


    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

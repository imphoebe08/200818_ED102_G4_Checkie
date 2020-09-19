<?php
$errMsg = "";
//連線資料庫
try {
    require_once("./connectBook.php");

    $sql = "SELECT 
                a.csNo 'csNo', group_concat(b.typeName) 'typeName'
            FROM
                cstype a
                    JOIN
                type b ON a.csTypeNo = b.typeNo
            WHERE
                (SELECT 
                        COUNT(*)
                    FROM
                        cstype
                    WHERE
                        a.csNo = csNo
                            AND a.csTestValue < csTestValue) < 2
            group by 1
            ORDER BY 1;";
    $type = $pdo->query($sql);
    $typeRow = $type->fetchAll(PDO::FETCH_ASSOC);

    $sql = "SELECT 
                csNo,
                csName,
                csHis,
                csGender,
                (CASE csPosNo WHEN '1' THEN '北部' WHEN '2' THEN '中部' WHEN '3' THEN '南部'END ) as csPosNo,
                csPic
            FROM
                counselor;";
    $csInfo = $pdo->query($sql);
    $csRow = $csInfo->fetchAll(PDO::FETCH_ASSOC);

    $data_array = array();
    foreach ($csRow as $key => $value) {
        array_push($data_array, array(
            "csId" => $csRow[$key]["csNo"],
            "csName" => $csRow[$key]["csName"],
            "csHis" => $csRow[$key]["csHis"],
            "csPic" => $csRow[$key]["csPic"],
            "csType" => explode(",", $typeRow[$key]["typeName"]),
            "csGender" => $csRow[$key]["csGender"],
            "csPosition" => $csRow[$key]["csPosNo"]
        ));
    };

    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

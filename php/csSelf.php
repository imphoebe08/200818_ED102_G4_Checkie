<?php

// $csNo = 1;
$csNo = $_GET["csNo"];
$errMsg = "";
//連線資料庫
try {
    $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);


    $sql = "SELECT 
               b.typeName 'csTypeName', a.csTestValue 'csTypeNum'
            FROM
                cstype a
                    JOIN
                type b ON a.csTypeNo = b.typeNo
            WHERE a.csNo = :csNo ;";

    $type = $pdo->prepare($sql);
    $type->bindValue(':csNo', $csNo);
    $type->execute();
    $typeRow = $type->fetchAll(PDO::FETCH_ASSOC);

    $sql = "SELECT 
                csNo,
                csName,
                csHis,
                csEdu,
                csGender,
                (CASE csPosNo WHEN '1' THEN '北部' WHEN '2' THEN '中部' WHEN '3' THEN '南部'END ) as csPosNo,
                csPic
            FROM
                counselor
            WHERE csNo = :csNo;";
    $csInfo = $pdo->prepare($sql);
    $csInfo->bindValue(':csNo', $csNo);
    $csInfo->execute();
    $csRow = $csInfo->fetchAll(PDO::FETCH_ASSOC);

    $data_array = array();
    foreach ($csRow as $key => $value) {
        $data_array = array(
            "csId" => $csRow[$key]["csNo"],
            "csName" => $csRow[$key]["csName"],
            "csHis" => explode(",", $csRow[$key]["csHis"]),
            "csEdu" => explode(",", $csRow[$key]["csEdu"]),
            "csPic" => $csRow[$key]["csPic"],
            "csType" => $typeRow
        );
    };

    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

<?php


$errMsg = "";
//連線資料庫
try {
    $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);

    // 計算總頁數
    $sql = "SELECT 
                b.typeName 'csTypeName', a.csTestValue 'csTypeNum'
            FROM
                cstype a
                    JOIN
                type b ON a.csTypeNo = b.typeNo
                    JOIN counselor c ON c.csNo = a.csNo
            WHERE csBool = 0
            ORDER BY a.csNo , a.csTypeNo;";

    $type = $pdo->query($sql);
    $typeRow = $type->fetchAll(PDO::FETCH_ASSOC);


    $sql = "SELECT 
                csNo,
                csId,
                csName,
                csBD,
                csHis,
                csEdu,
                csEmail,
                csGender,
                csTel,
                csPosNo,
                csPic,
                csBool
            FROM
                counselor
            WHERE csBool = 0";
    $csInfo = $pdo->query($sql);
    $csRow = $csInfo->fetchAll(PDO::FETCH_ASSOC);


    $data_array = array();
    foreach ($csRow as $key => $value) {
        $key2 = $key * 5;

        array_push($data_array, array(
            "csNo" => $csRow[$key]["csNo"],
            "csName" => $csRow[$key]["csName"],
            "csId" => $csRow[$key]["csId"],
            "csHis" => $csRow[$key]["csHis"],
            "csEdu" => $csRow[$key]["csEdu"],
            "csPic" => $csRow[$key]["csPic"],
            "csType" => array(
                array(
                    "csTypeName"  => $typeRow[$key]["csTypeName"],
                    "csTypeNum" => $typeRow[$key]["csTypeNum"]
                ),
                array(
                    "csTypeName"  => $typeRow[$key + 1]["csTypeName"],
                    "csTypeNum" => $typeRow[$key + 1]["csTypeNum"]
                ),
                array(
                    "csTypeName"  => $typeRow[$key + 2]["csTypeName"],
                    "csTypeNum" => $typeRow[$key + 2]["csTypeNum"]
                ),
                array(
                    "csTypeName"  => $typeRow[$key + 3]["csTypeName"],
                    "csTypeNum" => $typeRow[$key + 3]["csTypeNum"]
                ),
                array(
                    "csTypeName"  => $typeRow[$key + 4]["csTypeName"],
                    "csTypeNum" => $typeRow[$key + 4]["csTypeNum"]
                )
            )
        ));
    };

    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

<?php

// 傳來所在頁碼
$pageNow = $_REQUEST['pageNow'];

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
                counselor";
    $total = $pdo->query($sql);
    $totalCount = $total->rowCount();  //總筆數
    $totalPage = ceil($totalCount / 10); //總頁數(每頁10筆)

    // 每次取＝＞（limit 目前頁數＊10-9, 目前頁數＊10)
    $limit_low = $pageNow * 10 - 10;
    $limit_high = 10;
    $limit_low_type = $pageNow * 50 - 50;
    $limit_high_type = 50;


    $sql = "SELECT 
               b.typeName 'csTypeName', a.csTestValue 'csTypeNum'
            FROM
                cstype a
                    JOIN
                type b ON a.csTypeNo = b.typeNo
            ORDER BY a.csNo , a.csTypeNo
            limit $limit_low_type, $limit_high_type";

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
            limit $limit_low, $limit_high";
    $csInfo = $pdo->query($sql);
    $csRow = $csInfo->fetchAll(PDO::FETCH_ASSOC);


    $data_array = array();
    foreach ($csRow as $key => $value) {
        $key2 = $key * 5;

        array_push($data_array, array(
            "csNo" => $csRow[$key]["csNo"],
            "csName" => $csRow[$key]["csName"],
            "csId" => $csRow[$key]["csId"],
            "csGender" => $csRow[$key]["csGender"],
            "csBD" => $csRow[$key]["csBD"],
            "csEmail" => $csRow[$key]["csEmail"],
            "csTel" => $csRow[$key]["csTel"],
            "csPosNo" => $csRow[$key]["csPosNo"],
            "csHis" => $csRow[$key]["csHis"],
            "csEdu" => $csRow[$key]["csEdu"],
            "csPic" => $csRow[$key]["csPic"],
            "csBool" => $csRow[$key]["csBool"],
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

    $result = array("memberData" => $data_array);


    array_push($result, $totalPage);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

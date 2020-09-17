<?php


$errMsg = "";


//連線資料庫
try {
    $dsn = "mysql:host=localhost;port=3306;dbname=checkie0910;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);

    $csPosNo = $_REQUEST['csPosNo'];
    $type = $_REQUEST['type'];

    if ($csPosNo * $type !== 0) {
        $sql = "SELECT 
                c.csNo 'csNo', a.csName 'csName', a.csPosNo 'csPosNo', c.csTypeNo 'csTypeNo'
            FROM
                cstype c join counselor a using(csNo)
            WHERE
                csTestValue IN (SELECT 
                                    MAX(csTestValue)
                                FROM
                                    cstype d
                                WHERE
                                    c.csNo = d.csNo
                                GROUP BY csNo) and c.csTypeNo = :type and a.csPosNo = :csPosNo;";

        $csStatement = $pdo->prepare($sql);
        $csStatement->bindValue(":csPosNo", $csPosNo);
        $csStatement->bindValue(":type", $type);
        $csStatement->execute();

        $csRow = $csStatement->fetchAll(PDO::FETCH_ASSOC);

        $data_array = array();
        foreach ($csRow as $key => $value) {
            array_push($data_array, array(
                "id" => "iCs" . $csRow[$key]["csNo"],
                "value" => $csRow[$key]["csName"],
                "csNo" => $csRow[$key]["csNo"],
                "csPosNo" => $csRow[$key]["csPosNo"],
                "type" => $csRow[$key]["csTypeNo"],
            ));
        };
    } else {

        $sql = "SELECT 
                    c.csNo 'csNo', a.csName 'csName', a.csPosNo 'csPosNo', c.csTypeNo 'csTypeNo'
                FROM
                    cstype c join counselor a using(csNo)
                WHERE
                    csTestValue IN (SELECT 
                                        MAX(csTestValue)
                                    FROM
                                        cstype d
                                    WHERE
                                        c.csNo = d.csNo
                                    GROUP BY csNo) and c.csTypeNo = :type";

        $csStatement = $pdo->prepare($sql);
        $csStatement->bindValue(":type", $type);
        $csStatement->execute();

        $csRow = $csStatement->fetchAll(PDO::FETCH_ASSOC);

        $data_array = array();
        foreach ($csRow as $key => $value) {
            array_push($data_array, array(
                "id" => "iCs" . $csRow[$key]["csNo"],
                "value" => $csRow[$key]["csName"],
                "csNo" => $csRow[$key]["csNo"],
                "csPosNo" => $csRow[$key]["csPosNo"],
                "type" => $csRow[$key]["csTypeNo"],
            ));
        };
    }
    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

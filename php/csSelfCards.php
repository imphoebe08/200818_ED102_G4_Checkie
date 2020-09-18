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

    // 文章
    $sql = "SELECT 
                a.artNo 'artId', 
                a.artTitle 'artName', 
                b.csName 'artAuthor', 
                a.artContent 'artContext', 
                a.artDate 'artDate',
                a.artPic1 'artImg'
            FROM
                article a
                    JOIN
                counselor b USING (csNo)
            WHERE
                b.csNo = :csNo
            LIMIT 3;";

    $csArt = $pdo->prepare($sql);
    $csArt->bindValue(':csNo', $csNo);
    $csArt->execute();
    $csArtRow = $csArt->fetchAll(PDO::FETCH_ASSOC);

    $csArtData = array();

    foreach ($csArtRow as $key => $value) {
        array_push($csArtData, array(
            "artId" => $csArtRow[$key]["artId"],
            "artName" => $csArtRow[$key]["artName"],
            "artAuthor" => $csArtRow[$key]["artAuthor"],
            "artContext" => $csArtRow[$key]["artContext"],
            "artImg" => $csArtRow[$key]["artImg"],
            "artDate" => $csArtRow[$key]["artDate"]
        ));
    };

    $sql = "SELECT 
                a.actNo 'actId',
                a.actName 'actName',
                a.actStart 'actDate',
                TIME_FORMAT(a.actStart, '%H:%i') 'actTimeStart',
                TIME_FORMAT(a.actEnd, '%H:%i') 'actTimeEnd',
                a.actContent 'actContext',
                a.actPic1 'actImg'
            FROM
                activity a
                    JOIN
                counselor b USING (csNo)
            WHERE
                b.csNo = :csNo
            LIMIT 3;";

    $csAct = $pdo->prepare($sql);
    $csAct->bindValue(':csNo', $csNo);
    $csAct->execute();
    $csRecRow = $csAct->fetchAll(PDO::FETCH_ASSOC);

    $csActData = array();
    foreach ($csRecRow as $key => $value) {
        array_push($csActData, array(
            "actId" => $csRecRow[$key]["actId"],
            "actName" => $csRecRow[$key]["actName"],
            "actDate" => $csRecRow[$key]["actDate"],
            // "actTime" => "$csRecRow[$key]['actTimeStart'] ~ $csRecRow[$key]['actTimeEnd']",
            "actContext" => $csRecRow[$key]["actContext"],
            "actImg" => $csRecRow[$key]["actImg"]
        ));
    };

    $sql = "SELECT 
                csNo 'recoId',
                csName 'recoName',
                csHis 'recoContext',
                csPic 'recoImg'
            FROM
                counselor
            ORDER BY RAND()
            LIMIT 3;";

    $csRec = $pdo->prepare($sql);
    $csRec->execute();
    $csRecRow = $csRec->fetchAll(PDO::FETCH_ASSOC);

    $csRecData = array();
    foreach ($csRecRow as $key => $value) {
        array_push($csRecData, array(
            "recoId" => $csRecRow[$key]["recoId"],
            "recoName" => $csRecRow[$key]["recoName"],
            "recoContext" => $csRecRow[$key]["recoContext"],
            "recoImg" => $csRecRow[$key]["recoImg"]
        ));
    };

    $data_array = array(
        "csArtData" => $csArtData,
        "csActData" => $csActData,
        "csRecoData" => $csRecData
    );

    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

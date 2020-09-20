<?php

$errMsg = "";
//連線資料庫
try {
    $csNo = isset($_REQUEST['csNo']) ? $_REQUEST['csNo'] : 'a.csNo';
    $pageNow = isset($_REQUEST['pageNow']) ? $_REQUEST['pageNow'] : 1;
    require_once("./connectBook.php");

    $sql = "SELECT * FROM csorder a
            WHERE a.csNo = $csNo;";

    $total = $pdo->query($sql);
    $totalCount = $total->rowCount();
    $totalPage = ceil($totalCount / 10);

    $limit_low = $pageNow * 10 - 10;
    $limit_high = 10;

    $sql = "SELECT 
                a.*,
                b.csName 'csName',
                c.memName 'memName',
                d.pmName,
                e.csPosName, 
                f.csModeName
            FROM
                csorder a
                    JOIN
                counselor b USING (csNo)
                    JOIN
                member c USING (memNo)
                    JOIN
                paymentmethod d ON d.pmNo = a.csPayment
                    JOIN
                cspos e ON b.csPosNo = e.csPosNo
                    JOIN
                csomode f ON a.csModeNo = f.csModeNo
            WHERE a.csNo = $csNo
            ORDER BY 1
            LIMIT $limit_low, $limit_high;";


    $memInfo = $pdo->query($sql);
    $memRow = $memInfo->fetchAll(PDO::FETCH_ASSOC);

    $result = array("orderData" => $memRow);
    array_push($result, $totalPage);



    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

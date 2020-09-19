<?php
try {
    require_once("./connectBook.php");
    $memNo = isset($_SESSION["memNo"]) ? $_SESSION["memNo"] : 1;
    $member = isset($_SESSION["memNo"]);

    $sql = "SELECT 
                group_concat(artNo) 'artNo'
            FROM
                artcollect
            WHERE
                memNo = :memNo;";

    $type = $pdo->prepare($sql);
    $type->bindValue(':memNo', $memNo);
    $type->execute();
    $typeRow1 = ($type->rowCount() == 0) ? array("artNo" => 0) : $type->fetch(PDO::FETCH_ASSOC);

    $sql = "SELECT 
                group_concat(actNo) 'actNo'
            FROM
                actcollect
            WHERE
                memNo = :memNo;";

    $type = $pdo->prepare($sql);
    $type->bindValue(':memNo', $memNo);
    $type->execute();
    $typeRow2 = ($type->rowCount() == 0) ? array("actNo" => 0) : $type->fetch(PDO::FETCH_ASSOC);

    $data_array = array();
    $data_array = array(
        "member" => false,
        "memNo" => $memNo,
        "artCollect" => explode(',', $typeRow1["artNo"]),
        "actCollect" => explode(',', $typeRow2["actNo"]),
    );

    echo json_encode($data_array, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine();
    echo $errMsg;
}

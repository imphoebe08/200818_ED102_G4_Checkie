<?php
require_once('./connectBook.php');
if ($_FILES["file"]["error"] > 0) {
    echo "Error:" . $_FILES["file"]["error"];
} else {
    $from = $_FILES["file"]["tmp_name"];
    $to = "./img/oracleCard/" . $_FILES["file"]["name"];
    $to2 = "./img/oracleCard/" . $_FILES["file"]["name"];
    copy($from, $to);
    copy($from, $to2);

    echo "$to";
}
?>
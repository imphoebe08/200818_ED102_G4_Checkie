<?php

if ($_FILES["file"]["error"] > 0) {
    echo "Error:" . $_FILES["file"]["error"];
} else {

    $file_path = "./upload/";
    if (!file_exists($file_path)) {
        mkdir($file_path);
    }
    $from = $_FILES["file"]["tmp_name"];
    $to = "./upload/" . $_FILES["file"]["name"];
    move_uploaded_file($from, $to);
    echo "$to"; // 回傳圖片儲存位置



    // 接下來是update/insert指令...
}

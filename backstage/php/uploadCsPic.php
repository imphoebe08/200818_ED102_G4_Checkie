<?php

if ($_FILES["file"]["error"] > 0) {
    echo "Error:" . $_FILES["file"]["error"];
} else {
    $from = $_FILES["file"]["tmp_name"];
    $to = "../../img/csMain/" . $_FILES["file"]["name"];
    move_uploaded_file($from, $to);


    // 接下來是update/insert指令...
}

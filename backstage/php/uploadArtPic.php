<?php
// 路徑怪怪的
if ($_FILES["file"]["error"] > 0) {
    echo "Error:" . $_FILES["file"]["error"];
} else {
    $from = $_FILES["file"]["tmp_name"];
    if($_REQUEST["picNo"] == 1){
        $to = "../img/atSelf/" . "banner" . $_FILES["file"]["name"];
        $to2 = "../../img/atSelf/" . "banner" . $_FILES["file"]["name"];
        $to3 = "./img/atSelf/" . "banner" . $_FILES["file"]["name"];
        // echo"$to3";

    }elseif($_REQUEST["picNo"] == 2){
        $to = "../img/atSelf/" . "pic2" . $_FILES["file"]["name"];
        $to2 = "../../img/atSelf/" . "pic2" . $_FILES["file"]["name"];
        $to3 = "./img/atSelf/" . "pic2" . $_FILES["file"]["name"];
        // echo"$to3";

    }elseif($_REQUEST["picNo"] == 3){
        $to = "../img/atSelf/" . "pic3" . $_FILES["file"]["name"];
        $to2 = "../../img/atSelf/" . "pic3" . $_FILES["file"]["name"];
        $to3 = "./img/atSelf/" . "pic3" . $_FILES["file"]["name"];
        // echo"$to3";

    }
    copy($from, $to);
    copy($from, $to2);
    // copy($from, $to3);


    echo $to3;
};

?>
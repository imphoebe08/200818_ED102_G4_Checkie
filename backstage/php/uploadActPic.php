<?php

if ($_FILES["file"]["error"] > 0) {
    echo "Error:" . $_FILES["file"]["error"];
} else {
    $from = $_FILES["file"]["tmp_name"];
    if($_REQUEST["picNo"] == 1){
        $to = "../../img/acSelf/" . "banner" . $_FILES["file"]["name"];
        $to2 = "../img/acSelf/" . "banner" . $_FILES["file"]["name"];
        $to3 = "./img/acSelf/" . "banner" . $_FILES["file"]["name"];
        echo "$to3";
    }elseif($_REQUEST["picNo"] == 2){
        $to = "../../img/acSelf/" . "pic2" . $_FILES["file"]["name"];
        $to2 = "../img/acSelf/" . "pic2" . $_FILES["file"]["name"];
        $to3 = "./img/acSelf/" . "pic2" . $_FILES["file"]["name"];
        echo "$to3";
    }elseif($_REQUEST["picNo"] == 3){
        $to = "../../img/acSelf/" . "pic3" . $_FILES["file"]["name"];
        $to2 = "../img/acSelf/" . "pic3" . $_FILES["file"]["name"];
        $to3 = "./img/acSelf/" . "pic3" . $_FILES["file"]["name"];
        echo "$to3";
    }else{
        $to = "../../img/acSelf/" . "pic4" . $_FILES["file"]["name"];
        $to2 = "../img/acSelf/" . "pic4" . $_FILES["file"]["name"];
        $to3 = "./img/acSelf/" . "pic4" . $_FILES["file"]["name"];
        echo "$to3";
    };

    copy($from, $to);
    copy($from, $to2);

    // echo "$to";
};

?>
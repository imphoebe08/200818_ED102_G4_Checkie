<?php 
session_start();
if( isset($_SESSION["csId"]) === true){
	//送出登入者的姓名資料
    $result = array("csId"=>$_SESSION["csId"], "csPsd"=>$_SESSION["csPsd"],"csName"=>$_SESSION["csName"],"csPic"=>$_SESSION["csPic"]);
    echo json_encode($result);
}else{
	echo "{}";
}
?>
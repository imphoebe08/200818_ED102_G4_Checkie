<?php 
session_start();
if( isset($_SESSION["admId"]) === true){
	//送出登入者的姓名資料
    $result = array("admId"=>$_SESSION["admId"], "admPsn"=>$_SESSION["admPsn"],"admName"=>$_SESSION["admName"]);
    echo json_encode($result);
}else{
	echo "{}";
}
?>
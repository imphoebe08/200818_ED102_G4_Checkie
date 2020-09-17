<?php 
session_start();
if( isset($_SESSION["memId"]) === true){
	//送出登入者的姓名資料
    $result = array("memId"=>$_SESSION["memId"], "memPsd"=>$_SESSION["memPsd"],"memName"=>$_SESSION["memName"]);
    echo json_encode($result);
}else{
	echo "{}";
}
?>
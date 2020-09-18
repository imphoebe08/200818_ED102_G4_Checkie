<?php
session_start();
try{
require_once("./connectBook.php");
$sql = "select * from admin where admId=:admId and admPsn=:admPsn";
$admin = $pdo->prepare($sql);
$admin->bindValue(":admId", $_POST["admId"]);
$admin->bindValue(":admPsn", $_POST["admPsn"]);
$admin->execute();

if( $admin->rowCount()==0){ //查無此人
echo "{}";
}else{ //登入成功
//自資料庫中取回資料
$adminRow = $admin->fetch(PDO::FETCH_ASSOC);

//將登入者的資料寫入session
$_SESSION["admId"] = $adminRow["admId"];
$_SESSION["admPsn"] = $adminRow["admPsn"];
$_SESSION["admName"] = $adminRow["admName"];




//送出登入者的資料
//索引陣列
$result = array("admId"=>$adminRow["admId"], "admPsn"=>$adminRow["admPsn"],"admName"=>$adminRow["admName"]);
          echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}

?>
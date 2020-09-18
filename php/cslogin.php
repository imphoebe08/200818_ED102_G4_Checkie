<?php
session_start();
try{
require_once("./connectBook.php");
$sql = "select * from counselor where csId=:csId and csPsd=:csPsd";
$counselor = $pdo->prepare($sql);
$counselor->bindValue(":csId", $_POST["csId"]);
$counselor->bindValue(":csPsd", $_POST["csPsd"]);
$counselor->execute();

if( $counselor->rowCount()==0){ //查無此人
echo "{}";
}else{ //登入成功
//自資料庫中取回資料
$counselorRow = $counselor->fetch(PDO::FETCH_ASSOC);

//將登入者的資料寫入session
$_SESSION["csId"] = $counselorRow["csId"];
$_SESSION["csPsd"] = $counselorRow["csPsd"];
$_SESSION["csName"] = $counselorRow["csName"];
$_SESSION["csBD"] = $counselorRow["csBD"];
$_SESSION["csEmail"] = $counselorRow["csEmail"];
$_SESSION["csTel"] = $counselorRow["csTel"];
$_SESSION["csPosNo"] = $counselorRow["csPosNo"];




//送出登入者的資料
//索引陣列
$result = array("csId"=>$counselorRow["csId"], "csPsd"=>$counselorRow["csPsd"],"csName"=>$counselorRow["csName"]);
          echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}

?>
<?php
session_start();
try{
require_once("./connectBook.php");
$sql = "select * from member where memId=:memId and memPsd=:memPsd";
$member = $pdo->prepare($sql);
$member->bindValue(":memId", $_POST["memId"]);
$member->bindValue(":memPsd", $_POST["memPsd"]);
$member->execute();

if( $member->rowCount()==0){ //查無此人
echo "{}";
}else{ //登入成功
//自資料庫中取回資料
$memRow = $member->fetch(PDO::FETCH_ASSOC);

//將登入者的資料寫入session
$_SESSION["memNo"] = $memRow["memNo"];
$_SESSION["memName"] = $memRow["memName"];
$_SESSION["memId"] = $memRow["memId"];
$_SESSION["memPsd"] = $memRow["memPsd"];
$_SESSION["memBD"] = $memRow["memBD"];
$_SESSION["memGender"] = $memRow["memGender"];
$_SESSION["memEmail"] = $memRow["memEmail"];
$_SESSION["memTel"] = $memRow["memTel"];
$_SESSION["memAdd"] = $memRow["memAdd"];
$_SESSION["memPic"] = $memRow["memPic"];
$_SESSION["memOccupation"] = $memRow["memOccupation"];



//送出登入者的資料
//索引陣列
$result = array("memId"=>$memRow["memId"], "memPsd"=>$memRow["memPsd"],"memName"=>$memRow["memName"]);
          echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}

?>
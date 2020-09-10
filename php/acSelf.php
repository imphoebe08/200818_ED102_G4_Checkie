<?php  
// $psn = $_REQUEST["psn"];
$errMsg = "";
//連線資料庫
try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);


  $sql = "select * from activity join activitytype using(actNo)";
  $products = $pdo->query($sql);
  $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
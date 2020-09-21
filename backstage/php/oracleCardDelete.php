<?php

$cardNo = $_REQUEST["cardNo"];

$errMsg = "";
// global $json;
try{
    require_once('./connectBook.php');
    // $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
  

  $sql = "
    delete from card where (`cardNo`=:cardNo);
  ";
  $cardRow = $pdo->prepare($sql);
  $cardRow->bindValue(":cardNo", $cardNo);
  $cardRow->execute();
  echo "神諭卡刪除成功";

    
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
  $errMsg .= "錯誤行號 : " . $e->getLine();
  echo "error";
}
?>
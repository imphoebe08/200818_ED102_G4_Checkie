<?php

$cardNo = $_REQUEST["cardNo"];
$cardTitle = $_REQUEST["cardTitle"];
$cardContent = $_REQUEST["cardContent"];
$cardPic = $_REQUEST["cardPic"];
$cardTypeNo = $_REQUEST["cardTypeNo"];
$deckNo = $_REQUEST["deckNo"];
$errMsg = "";
// global $json;
try{
    $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);
  

  $sql = "
    update card set 
    cardTitle=:cardTitle,
    cardContent=:cardContent,
    cardPic=:cardPic,
    cardTypeNo=:cardTypeNo,
    deckNo=:deckNo
    where cardNo=:cardNo;
  ";
  $cardRow = $pdo->prepare($sql);
  $cardRow->bindValue(":cardNo", $_GET["cardNo"]);
  $cardRow->bindValue(":cardTitle", $_GET["cardTitle"]);
  $cardRow->bindValue(":cardContent", $_GET["cardContent"]);
  $cardRow->bindValue(":cardPic", $_GET["cardPic"]);
  $cardRow->bindValue(":cardTypeNo", $_GET["cardTypeNo"]);
  $cardRow->bindValue(":deckNo", $_GET["deckNo"]);
  $cardRow->execute();

    
}catch(PDOException $e){
  echo "error";
}
?>
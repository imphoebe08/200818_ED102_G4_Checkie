
<?php
global $json;
try{
    $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    $user = "root";
    $password = "root";
    $options = array(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);
  //
  $deckNo = $_GET["deckNo"];//取得前端送來的資料
  $deckNo= $_GET["cardNo"];
  $deckNo= $_GET["cardTitle"];
  $deckNo= $_GET["cardContent"];
  $deckNo= $_GET["cardPic"];
  $deckNo= $_GET["cardTypeNo"];
  $deckNo= $_GET["deckNo"];

  $sql = "select * from `card`";
  $cardRow = $pdo->prepare($sql);
  $cardRow->bindValue(":cardNo", $cardNo);
  $cardRow->bindValue(":cardTitle", $cardTitle);
  $cardRow->bindValue(":cardContent", $cardContent);
  $cardRow->bindValue(":cardPic", $cardPic);
  $cardRow->bindValue(":cardTypeNo", $cardTypeNo);
  $cardRow->bindValue(":deckNo", $deckNo);
  $cardRow->execute();
  

  if( $cardRow->rowCount() ==0){
    
  }else{
    $cards = $cardRow->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($cards);
    echo $json;
    // $result = array("cardTitle"=>$card["cardTitle"], "cardContent"=>$card["cardContent"],"cardPic"=>$card["cardPic"]);
  }
}catch(PDOException $e){
  echo "error";
}
?>
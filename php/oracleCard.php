
<?php
global $json;
try{
  require_once('./connectBook.php');
    // $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
  // $deckNo = $_GET["deckNo"];//取得前端送來的資料
  $deckNo= $_GET["deckNo"];
  // $memId = "Sara";

  $sql = "select * from `card` where deckNo=:deckNo";
  $cardRow = $pdo->prepare($sql);
  $cardRow->bindValue(":deckNo", $deckNo);
  $cardRow->execute();
  

  if( $cardRow->rowCount() ==0){ //此帳號已存在, 不可用
    
  }else{ //此帳號可使用
    $cards = $cardRow->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($cards);
    echo $json;
    // $result = array("cardTitle"=>$card["cardTitle"], "cardContent"=>$card["cardContent"],"cardPic"=>$card["cardPic"]);
  }
}catch(PDOException $e){
  echo "error";
}




?>
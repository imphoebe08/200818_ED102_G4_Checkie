<?php
global $json;
try{
    // $dsn = "mysql:host=localhost;port=8889;dbname=ed102g4;charset=utf8";
    // $user = "root";
    // $password = "root";
    // $options = array(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    // $pdo = new PDO($dsn, $user, $password, $options);
    require_once("./connectBook.php");
  

  $sql = "
    select * from card GROUP by deckno; 
  ";
  $cardRow = $pdo->query($sql);

  if($cardRow->rowCount()==0){
  }else{
    $cardsData = $cardRow->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($cardsData);
  }
    
}catch(PDOException $e){
  echo "error";
}
?>
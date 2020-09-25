<?php  
try{    
    require_once("./connectBook.php");//連結資料庫
  $sql = " select artTitle,artPic2,concat(left(artContent,35*3),'...') 'artContent',artNo from article where artBool=0 order by artDate desc limit 6,3;";
  $products = $pdo->query($sql);
  
  if( $products->rowCount()==0){ 
    echo "沒東西";
    }else{ 
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRow);
      }
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
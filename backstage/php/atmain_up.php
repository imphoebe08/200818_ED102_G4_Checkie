<?php  
$errMsg = "";
//連線資料庫


try{
    require_once("./atmainbook.php");

    $artNo = $_REQUEST["artNo"];
    $artTitle = $_REQUEST["artTitle"];
    $csNo = $_REQUEST["csNo"];
    $csName = $_REQUEST["csName"];
    $artContent = $_REQUEST["artContent"];
    $artDate = $_REQUEST["artDate"];
    $artBool = $_REQUEST["artBool"];
    $artPic1 = $_REQUEST["artPic1"];
    $artPic2 = $_REQUEST["artPic2"];
    $artPic3 = $_REQUEST["artPic3"];
    $artTypeNo = $_REQUEST["artTypeNo"];
    
    $sql = "
    DELETE FROM articletype WHERE artNo= :artNo1;      
    SET SQL_SAFE_UPDATES=0;

    update article
    set artBool = :artBool, 
    artDate = :artDate, 
    artContent = :artContent, 
    artTitle = :artTitle, 
    artPic1 = :artPic1, 
    artPic2 = :artPic2, 
    artPic3 = :artPic3, 
    artAuthor = :artAuthor, 
    where artNo= :artNo2;";
  
  $products = $pdo->prepare($sql);
  $products->bindValue(':artNo1', $artNo);
  $products->bindValue(':artNo2', $artNo);
  $products->bindValue(':artBool', $artBool);
  $products->bindValue(':artDate', $artDate);
  $products->bindValue(':artContent', $artContent);
  $products->bindValue(':artTitle', $artTitle);
  $products->bindValue(':artPic1', $artPic1);
  $products->bindValue(':artPic2', $artPic2);
  $products->bindValue(':artPic3', $artPic3);
  $products->bindValue(':artAuthor', $csName);
  $products -> execute();  

  $artTypeNotoArr = explode(",",$artTypeNo);
  // print_r($actTypeNotoArr);
  $updateSql = '';
  for($i=0; $i<count($artTypeNotoArr);$i++){
    

  $updateSql = "INSERT INTO articletype(artNo, artTypeNo) 
                  VALUES (:artNo , :artTypeNo);";
  $products = $pdo->prepare($updateSql);
  $products->bindValue(':artNo', $artNo);
  $products->bindValue(':artTypeNo', $artTypeNotoArr[$i]);
  $products -> execute(); 
  echo '更新成功';
  };
 

}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}


?>
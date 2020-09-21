<?php  
$errMsg = "";
//連線資料庫
try{
  // a  表格名稱修改
  require_once("./connectBook.php");
        $sql = "select a.artNo, a.artTitle,a.csNo,a.artAuthor 'csName' ,a.artContent,a.artDate,a.artBool,a.artPic1,a.artPic2,a.artPic3,group_concat(b.artTypeNo) 'artTypeNo' from article a  
        join articletype b using(artNo)
        group by artNo;";
        $products = $pdo->prepare($sql);
        $products->execute();       
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
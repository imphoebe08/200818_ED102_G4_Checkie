<?php  
$errMsg = "";
//連線資料庫
try{
  // a  表格名稱修改
  require_once("./connectBook.php");
  $artNo = $_GET["artNo"];
        $sql = "select a.artNo, a.artTitle,a.csNo,a.artAuthor 'csName' ,a.artContent,a.artDate,a.artBool,a.artPic1,a.artPic2,a.artPic3,group_concat(b.artTypeNo) 'artTypeNo' from article a  
        join articletype b using(artNo)
        where a.artNo=:artNo group by artNo;";
        $products = $pdo->prepare($sql);
        $products->bindValue(':artNo', $artNo);
        $products->execute();       
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);

        $data_array = array(
          "artNo" => $prodRow[0]["artNo"],
          "artTitle" => $prodRow[0]["artTitle"],
          "csNo" => $prodRow[0]["csNo"],
          "csName" => $prodRow[0]["csName"],
          "artContent" => $prodRow[0]["artContent"],
          "artDate" => $prodRow[0]["artDate"],
          "artBool" => $prodRow[0]["artBool"],
          "artPic1" => $prodRow[0]["artPic1"],
          "artPic2" => $prodRow[0]["artPic2"],
          "artPic3" => $prodRow[0]["artPic3"],
          "artTypeNo" => explode(",", $prodRow[0]["artTypeNo"])
        );

        



        echo json_encode($data_array);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
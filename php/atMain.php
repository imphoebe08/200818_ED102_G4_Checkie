<?php
try{
require_once("./connectBook.php");
$sql = "select a.artNo,a.artBool,a.artTitle,a.artContent,b.csName,b.cspic,a.artdate,e.artTypeNO,a.artPic1,a.artPic2,a.artPic3,e.artTypeNo
from article a join counselor b 
using(csno) join  articletypeconcact e using(artno)
order by a.artdate desc limit 0,9";
$article = $pdo->query($sql);
if( $article->rowCount()==0){
echo "{}";
}else{ 
$articleRow = $article->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($articleRow,JSON_UNESCAPED_UNICODE);

//送出登入者的資料
//索引陣列
// $result = array("artTitle"=>$articleRow["artTitle"], "artContent"=>$articleRow["artContent"],"csName"=>$articleRow["csName"],"cspic"=>$articleRow["cspic"],"artdate"=>$articleRow["artdate"]);
//           echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>


<?php
try{
<<<<<<< HEAD
require_once("./connectBook.php");
=======
require_once("./connectbook.php");
>>>>>>> 74f831b97e732361424d23b7ea4557879b7c70ed
$sql = "select a.artNo,a.artBool,a.artTitle,a.artContent,b.csName,b.cspic,a.artdate,e.artTypeNO,a.artPic1,a.artPic2,a.artPic3
from article a join counselor b 
using(csno) join  articletype e using(artno)
order by a.artdate desc";
$article = $pdo->prepare($sql);
$article->execute();//執行
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
};
?>

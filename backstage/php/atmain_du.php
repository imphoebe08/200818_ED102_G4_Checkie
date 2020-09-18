<?php
try{
require_once("./atmainbook.php");
$artBool=$_REQUEST["artBool"];
$artDate=$_REQUEST["artDate"];
$artContent=$_REQUEST["artContent"];
$artTitle=$_REQUEST["artTitle"];
$artPic1=$_REQUEST["artPic1"];
$artPic2=$_REQUEST["artPic2"];
$artPic3=$_REQUEST["artPic3"];
$csName=$_REQUEST["csName"];

$sql = "insert into article(artBool,artDate,artContent,artTitle,artPic1,artPic2,artPic3)
values(:artBool,:artDate,:artContent,:artTitle,:artPic1,:artPic2,:artPic3);
insert into counselor(csName)
values(':csName')
";

$article = $pdo->prepare($sql);
$article -> bindValue(":artBool",$artBool);
$article -> bindValue(":artDate",$artDate);
$article -> bindValue(":artContent",$artContent);
$article -> bindValue(":artTitle",$artTitle);
$article-> bindValue(":artPic1",$artPic1);
$article-> bindValue(":artPic2",$artPic2);
$article-> bindValue(":artPic3",$artPic3);
$article -> bindValue(":csName",$csName);


$article->execute();//執行
if( $article->rowCount()==0){
echo "{}";
}else{ 
// $articleRow = $article->fetchAll(PDO::FETCH_ASSOC);
// echo json_encode($articleRow,JSON_UNESCAPED_UNICODE);

//送出登入者的資料
//索引陣列
// $result = array("artTitle"=>$articleRow["artTitle"], "artContent"=>$articleRow["artContent"],"csName"=>$articleRow["csName"],"cspic"=>$articleRow["cspic"],"artdate"=>$articleRow["artdate"]);
//           echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
};
?>



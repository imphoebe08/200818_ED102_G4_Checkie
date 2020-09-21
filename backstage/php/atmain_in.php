<?php
try{
require_once("./connectBook.php");
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

$artTypeNotoArr = explode(",",$artTypeNo);
$updateSql = '';
for($i=0; $i<count($artTypeNotoArr);$i++){
echo $artTypeNotoArr[$i];

$updateSql .= "INSERT INTO articletype(artNo, artTypeNo) 
                VALUES (last_insert_id() , $artTypeNotoArr[$i]);";
}


$sql = "insert into article(artBool,artDate,artContent,artTitle,artPic1,artPic2,artPic3,artAuthor)
values(:artBool,:artDate,:artContent,:artTitle,:artPic1,:artPic2,:artPic3,:csName);
";
$sql.=$updateSql;
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

  }
}catch(PDOException $e){
  echo $e->getMessage();
};
?>



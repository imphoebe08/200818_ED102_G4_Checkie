<?php
try{
        require_once("./connectBook.php");//連結資料庫
        $memId = $_GET["memId"];
        $forgetPsd =$_GET["forgetPsd"];
        // fuck_off會員信箱
        $memId_real = substr( base64_decode($memId) , 6 );
        $sql2 ="update member set memPsd=:forgetPsd where memId=:memId";
        ;
        $member2 = $pdo->prepare($sql2);
        $member2->bindValue(":forgetPsd", $forgetPsd);
        $member2->bindValue(":memId", $memId_real);
        $member2->execute();
        echo "123";
        
}catch(PDOException $e){
  echo $e->getMessage();

}



?>
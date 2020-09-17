<?php
try{
        require_once("./connectBook.php");//連結資料庫
        session_start();
        $newMemId = $_POST["newMemId"]; //取得前端資料
        $newMemPsd = $_POST["newMemPsd"]; 
        $newMemName = $_POST["newMemName"];
        
        
        $_SESSION["memId"] = $newMemId;
        $_SESSION["memPsd"] = $newMemPsd;
        $_SESSION["memName"] = $newMemName;
        $sql2 = "insert into member(memId, memPsd, memName,memEmail) values (:newMemId, :newMemPsd, :newMemName,:newMemId)";
        $member2 = $pdo->prepare($sql2);
        $member2->bindValue(":newMemId", $newMemId);
        $member2->bindValue(":newMemPsd", $newMemPsd);
        $member2->bindValue(":newMemName", $newMemName);
        $member2->execute();
          echo "suss";
        
        




        
}catch(PDOException $e){
  echo $e->getMessage();

}



?>
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
        $sql2 = "insert into member(memId, memPsd, memName, memEmail, memNickname, memBD, memGender, memTel, memAdd, memOccupation, memBool) values (:newMemId, :newMemPsd, :newMemName,:newMemId, '請填寫', '1990-01-01', '?', '請填寫,', '請填寫', '請填寫',0);";
        $member2 = $pdo->prepare($sql2);
        $member2->bindValue(":newMemId", $newMemId);
        $member2->bindValue(":newMemPsd", $newMemPsd);
        $member2->bindValue(":newMemName", $newMemName);
        $member2->execute();
          echo "suss";
        
        //寫入session
        $sql = "select * from member where memId=:memId and memPsd=:memPsd";
        $member = $pdo->prepare($sql);
        $member->bindValue(":memId", $newMemId);
        $member->bindValue(":memPsd", $newMemPsd);
        $member->execute();

        if( $member->rowCount()==0){ //查無此人
        echo "{}";
        }else{ //登入成功
        //自資料庫中取回資料
        $memRow = $member->fetch(PDO::FETCH_ASSOC);

        //將登入者的資料寫入session
        $_SESSION["memNo"] = $memRow["memNo"];
        $_SESSION["memName"] = $memRow["memName"];
        $_SESSION["memNickname"] = $memRow["memNickname"];
        $_SESSION["memId"] = $memRow["memId"];
        $_SESSION["memPsd"] = $memRow["memPsd"];
        $_SESSION["memBD"] = $memRow["memBD"];
        $_SESSION["memGender"] = $memRow["memGender"];
        $_SESSION["memEmail"] = $memRow["memEmail"];
        $_SESSION["memTel"] = $memRow["memTel"];
        $_SESSION["memAdd"] = $memRow["memAdd"];
        $_SESSION["memPic"] = $memRow["memPic"];
        $_SESSION["memOccupation"] = $memRow["memOccupation"];}




        
}catch(PDOException $e){
  echo $e->getMessage();

}



?>
<?php
try{
    require_once("./connectBook.php");
    $sql = "select * from member where memId=:memId";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $_POST["newMemId"]);
    $member->execute();
    
    if( $member->rowCount()==0){ //查無此人
    echo "ok";
    }else{ //登入成功
    echo "已註冊會員";
    }
    }catch(PDOException $e){
      echo $e->getMessage();
    }


?>
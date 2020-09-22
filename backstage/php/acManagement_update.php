<?php  
$errMsg = "";
//連線資料庫


try{
  require_once("./connectBook.php");

    $actNo = $_REQUEST["actNo"];
    $actName = $_REQUEST["actName"];
    $actPstart = $_REQUEST["actPstart"];
    $actPend = $_REQUEST["actPend"];
    $actStart = $_REQUEST["actStart"];
    $actEnd = $_REQUEST["actEnd"];
    $actContent = $_REQUEST["actContent"];
    $actMin = $_REQUEST["actMin"];
    $actMax = $_REQUEST["actMax"];
    $csNo = $_REQUEST["csNo"];
    $actHost = $_REQUEST["actHost"];
    $actHostTitle = $_REQUEST["actHostTitle"];
    $actHostInfo = $_REQUEST["actHostInfo"];
    $actCost = $_REQUEST["actCost"];
    $actBool = $_REQUEST["actBool"];
    $actAddress = $_REQUEST["actAddress"];
    $actpic1 = $_REQUEST["actpic1"];
    $actpic2 = $_REQUEST["actpic2"];
    $actpic3 = $_REQUEST["actpic3"];
    $actHostPic = $_REQUEST["actHostPic"];
    $actTypeNo = $_POST["actTypeno"];

    

  if($csNo!="null"){
    // 完成
    echo "not null222";
    $sql = "
              DELETE FROM actclassify WHERE actNo=:actno1;      

            update activity
            set actName=:actName, 
            actPstart = :actPstart, 
            actPend = :actPend, 
            actStart = :actStart, 
            actEnd = :actEnd, 
            actContent = :actContent, 
            actMin = :actMin, 
            actMax = :actMax, 
            csNo = :csNo, 
            actCost = :actCost, 
            actBool = :actBool, 
            actAddress = :actAddress, 
            actpic1 = :actpic1,
            actpic2 = :actpic2,
            actpic3 = :actpic3
            where actNo = :actNo2;";
            
            $products = $pdo->prepare($sql);
            $products->bindValue(':actNo1', $actNo);
            $products->bindValue(':actNo2', $actNo);
            $products->bindValue(':actName', $actName);
            $products->bindValue(':actPstart', $actPstart);
            $products->bindValue(':actPend', $actPend);
            $products->bindValue(':actStart', $actStart);
            $products->bindValue(':actEnd', $actEnd);
            $products->bindValue(':actContent', $actContent);
            $products->bindValue(':actMin', $actMin);
            $products->bindValue(':actMax', $actMax);
            $products->bindValue(':actCost', $actCost);
            $products->bindValue(':actBool', $actBool);
            $products->bindValue(':actAddress', $actAddress);
            $products->bindValue(':csNo', $csNo);
            $products->bindValue(':actpic1', $actpic1);
            $products->bindValue(':actpic2', $actpic2);
            $products->bindValue(':actpic3', $actpic3);
            $products -> execute();  

            $actTypeNotoArr = explode(",",$actTypeNo);
            // print_r($actTypeNotoArr);
            $updateSql = '';
            for($i=0; $i<count($actTypeNotoArr);$i++){
              echo $actTypeNotoArr[$i];
        
            $updateSql = "INSERT INTO actclassify(actNo, actTypeno) 
                            VALUES (:actNo , :actTypeNoto );";
            $products = $pdo->prepare($updateSql);
            $products->bindValue(':actNo', $actNo);
            $products->bindValue(':actTypeNoto', $actTypeNotoArr[$i]);
            $products -> execute(); 
            };
           

  
  }else{
    $sql ="
            DELETE FROM actclassify WHERE actNo=:actNo1;  

            update activity
            set actName = :actName, 
            actPstart = :actPstart, 
            actPend = :actPend, 
            actStart = :actStart, 
            actEnd = :actEnd, 
            actContent = :actContent, 
            actMin = :actMin, 
            actMax = :actMax, 
            actHost = :actHost, 
            actHostTitle = :actHostTitle, 
            actHostInfo = :actHostInfo, 
            actCost = :actCost, 
            actBool = :actBool, 
            actAddress = :actAddress,
            actpic1 = :actpic1,
            actpic2 = :actpic2,
            actpic3 = :actpic3,
            actHostPic = :actHostPic
            where actNo = :actNo2;";
            
            
            
        


            $products = $pdo->prepare($sql);
            $products->bindValue(':actName', $actName);
            $products->bindValue(':actPstart', $actPstart);
            $products->bindValue(':actPend', $actPend);
            $products->bindValue(':actStart', $actStart);
            $products->bindValue(':actEnd', $actEnd);
            $products->bindValue(':actContent', $actContent);
            $products->bindValue(':actMin', $actMin);
            $products->bindValue(':actMax', $actMax);
            $products->bindValue(':actHost', $actHost);
            $products->bindValue(':actHostTitle', $actHostTitle);
            $products->bindValue(':actHostInfo', $actHostInfo);
            $products->bindValue(':actCost', $actCost);
            $products->bindValue(':actBool', $actBool);
            $products->bindValue(':actAddress', $actAddress);
            $products->bindValue(':actNo1', $actNo);
            $products->bindValue(':actNo2', $actNo);
            $products->bindValue(':actpic1', $actpic1);
            $products->bindValue(':actpic2', $actpic2);
            $products->bindValue(':actpic3', $actpic3);
            $products->bindValue(':actHostPic', $actHostPic);
            // $products->bindValue(':actTypeno', $actTypeno);
            $products -> execute();    
            
            

            $actTypeNotoArr = explode(",",$actTypeNo);
            // print_r($actTypeNotoArr);
            $updateSql = '';
            for($i=0; $i<count($actTypeNotoArr);$i++){
              echo $actTypeNotoArr[$i];
        
            $updateSql = "INSERT INTO actclassify(actNo, actClassNo) 
                            VALUES (:actNo , :actTypeNoto);";
            $products = $pdo->prepare($updateSql);
            $products->bindValue(':actNo', $actNo);
            $products->bindValue(':actTypeNoto', $actTypeNotoArr[$i]);
            $products -> execute(); 
            }
  }
            // update activitytype
            // set actTypeNo = :actTypeNo
            // where actNo = :actNo;

}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}


?>
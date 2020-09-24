<?php  
$errMsg = "";
//連線資料庫

try{
    require_once("./connectBook.php");

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
    $actHostPic = $_REQUEST["actHostPic"];
    $actpic1 = $_REQUEST["actpic1"];
    $actpic2 = $_REQUEST["actpic2"];
    $actpic3 = $_REQUEST["actpic3"];
    $actTypeNo = $_REQUEST["actTypeno"];
    

    $actTypeNotoArr = explode(",",$actTypeNo);
    $updateSql = '';
    for($i=0; $i<count($actTypeNotoArr);$i++){
    echo $actTypeNotoArr[$i];

    $updateSql .= "INSERT INTO actclassify (actNo, actClassNo) 
                    VALUES (last_insert_id() , $actTypeNotoArr[$i]);";
    }

    $actTypeNo = $_REQUEST["actTypeno"];
    

    $actTypeNotoArr = explode(",",$actTypeNo);
    $updateSql = '';
    for($i=0; $i<count($actTypeNotoArr);$i++){
    echo $actTypeNotoArr[$i];

    $updateSql .= "INSERT INTO actclassify (actNo, actClassNo) 
                    VALUES (last_insert_id() , $actTypeNotoArr[$i]);";
    }

    
    if(isset($_GET["csNo"])){

        $sql="INSERT INTO activity
            (actName, actPstart, actPend, actStart, actEnd, actContent, actMin, actMax, csNo, actCost, actBool, actAddress, actpic1, actpic2, actpic3)
            VALUES
            (:actName, :actPstart, :actPend, :actStart, :actEnd, :actContent, :actMin, :actMax,:csNo, :actCost, :actBool, :actAddress,:actpic1, :actpic2, :actpic3); ";

            $sql .= $updateSql;
            $products = $pdo->prepare($sql);
            $products->bindValue(':csNo', $csNo);
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
            $products->bindValue(':actpic1', $actpic1);
            $products->bindValue(':actpic2', $actpic2);
            $products->bindValue(':actpic3', $actpic3);
            $products -> execute();  
            echo '新增成功(有諮商師)';  
    }else{

        $sql="INSERT INTO activity
            (actName, actPstart, actPend, actStart, actEnd, actContent, actMin, actMax , actHost, actHostTitle, actHostInfo, actCost, actBool, actAddress,actpic1, actpic2, actpic3, actHostPic)
            VALUES
            (:actName, :actPstart, :actPend, :actStart, :actEnd, :actContent, :actMin, :actMax, :actHost, :actHostTitle, :actHostInfo, :actCost, :actBool, :actAddress, :actpic1, :actpic2, :actpic3, :actHostPic)
        ; ";
            $sql .= $updateSql;
            $products = $pdo->prepare($sql);
            $products->bindValue(':actHost', $actHost);
            $products->bindValue(':actHostTitle', $actHostTitle);
            $products->bindValue(':actHostInfo', $actHostInfo);
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
            $products->bindValue(':actHostPic', $actHostPic);
            $products->bindValue(':actpic1', $actpic1);
            $products->bindValue(':actpic2', $actpic2);
            $products->bindValue(':actpic3', $actpic3);
            $products -> execute();       
            echo '新增成功(無諮商師)';   
    }
            

  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>

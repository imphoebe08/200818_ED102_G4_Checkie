<?php  
$errMsg = "";
//連線資料庫


try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);

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
    // $actHostPic = $_POST["actHostPic"];
    // $actTypeNo = $_POST["actTypeno"];
    // $actpic1 = $_Files["actpic1"];
    // $actpic2 = $_Files["actpic2"];
    // $actpic3 = $_Files["actpic3"];

  if($csNo!="null"){
    // 完成
    echo "not null";
    $sql = "update activity
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
            actAddress = :actAddress 
            where actNo = :actNo;";
            $products = $pdo->prepare($sql);
            $products->bindValue(':actNo', $actNo);
            $products->bindValue(':actName', $actName);
            $products->bindValue(':actPstart', $actPstart);
            $products->bindValue(':actPend', $actPend);
            $products->bindValue(':actStart', $actStart);
            $products->bindValue(':actEnd', $actEnd);
            $products->bindValue(':actContent', $actContent);
            $products->bindValue(':actMin', $actMin);
            $products->bindValue(':actMax', $actMax);
            $products->bindValue(':actCost', $actCost);
            // $products->bindValue(':actHostInfo', $actHostInfo);
            $products->bindValue(':actBool', $actBool);
            $products->bindValue(':actAddress', $actAddress);
            $products->bindValue(':csNo', $csNo);
            // $products->bindValue(':actHostPic', $actHostPic);
            // $products->bindValue(':actTypeno', $actTypeno);
            // $products->bindValue(':actpic1', $actpic1);
            // $products->bindValue(':actpic2', $actpic2);
            // $products->bindValue(':actpic3', $actpic3);
            $products -> execute();    
  }else{
    $sql ="update activity
            set actName=:actName, 
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
            actAddress = :actAddress 
            where actNo = :actNo;";

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
            $products->bindValue(':actNo', $actNo);
            // $products->bindValue(':actHostPic', $actHostPic);
            // $products->bindValue(':actTypeno', $actTypeno);
            // $products->bindValue(':actpic1', $actpic1);
            // $products->bindValue(':actpic2', $actpic2);
            // $products->bindValue(':actpic3', $actpic3);
            $products -> execute();       
  }
            // update activitytype
            // set actTypeNo = :actTypeNo
            // where actNo = :actNo;

            // update actPicContent
            // set actPicContent = :pic1
            // where actNo = :actNo & actPicNo =:actPicNo; 
            // $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
            // echo json_encode($prodRow);
            // echo "$actCost";



}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
<?php  
$errMsg = "";
//連線資料庫

try{
    $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);

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
    // $actTypeNo = $_REQUEST["actTypeno"];
    // $actHostPic = $_FILES["actHostPic"];
    // $actpic1 = $_FILES["actpic1"];
    // $actpic2 = $_FILES["actpic2"];
    // $actpic3 = $_FILES["actpic3"];
    
    // $pic = array($actHostPic,$actpic1,$actpic2,$actpic3);
    // foreach ($pic as $key => $value) {
    //     if ($value["error"] > 0) {
    //         echo "Error:" . $value["error"];
    //     } else {
        
    //         $file_path = "../../img/acSelf/";
    //         if (!file_exists($file_path)) {
    //             mkdir($file_path);
    //         }
    //         $from = $value["tmp_name"];
    //         $to = $file_path . $actName . "actpic" . $key;
    //         move_uploaded_file($from, $to);
    //     }
    // }
   
    if(isset($_GET["csNo"])){

        $sql="insert into activity
            (actName, actPstart, actPend, actStart, actEnd, actContent, actMin, actMax, csNo, actCost, actBool, actAddress)
            value
            (:actName, :actPstart, :actPend, :actStart, :actEnd, :actContent, :actMin, :actMax,:csNo, :actCost, :actBool, :actAddress); ";

            $products = $pdo->prepare($sql);
            $products->bindValue(':csNo', $csNo);
    }else{

        $sql="insert into activity
            (actName, actPstart, actPend, actStart, actEnd, actContent, actMin, actMax , actHost, actHostTitle, actHostInfo, actCost, actBool, actAddress)
            value
            (:actName, :actPstart, :actPend, :actStart, :actEnd, :actContent, :actMin, :actMax, :actHost, :actHostTitle, :actHostInfo, :actCost, :actBool, :actAddress)
        ; ";
            $products = $pdo->prepare($sql);
            $products->bindValue(':actHost', $actHost);
            $products->bindValue(':actHostTitle', $actHostTitle);
            $products->bindValue(':actHostInfo', $actHostInfo);
    }
            

            $products->bindValue(':actName', $actName);
            $products->bindValue(':actPstart', $actPstart);
            $products->bindValue(':actPend', $actPend);
            $products->bindValue(':actStart', $actStart);
            $products->bindValue(':actEnd', $actEnd);
            $products->bindValue(':actContent', $actContent);
            $products->bindValue(':actMin', $actMin);
            $products->bindValue(':actMax', $actMax);
            // $products->bindValue(':actHostPic', $actHostPic);
            $products->bindValue(':actCost', $actCost);
            $products->bindValue(':actBool', $actBool);
            $products->bindValue(':actAddress', $actAddress);
            // $products->bindValue(':actTypeno', $actTypeno);
            // $products->bindValue(':actpic1', $actpic1);
            // $products->bindValue(':actpic2', $actpic2);
            // $products->bindValue(':actpic3', $actpic3);
            $products -> execute();       



            // insert into activitytype
            // (actTypeNo)
            // value
            // (:actTypeNo)
    
            // insert into actPicContent
            // (actpic1, actpic2, actpic3)
            // value
            // (:actpic1, :actpic2, :actpic3)


            
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
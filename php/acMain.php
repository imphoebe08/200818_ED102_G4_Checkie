<?php  
// $psn = $_REQUEST["psn"];
$errMsg = "";
//連線資料庫
try{
  require_once("./connectBook.php");


  $sql = "select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, a.actMin, a.actMax, a.actCount, a.csNo, a.actHost, a.actHostTitle, a.actHostInfo, a.actHostPic, a.actCost, a.actBool, a.actAddress, a.actpic1, a.actpic2, a.actpic3,
          b.actTypeNo, c.actClassName 'typename1', b.actTypeNo2, d.actClassName 'typename2'
          from activity a 
          join actTypeNoCombo b on a.actno = b.actno
          left join actclass c on b.acttypeno = c.actclassno
          left join actclass d on b.acttypeno2 = d.actclassno limit 1,6;
          ";
  $products = $pdo->query($sql);
  $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
  $data_array= array();
  foreach ($prodRow as $key => $value) {
    $prodRow[$key]["isCollect"] = false;

    // array_push($data_array , array(
    //   "isCollect" => false,
    //   "actNo" => $prodRow[$key]["actNo"],
    //   "actName" => $prodRow[$key]["actName"],
    //   "actPstart" => $prodRow[$key]["actPstart"],
    //   "actPend" => $prodRow[$key]["actPend"],
    //   "actStart" => $prodRow[$key]["actStart"],
    //   "actEnd" => $prodRow[$key]["actEnd"],
    //   "actContent" => $prodRow[$key]["actContent"],
    //   "actMin" => $prodRow[$key]["actMin"],
    //   "actMax" => $prodRow[$key]["actMax"],
    //   "actCount" => $prodRow[$key]["actCount"],
    //   "csNo" => $prodRow[$key]["csNo"],
    //   "actHost" => $prodRow[$key]["actHost"],
    //   "actHostTitle" => $prodRow[$key]["actHostTitle"],
    //   "actHostInfo" => $prodRow[$key]["actHostInfo"],
    //   "actHostPic" => $prodRow[$key]["actHostPic"],
    //   "actAddress" => $prodRow[$key]["actAddress"],
    //   "actCost" => $prodRow[$key]["actCost"],
    //   "actBool" => $prodRow[$key]["actBool"],
    //   "actpic1" => $prodRow[$key]["actpic1"],
    //   "actpic2" => $prodRow[$key]["actpic2"],
    //   "actpic3" => $prodRow[$key]["actpic3"],
    //   "actTypeno" => explode(",", $prodRow[$key]["actTypeno"])
    // ));
  }
  echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
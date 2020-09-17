<?php  
$errMsg = "";
//連線資料庫

try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);

  $actNo = $_GET["actNo"];

        $sql = "select a.actNo 'actNo', a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd',
                a.actContent, a.actMin, a.actMax, a.csNo, a.actHost, a.actHostTitle, a.actHostInfo, a.actHostPic, a.actCost, a.actBool, 
                a.actAddress, a.actpic1, a.actpic2, a.actpic3, e.actTypeno 'actTypeno'
                from activity a join actTypeNoCombo b on a.actno = b.actno
                                left join acttypeview c on b.acttypeno = c.acttypeno
                                left join acttypeview d on b.acttypeno2 = d.acttypeno2
                                join actnogroup e on a.actno = e.actno

                where a.actno = :actNo
                group by actno;";
        $products = $pdo->prepare($sql);
        $products->bindValue(':actNo', $actNo);
        $products->execute();       
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);

        $data_array = array(
          "actNo" => $prodRow[0]["actNo"],
          "actName" => $prodRow[0]["actName"],
          "actPstart" => $prodRow[0]["actPstart"],
          "actPend" => $prodRow[0]["actPend"],
          "actStart" => $prodRow[0]["actStart"],
          "actEnd" => $prodRow[0]["actEnd"],
          "actContent" => $prodRow[0]["actContent"],
          "actMin" => $prodRow[0]["actMin"],
          "actMax" => $prodRow[0]["actMax"],
          "csNo" => $prodRow[0]["csNo"],
          "actHost" => $prodRow[0]["actHost"],
          "actHostTitle" => $prodRow[0]["actHostTitle"],
          "actHostInfo" => $prodRow[0]["actHostInfo"],
          "actHostPic" => $prodRow[0]["actHostPic"],
          "actAddress" => $prodRow[0]["actAddress"],
          "actCost" => $prodRow[0]["actCost"],
          "actBool" => $prodRow[0]["actBool"],
          "actpic1" => $prodRow[0]["actpic1"],
          "actpic2" => $prodRow[0]["actpic2"],
          "actpic3" => $prodRow[0]["actpic3"],
          "actTypeno" => explode(",", $prodRow[0]["actTypeno"])
        );




        echo json_encode($data_array);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
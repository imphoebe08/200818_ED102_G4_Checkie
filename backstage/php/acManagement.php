<?php  
$errMsg = "";
//連線資料庫

try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);
  $acttypeno = ($_REQUEST["typeSelect"] == 0)? 'b.acttypeno': $_REQUEST["typeSelect"] ;

        $sql = "select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, a.actMin, a.actMax, a.actCount, a.csNo, a.actHost, a.actHostTitle, a.actHostInfo, a.actHostPic, a.actCost, a.actBool, 
                a.actAddress, a.actpic1, a.actpic2, a.actpic3, b.actTypeNo, c.actTypeName1 'typename1', b.actTypeNo2, d.actTypeName2 'typename2'
                from activity a join actTypeNoCombo b on a.actno = b.actno
                                left join acttypeview c on b.acttypeno = c.acttypeno
                                left join acttypeview d on b.acttypeno2 = d.acttypeno2
                where b.acttypeno = $acttypeno
                group by actno
                order by actno;
        ";
        $products = $pdo->query($sql);
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
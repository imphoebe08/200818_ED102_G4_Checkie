<?php  
$errMsg = "";
//連線資料庫
try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);


  $sql = "select a.actno, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart, '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actMin, a.actMax, a.actCount, b.actTypeNo, c.actClassName 'typename1', b.actTypeNo2, d.actClassName 'typename2'
          from activity a 
          join actTypeNoCombo b on a.actno = b.actno
          left join actclass c on b.acttypeno = c.actclassno
          left join actclass d on b.acttypeno2 = d.actclassno
          order by actno";
  $products = $pdo->query($sql);
  $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
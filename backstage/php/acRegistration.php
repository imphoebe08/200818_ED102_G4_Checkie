<?php  
$errMsg = "";
//連線資料庫
try{
  require_once("./connectBook.php");
  $acttypeno = ($_REQUEST["typeSelect"] == 0)? 'b.acttypeno': $_REQUEST["typeSelect"] ;
  $actPstartY = ($_REQUEST["yearSelect"] == 0)? 'year(a.actPstart)': $_REQUEST["yearSelect"] ;
  $actPstartM = ($_REQUEST["monSelect"] == 0)? 'month(a.actPstart)': $_REQUEST["monSelect"] ;


  $sql = "select a.actno, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart, '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actMin, a.actMax, a.actCount, b.actTypeNo, c.actClassName 'typename1', b.actTypeNo2, d.actClassName 'typename2'
          from activity a 
          join actTypeNoCombo b on a.actno = b.actno
          left join actclass c on b.acttypeno = c.actclassno
          left join actclass d on b.acttypeno2 = d.actclassno
          where b.acttypeno = $acttypeno and year(a.actPstart) = $actPstartY and month(a.actPstart) = $actPstartM;
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
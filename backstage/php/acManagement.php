<?php  
$errMsg = "";
//連線資料庫

try{
  $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);

    if(isset($_GET["actNo"])){
        $actNo = $_GET["actNo"];
        if($_GET["actNo"] == 0){
            $sql="
            select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, a.actMin, a.actMax, a.actCount, a.csNo, a.actHost, a.actHostTitle, a.actHostInfo, a.acHostPic, a.actCost, a.actBool, a.actAddress, 
                            b.actPicContent 'banner', c.actPicContent 'pic1', d.actPicContent 'pic2', e.actTypeNo, f.actClassName 'typename1', e.actTypeNo2, g.actClassName 'typename2'
            from activity a join pic1 b on a.actNo = b.actNo
                            join pic2 c on a.actNo = c.actNo
                            join pic3 d on a.actNo = d.actNo
                            join actTypeNoCombo e on a.actno = e.actno
                            left join actclass f on e.acttypeno = f.actclassno
                            left join actclass g on e.acttypeno2 = g.actclassno
            where actno=0
            order by actno;
            ";

        }else{

            $sql = "select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, a.actMin, a.actMax, a.actCount, a.csNo, a.actHost, a.actHostTitle, a.actHostInfo, a.acHostPic, a.actCost, a.actBool, a.actAddress, 
                    b.actTypeNo, c.actClassName 'typename1', b.actTypeNo2, d.actClassName 'typename2'
            from activity a 
            join actTypeNoCombo b on a.actno = b.actno
            left join actclass c on b.acttypeno = c.actclassno
            left join actclass d on b.acttypeno2 = d.actclassno
            where a.actno = :actNo;
            ";
            
            $products = $pdo->prepare($sql);
            $products->bindValue(':actNo', $actNo);
            $products -> execute();       
            $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($prodRow);
        };       
    
    }else{

        $sql = "select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', 
                Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, 
                a.actMin, a.actMax, a.actCount, a.csNo, e.csName,a.actHost, a.actHostTitle, a.actHostInfo, a.acHostPic,e.csPic, a.actCost, 
                a.actBool, a.actAddress, b.actTypeNo, c.actClassName 'typename1', b.actTypeNo2, d.actClassName 'typename2'
                from activity a 
                join actTypeNoCombo b on a.actno = b.actno
                left join actclass c on b.acttypeno = c.actclassno
                left join actclass d on b.acttypeno2 = d.actclassno
                left join counselor e on a.csNo = e.csNo
                order by actno;
        ";

          
        $products = $pdo->query($sql);
        $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRow);
    }


  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
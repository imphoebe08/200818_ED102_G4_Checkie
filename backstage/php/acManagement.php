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
        $actName = $_GET["actName"];
        $actPstart = $_GET["actPstart"];
        $actPend = $_GET["actPend"];
        $actStart = $_GET["actStart"];
        $actEnd = $_GET["actEnd"];
        $actContent = $_GET["actContent"];
        $actMin = $_GET["actMin"];
        $actMax = $_GET["actMax"];
        $actCount = $_GET["actCount"];
        $csNo = $_GET["csNo"];
        $actHost = $_GET["actHost"];
        $actHostTitle = $_GET["actHostTitle"];
        $actHostInfo = $_GET["actHostInfo"];
        $acHostPic = $_GET["acHostPic"];
        $actCost = $_GET["actCost"];
        $actBool = $_GET["actBool"];
        $actAddress = $_GET["actAddress"];
        $actTypeNo = $_GET["actTypeno"];
        $actPicContent = $_GET["pic1"];
        $actPicContent = $_GET["pic2"];
        $actPicContent = $_GET["banner"];

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

            $sql = "update activity
                    set actName=:actName, actPstart = :actPstart, actPend = :actPstart, actStart = :actStart, actEnd = :actEnd, 
                    actContent = :actContent, actMin = :actMin, actMax = :actMax, actCount = :actCount, csNo = :csNo, actHost = :actHost, actHostTitle = :actHostTitle, actHostInfo = :actHostInfo, acHostPic = :acHostPic, actCost = :actCost, actBool = :actBool, actAddress = :actAddress, 
                    where actNo = :actNo;

                    update activitytype
                    set actTypeNo = :actTypeNo
                    where actNo = :actNo;

                    update actPicContent
                    set actPicContent = :pic1
                    where actNo = :actNo & actPicNo =:actPicNo; 


            ";
            
            $products = $pdo->prepare($sql);
            $products->bindValue(':actNo', $actNo);
            $products->bindValue(':actName', $actName);
            $products->bindValue(':actPstart', $actPstart);
            $products->bindValue(':actPend', $actPend);
            $products->bindValue(':actStart', $act);
            $products->bindValue(':actEnd', $actEnd);
            $products->bindValue(':actContent', $actContent);
            $products->bindValue(':csNo', $csNo);
            $products->bindValue(':actHost', $actHost);
            $products->bindValue(':actHostTitle', $actHostTitle);
            $products->bindValue(':actHostInfo', $actHostInfo);
            $products->bindValue(':acHostPic', $acHostPic);
            $products->bindValue(':actCost', $actCost);
            $products->bindValue(':actHostInfo', $actHostInfo);
            $products->bindValue(':actBool', $actBool);
            $products->bindValue(':actAddress', $actAddress);
            $products->bindValue(':actTypeno', $actTypeno);
            $products->bindValue(':pic1', $actBool);
            $products->bindValue(':pic2', $actBool);
            $products->bindValue(':banner', $actBool);
            $products -> execute();       
            $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($prodRow);
        };       
    
    }else{

        $sql = "select a.actNo, a.actName, Date_Format(a.actPstart, '%Y-%m-%d %H:%I') 'actPstart', Date_Format(a.actPend, '%Y-%m-%d %H:%I') 'actPend', 
                Date_Format(a.actStart , '%Y-%m-%d %H:%I') 'actStart', Date_Format(a.actEnd, '%Y-%m-%d %H:%I') 'actEnd', a.actContent, 
                a.actMin, a.actMax, a.actCount, a.csNo, e.csName,a.actHost, a.actHostTitle, a.actHostInfo, a.actHostPic,e.csPic, a.actCost, 
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
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

        $sql = "select a.actOno, a.memNo, a.actNo, Date_Format(a.actOTime, '%Y-%m-%d %H:%I') 'actOTime', a.acName, a.acTel, a.acGender, a.acEmail, a.acTicket, a.acPrice, a.acPayment,
                b.actName
                from actorder a
                join activity b on a.actNo = b.actNo
                where a.actNo=:actNo";

                $products = $pdo->prepare($sql);
                $products->bindValue(':actNo', $actNo);
                $products -> execute();
                $prodRow = $products->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($prodRow);
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine();
  echo $errMsg;
}
?>
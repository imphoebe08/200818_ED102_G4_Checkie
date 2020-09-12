<?php  
$actNo = $_REQUEST["actNo"];
// $actNo =1;
$errMsg = "";
//連線資料庫
try{
    $dsn = "mysql:host=localhost;port=8889;dbname=0908Checkie;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password, $options);


    $sql = "
    select a.*, b.actPicContent 'banner', c.actPicContent 'pic1', d.actPicContent 'pic2', e.actTypeNo
    from activity a join pic1 b on a.actNo = b.actNo
                    join pic2 c on a.actNo = c.actNo
                    join pic3 d on a.actNo = d.actNo
                    join actnogroup e on a.actNo = e.actNo
    where a.actNo = b.actNo";
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
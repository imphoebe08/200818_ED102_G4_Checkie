<?php
try{
        require_once("./connectBook.php");//連結資料庫
        
        function GetIP(){
            if(!empty($_SERVER["HTTP_CLIENT_IP"])){
             $cip = $_SERVER["HTTP_CLIENT_IP"];
            }
            elseif(!empty($_SERVER["HTTP_X_FORWARDED_FOR"])){
             $cip = $_SERVER["HTTP_X_FORWARDED_FOR"];
            }
            elseif(!empty($_SERVER["REMOTE_ADDR"])){
             $cip = $_SERVER["REMOTE_ADDR"];
            }
            else{
             $cip = "無法取得IP位址！";
            }
            return $cip;
           }
           $ip = GetIP();

        //    setinterval 即時新增訊息
        $sql = "INSERT INTO `ed102g4`.`service` (`serFrom`, `serContent`, `serTime`, `memIP`, `admNo`) VALUES (0, :serContent, current_time(), 1, '0');";
        // $sql = "INSERT INTO `ed102g4`.`service` (`serFrom`, `serContent`, `serTime`, `memIP`, `admNo`) VALUES (0, :serContent, current_time(), $ip, '0');";
        $serContent = $_REQUEST["serContent"];
        $message = $pdo->prepare($sql);
        $message->bindValue(":serContent", $serContent);

        $message->execute();
             
        
        




        
}catch(PDOException $e){
  echo $e->getMessage();

}
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

        $serNo = $_REQUEST["serNo"];   
        //    setinterval 即時新增訊息
        $sql = "select * from service  where memIp=$ip and serNo >:serNo order by serno desc;";
        // $sql = "select * from service  where memIp=$ip and serNo >:serNo order by serno desc;";
        
        $message = $pdo->prepare($sql);
        $message->bindValue(":serNo", $serNo);

        $message->execute();
        if( $message->rowCount()==0){ 
          echo "no";
        }else{ 
          $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);
          echo json_encode($messageRow,JSON_UNESCAPED_UNICODE);
        };
        //    抓取內容
        // $memContent = $_POST["memContent"];
        
        // $sql2 = "INSERT INTO `ed102g4`.`service` (`serFrom`, `serContent`, `serTime`, `memIP`, `admNo`) VALUES (0, :memContent, current_time(), $ip, '0');";
        // $member2 = $pdo->prepare($sql2);
        // $member2->bindValue(":memContent", $memContent);
        // $member2->execute();
             
        
        




        
}catch(PDOException $e){
  echo $e->getMessage();

}
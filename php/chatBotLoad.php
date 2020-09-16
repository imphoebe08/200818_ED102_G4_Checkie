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


        //    loadding內容
        $memContent = $_POST["memContent"];
        $sql = "select * from service  where memIp=$ip order by serno;";
        $message = $pdo->prepare($sql);
        $message->execute();
        if( $message->rowCount()==0){ 
        echo "{}";
        }else{ 
        $messageRow = $message->fetchAll(PDO::FETCH_ASSOC);
        
        // $result = array("csName"=>$messageRow["csName"],"csPic"=>$messageRow["csPic"]);
        //           echo json_encode($result);
        //   }
        echo json_encode($messageRow,JSON_UNESCAPED_UNICODE);
        };
        //    抓取內容
        // $memContent = $_POST["memContent"];

        // $sql2 = "insert into service(serFrom, serContent, serTime,memIp) values (0, :memContent,current_time(),$ip);";
        // $member2 = $pdo->prepare($sql2);
        // $member2->bindValue(":memContent", $memContent);
        // $member2->execute();
             
        
        




        
}catch(PDOException $e){
  echo $e->getMessage();

}
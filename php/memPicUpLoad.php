<?php
    try{
        require_once("./connectBook.php");
        if ($_FILES["memPic"]["error"] > 0) {
            echo "Error:" . $_FILES["memPic"]["error"];
        } else {
            $from = $_FILES["memPic"]["tmp_name"];
            $to = "../img/user/" . $_FILES["memPic"]["name"];
            
            $to2 = '../backstage/img/user/'.$_FILES["memPic"]["name"];
            $to3 = "./img/user/" . $_FILES["memPic"]["name"];
            copy($from, $to);
            copy($from, $to2);
        }
    
        $sql = "UPDATE `member` SET `memPic` = :memPic 
                WHERE (`memNo` = :memNo);";
    
        $memberOrder = $pdo->prepare($sql);

    
        $memberOrder->bindValue(":memPic", $to3);
        $memberOrder->bindValue(":memNo", $_POST["memNo"]);
        $memberOrder->execute();
        echo 'aaaa';
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    
?>

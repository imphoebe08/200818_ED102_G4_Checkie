<?php
    try{
        require_once("./connectBook.php");
        if ($_FILES["memPic"]["error"] > 0) {
            echo "Error:" . $_FILES["memPic"]["error"];
        } else {
            $from = $_FILES["memPic"]["tmp_name"];
            $to = "../img/user/" . $_FILES["memPic"]["name"];
            copy($from, $to);
        
            echo "$to";
        }
    
        $sql = "UPDATE `member` SET `memPic` = :memPic 
                WHERE (`memNo` = :memNo);";
    
        $memberOrder = $pdo->prepare($sql);

    
        $memberOrder->bindValue(":memPic", $to);
        $memberOrder->bindValue(":memNo", $_POST["memNo"]);
        $memberOrder->execute();
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    
?>

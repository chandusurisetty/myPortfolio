<?php
    $server="sql105.epizy.com";
    $username="epiz_29646413";
    $password="hvZdQBDTBDeZP";
    $dbname="epiz_29646413_infobar";
    $conn=mysqli_connect($server,$username,$password,$dbname);

    if(!$conn){
        die("Connection Failed:".mysqli_connect_error());
    }
?>
<?php 
    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "dbsekolah";
    $conn = mysqli_connect($host, $user, $password, $db);
    $sql = "SELECT * FROM tb_siswa";
    $query = mysqli_query($conn, $sql);
    
    $siswa = mysqli_fetch_assoc($query);
    // var_dump($siswa);
    echo $siswa['nama'];
?>
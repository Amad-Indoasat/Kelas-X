<?php 

    require_once "../function.php";

    // $id=1;

    $sql = "DELETE FROM tblkategori WHERE idkategori = $id";

    $result = mysqli_query($koneksi, $sql);

    header("location:https://localhost/php-smk//Restoran/kategori/select.php");

?>
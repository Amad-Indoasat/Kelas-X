<?php

require_once "koneksi.php";

$data = stripcslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$idpelanggan = $dataPelanggan['idpelanggan'];
$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {



    $sql = "UPDATE tblpelanggan SET pelanggan = '$pelanggan', pelanggan = '$alamat',  pelanggan = '$telp' WHERE idpepanggan=$idpelanggan";
    if ($result = mysqli_query($conn, $sql)) {
        echo "Data Sudah Diubah";
    } else {
        echo "Data Gagal Diubah";
    };
} else {
    echo "Data Kosong";
}

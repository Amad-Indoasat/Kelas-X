<?php

require_once "koneksi.php";

$data = stripcslashes(file_get_contents("php://input"));
$idPelanggan = json_decode($data, true);

$idpelanggan = $idPelanggan['idpelanggan'];


if (!empty($idpelanggan) ) {
    $sql = "DELETE FORM tblpelanggan WHERE idpelanggan=$idpelanggan";
    if ($result = mysqli_query($conn, $sql)) {
        echo "Data Sudah Dihapus";
    } else {
        echo "Data Gagal Dihapus";
    };
} else {
    echo "Data Belum Dipilih";
}

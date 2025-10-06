<?php

require_once "koneksi.php";
$data = stripcslashes(file_get_contents("php://input"));
$idPelanggan = json_decode($data, true);

$idpelanggan = $idPelanggan['idpelanggan'];
$sql = "SELECT * FROM tblpelanggan WHERE idpelanggan=$idpelanggan";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);

echo json_encode($row);

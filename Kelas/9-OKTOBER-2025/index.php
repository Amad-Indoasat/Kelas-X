<!-- belajar php

<h1>saya belajar php</h1> -->

<?php

// echo "<h2>Saya belajar php</h2>";
// echo "Saya Kelas: ";
// echo 12;

// nama kelas alamat umur hobi cita-cita

$nama = "Achmad hidayat";
$kelas = "10-Rpl";
$alamat = "Tanggulangin";
$umur = "16 Tahun";
$hobi = "Bermain game,Tidur";
$cita = "Live Peacefully";
$enter = "<br>";

echo $nama;
echo $enter;

echo $kelas;
echo $enter;

echo $alamat;
echo $enter;

echo $umur;
echo $enter;

echo $hobi;
echo $enter;

echo $cita;

// echo "<strong>NAMA: </strong>";
// echo "Achmad hidayat";
// echo "<br>";
// echo "<strong>KELAS:</strong>";
// echo " X-RPL";
// echo "<br>";
// echo "<strong>ALAMAT: </strong>";
// echo "Tanggulangin";
// echo "<br>";
// echo "<strong>UMUR:</strong>";
// echo " 16 Tahun";
// echo "<br>";
// echo "<strong>HOBI:</strong>";
// echo " Bermain Game,Tidur" . "<br>";
// echo "<strong>Cita-Cita:</strong>";
// echo " Live Peacefully" . "<br>";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Amad</title>
</head>

<body>
    <div>
        <h1>Identitas</h1>
        <table border="1px">
            <Tbody>
                <tr>
                    <td>Nama :</td>
                    <td><?= $nama;  ?></td>
                </tr>
                <tr>
                    <td>Alamat : </td>
                    <td><?= $alamat;  ?></td>
                </tr>
                <tr>
                    <td>Kelas :</td>
                    <td><?= $kelas;  ?></td>
                </tr>
                <tr>
                    <td>Umur :</td>
                    <td><?= $umur;  ?></td>
                </tr>
                <tr>
                    <td>Hobi :</td>
                    <td><?= $hobi;  ?></td>
                </tr>
                <tr>
                    <td>Cita-Cita :</td>
                    <td><?= $cita;  ?></td>
                </tr>
            </Tbody>
        </table>
    </div>
</body>

</html>
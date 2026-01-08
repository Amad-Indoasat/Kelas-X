<?php

$title = ["Daftar Kegiatan Sekolah", "Jadwal Kegiatan Sekolah", "Galeri Kegiatan Sekolah"];
$listK = ["Upacara Bendera setiap hari Senin", "Kegiatan Pramuka setiap hari Jumat", "Lomba Kebersihan Kelas setiap bulan", "Class Meeting akhir semester",];
$th = ["Tanggal", "Nama Kegiatan", "Tempat", "Keterangan"];
$tanggalK = ["10 Oktober 2025", "15 Oktober 2025", "1 November 2025"];
$judulK = ["Upacara Hari Pahlawan", "Lomba Cerdas Cermat", "Pentas Seni"];
$tempatK = ["Lapangan Sekolah", "Aula", "Lapangan Utama"];
$hadirin = ["Seluruh siswa wajib hadir", "Peserta: perwakilan tiap kelas", "Terbuka untuk umum"];
$ct = ["Upacara Bendera", "Kegiatan Pramuka", "Pentas Seni"];
$img = ["../img/upacara.jpg", "../img/pramuka.jpg", "../img/lapangan"];
$lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo placeat tempore quidem consequatur enim itaque aliquid neque in hic tempora. Ullam, maxime dolore. Asperiores nam consectetur tempora architecto odio fugiat.";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kegiatan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="../tugas.php" aria-current="page">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="profil.php">Profil</a>
                    <a class="nav-link" href="kontak.php">Kontak</a>
                    <a class="nav-link active" aria-current="page" href="kegiatan.php">Kegiatan</a>
                    <a class="nav-link" href="jadwal.php">Jadwal</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <h2 class="mb-3"><?= $title[0]; ?></h2>
        <ul class="list-group">
            <li class="list-group-item"><?= $listK[0]; ?></li>
            <li class="list-group-item"><?= $listK[1]; ?></li>
            <li class="list-group-item"><?= $listK[2]; ?></li>
            <li class="list-group-item"><?= $listK[3]; ?></li>
        </ul>
    </div>
    <div class="container mt-4">
        <h2 class="mb-3"><?= $title[1]; ?></h2>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
                <tr>
                    <th><?= $th[0]; ?></th>
                    <th><?= $th[1]; ?></th>
                    <th><?= $th[2]; ?></th>
                    <th><?= $th[3]; ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?= $tanggalK[0]; ?></td>
                    <td><?= $judulK[0]; ?></td>
                    <td><?= $tempatK[0]; ?></td>
                    <td><?= $hadirin[0]; ?></td>
                </tr>
                <tr>
                    <td><?= $tanggalK[1]; ?></td>
                    <td><?= $judulK[1]; ?></td>
                    <td><?= $tempatK[1]; ?></td>
                    <td><?= $hadirin[1]; ?></td>
                </tr>
                <tr>
                    <td><?= $tanggalK[2]; ?></td>
                    <td><?= $judulK[2]; ?></td>
                    <td><?= $tempatK[2]; ?></td>
                    <td><?= $hadirin[2]; ?></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container mt-4">
        <h2 class="mb-3 text-center"><?= $title[2]; ?></h2>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="<?= $img[0]; ?>" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?= $ct[0]; ?></h5>
                        <p class="card-text"><?= $lorem; ?></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="<?= $img[1]; ?>" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?= $ct[1]; ?></h5>
                        <p class="card-text"><?= $lorem; ?></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="<?= $img[2]; ?>.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><?= $ct[2]; ?></h5>
                        <p class="card-text"><?= $lorem; ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>
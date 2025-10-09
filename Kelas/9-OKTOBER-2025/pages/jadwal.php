<?php

$jadwal = "Pelajaran";
$kelas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jadwal</title>
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
                    <a class="nav-link" href="kegiatan.php">Kegiatan</a>
                    <a class="nav-link active" aria-current="page" href="#">Jadwal</a>
                </div>
            </div>
        </div>
    </nav>
    <h2>Jadwal Pelajaran</h2>
    <div class="row">
        <div class="dropdown col-md-1">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Kelas 7
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#"><?= $kelas[0]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[1]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[2]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[3]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[4]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[5]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[6]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[7]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[8]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[9]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[10]; ?></a></li>
            </ul>
        </div>
        <div class="dropdown col-md-1">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Kelas 8
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#"><?= $kelas[0]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[1]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[2]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[3]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[4]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[5]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[6]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[7]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[8]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[9]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[10]; ?></a></li>
            </ul>
        </div>
        <div class="dropdown col-md-1">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Kelas 9
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#"><?= $kelas[0]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[1]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[2]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[3]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[4]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[5]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[6]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[7]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[8]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[9]; ?></a></li>
                <li><a class="dropdown-item" href="#"><?= $kelas[10]; ?></a></li>
            </ul>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Jam Ke</th>
                <th scope="col">Senin</th>
                <th scope="col">Selasa</th>
                <th scope="col">Rabu</th>
                <th scope="col">Kamis</th>
                <th scope="col">Jum'at</th>
                <th scope="col">Sabtu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
                <td><?= $jadwal; ?></td>
            </tr>
        </tbody>
    </table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

</body>

</html>
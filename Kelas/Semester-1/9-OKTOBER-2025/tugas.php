<?php
$menu = ['Profil', 'Kontak', 'Kegiatan', 'Jadwal'];
$lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo placeat tempore quidem consequatur enim itaque aliquid neque in hic tempora. Ullam, maxime dolore. Asperiores nam consectetur tempora architecto odio fugiat.";
$img = ["img/bangunan.jpg", "img/lapangan.jpg", "img/agus.jpg"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web SMPN 1 Tulangan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand active" href="#" aria-current="page">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="pages/profil.php">Profil</a>
                    <a class="nav-link" href="pages/kontak.php">Kontak</a>
                    <a class="nav-link" href="pages/kegiatan.php">Kegiatan</a>
                    <a class="nav-link" href="pages/jadwal.php">Jadwal</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem; margin: auto;">
                <img src="<?= $img[0]; ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><?= $lorem; ?></p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem; margin: auto;">
                <img src="<?= $img[1]; ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><?= $lorem; ?></p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem; margin: auto;">
                <img src="<?= $img[2]; ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><?= $lorem; ?></p>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>
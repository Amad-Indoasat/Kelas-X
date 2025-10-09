<?php

$kontak = ["Alamat", "Web", "Telp"];
$isiK = ["Jl. AMD Gelang Tulangan Sidoarjo", "smpn1tulangan.sch.id", "(031) 8851650"];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontak</title>
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
                    <a class="nav-link active" aria-current="page" href="kontak.php">Kontak</a>
                    <a class="nav-link" href="kegiatan.php">Kegiatan</a>
                    <a class="nav-link" href="jadwal.php">Jadwal</a>
                </div>
            </div>
        </div>
    </nav>
    <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col"><?= $kontak[0]; ?></th>
                <th scope="col"><?= $kontak[1]; ?></th>
                <th scope="col"><?= $kontak[2]; ?></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><?= $isiK[0]; ?></th>
                <th scope="row"><?= $isiK[1]; ?></th>
                <th scope="row"><?= $isiK[2]; ?></th>
            </tr>
        </tbody>
    </table>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Massage</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Kirim</button>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>
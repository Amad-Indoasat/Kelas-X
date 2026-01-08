<?php
$nama_sekolah = "SMP Negeri 1 Tulangan";
$alamat = "Jl. AMD Gelang Tulangan Sidoarjo";
$visi = "Ndak tau";
$misi = [
    "Meningkatkan kualitas pembelajaran.",
    "Menanamkan nilai-nilai karakter pada siswa.",
    "Meningkatkan prestasi akademik dan non-akademik."
];
$kepsek = "Agus Pujiono S.pd M.si";
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Sekolah</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
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
                    <a class="nav-link" aria-current="page" href="profil.php">Profil</a>
                    <a class="nav-link" href="kontak.php">Kontak</a>
                    <a class="nav-link" href="kegiatan.php">Kegiatan</a>
                    <a class="nav-link" href="jadwal.php">Jadwal</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <h2>Profil Sekolah</h2>
        <p><strong>Nama Sekolah:</strong> <?= $nama_sekolah; ?></p>
        <p><strong>Alamat:</strong> <?= $alamat; ?></p>
        <p><strong>Kepala Sekolah:</strong> <?= $kepsek; ?></p>

        <hr>
        <h4>Visi</h4>
        <p><?= $visi; ?></p>

        <h4>Misi</h4>
        <ul>
            <?php foreach ($misi as $item): ?>
                <li><?= $item; ?></li>
            <?php endforeach; ?>
        </ul>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
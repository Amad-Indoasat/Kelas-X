<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="img/Smenda.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="?menu=profil">Profil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?menu=sejarah">Sejarah</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?menu=jurusan">Jurusan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?menu=prestasi">Prestasi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?menu=kegiatan">Kegiatan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?menu=kontak">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section>
            <?php
            if (isset($_GET['menu'])) {
                $isi = $_GET['menu'];
                if ($isi == "sejarah") {
                    require_once "pages/sejarah.php";
                }

                if ($isi == "profil") {
                    require_once "pages/profil.php";
                }

                if ($isi == "jurusan") {
                    require_once "pages/jurusan.php";
                }

                if ($isi == "prestasi") {
                    require_once "pages/prestasi.php";
                }

                if ($isi == "kegiatan") {
                    require_once "pages/kegiatan.php";
                }

                if ($isi == "kontak") {
                    require_once "pages/kontak.php";
                }
            } else {
                require_once "pages/profil.php";
            }

            if (isset($_POST['tombol'])) {
                $nama = $_POST['nama'];
                $email = $_POST['email'];
                $pesan = $_POST['pesan'];

                echo $nama;
                echo "<br>";
                echo $email;
                echo "<br>";
                echo $pesan;
            }
            ?>
        </section>
        <footer>
            <p style="text-align: center;">
                Web ini dibuat oleh Achmad
            </p>
        </footer>

    </div>
</body>

</html>
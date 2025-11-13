<div style="width: 400px; background: #fff; padding: 20px; border-radius: 10px;">
    <form action="" method="post">

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label for="nis" style="width: 120px; font-weight: bold;">NIS:</label>
            <input type="number" name="nis" id="nis" required placeholder="Masukkan nis">
        </div>

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label for="nama" style="width: 120px; font-weight: bold;">NAMA:</label>
            <input type="text" name="nama" id="nama" required placeholder="Masukkan nama">
        </div>

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label for="alamat" style="width: 120px; font-weight: bold;">ALAMAT:</label>
            <input type="text" name="alamat" id="alamat" placeholder="Masukkan alamat">
        </div>

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label for="telp" style="width: 120px; font-weight: bold;">NO TELP:</label>
            <input type="text" name="telepon" id="telepon" placeholder="Masukkan no.telp">
        </div>

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <label for="" style="width: 120px; font-weight: bold;">JENIS KELAMIN: </label>
            <input type="file" name="" id="" style="flex: 1;">
        </div>

        <input type="submit" value="Simpan" name="simpan">
    </form>
</div>



<?php   
    $host = 'localhost';
    $user = 'root';
    $password= '';
    $db = 'dbseskolah';

    $koneksi = mysqli_connect($host, $user, $password, $db);

    if (isset($_POST['simpan'])) {
        $nis = $_POST ['nis'];
        $nama = $_POST ['nama'];
        $alamat =$_POST ['alamat'];
        $telepon =$_POST ['telepon'];
    }
    
    $sql = "INSERT INTO tblsiswa (nis, nama, alamat, telepon) VALUES ($nis,'$nama','$alamat','$telepon')";
    echo $sql;
    $query = mysqli_query($koneksi, $sql);

    $sql = "SELECT * FROM tblsiswa";
    $query = mysqli_query($koneksi, $sql);

   
        ?>

       <table border="1px">
            <thead>

     
                <tr>
                    <th>NIS</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                </tr>
            </thead>

            <tbody>
<?php  
    while ($siswa = mysqli_fetch_array($query)) {
?>
                <tr>
                    <td><?= $siswa['nis']?></td>
                    <td><?= $siswa['nama']?></td>
                    <td><?= $siswa['alamat']?></td>
                    <td><?= $siswa['telepon']?></td>
                </tr>
            

<?php
        
    }
    
?>

    
</tbody>
        </table>
        
<?php 


?>

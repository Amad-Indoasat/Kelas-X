<?php

        require_once "../dbcontroller.php";
        $db = new DB;
        $row = $db->getALL("SELECT *  FROM tblkategori ORDER BY kategori ASC");

?>
<h3>Insert menu</h3>
<div class="form-group">
    <form action="" method="post" enctype="multipart/form-data">

    <div class="form-group w-50 mb-3">
        <label for="idkategori">Kategori</label>
        <select name="idkategori" id="idkategori" class="form-control" required>
        <option value="">-- Pilih Kategori --</option>
        <?php foreach ($row as $r): ?>
        <option value="<?php echo $r['idkategori'] ?>">
        <?php echo $r['kategori'] ?>
        </option>
        <?php endforeach ?>
        </select>
    </div>
        
        
    </select>
        </div>

        <div class="form-group w-50">
            <label for="">Nama menu</label>
            <input type="text" name="menu" required placeholder="isi menu" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Harga</label>
            <input type="text" name="harga" numbaer required placeholder="isi harga" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Gambar</label><br>
            <input type="file" name="gambar">
        </div>

        <div>
            <input type="submit" name="simpan" value="simpan" class="btn btn-primary">
        </div>

        </form>
</div>

<?php 
    require_once "../dbcontroller.php";

    if (isset($_POST['simpan'])) {
        $idkategori = $_POST['idkategori'];
        $menu = $_POST['menu'];
        $harga = $_POST['harga'];
        $gambar = $_FILES['gambar']['name'];
        $temp = $_FILES['gambar']['tmp_name'];

        if (empty($gambar)) {
            echo "<h3>GAMBAR KOSONG</h3>";
        }else {
            $sql = "INSERT INTO tblmenu VALUES ('',$idkategori,'$menu','$gambar',$harga)";
            move_uploaded_file($temp,'../upload/'.$gambar);
             $db->runSQL($sql);
            header("location:?f=menu&m=select");
        }


    }

?>
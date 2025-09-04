<div class="float-start mr-4">
    <a class="btn btn-primary" href="?f=menu&m=insert" role="button">Tambah data</a>
</div>

<h3>Menu</h3>

<?php 

    if (isset($_POST['opsi'])) {
        $opsi = $_POST['opsi'];

        $where = "WHERE idkategori= $opsi";
    }else {
        $opsi = 0;
        $where = "";
    }

?>

<div class="mt-4 mb-4">
    <?php 
    
    $row = $db->getALL("SELECT *  FROM tblkategori ORDER BY kategori ASC");
    

    ?>

    <form action="" method="post">


    <div class="form-group w-50 mb-3">
    <label for="idkategori">Kategori</label>
     <select name="idkategori" id="idkategori" class="form-control" required>
            <option value="">-- Pilih Kategori --</option>
            <?php foreach ($row as $r): ?>
            <option <?php if($r['idkategori']==$opsi) echo "selected"; ?> value="<?php echo $r['idkategori'] ?>">
                <?php echo $r['kategori'] ?>
            </option>
        <?php endforeach ?>
     </select>
    </div>
       
        
    </select>

    </form>

</div>
<?php 

$jumlahdata = $db->rowCOUNT("SELECT idmenu FROM tblmenu $where");
$banyak = 4;

$halaman = ceil($jumlahdata / $banyak);

if (isset($_GET['p'])) {
        $p=$_GET['p'];
        $mulai = ($p * $banyak) - $banyak;

    }else{   
        $mulai = 0;
    }

$sql = "SELECT * FROM tblmenu $where ORDER BY menu ASC LIMIT $mulai,$banyak";
$row = $db->getALL($sql);

$no=1+$mulai;



?>

<table class="table table-bordered w-50">
    <thead>
        <tr>
            <th>No</th>
            <th>menu</th>
            <th>Harga</th>
            <th>Gambar</th>
        </tr>
    </thead>
    <tbody>
        <?php if (!empty($row)) { ?>
        <?php foreach ($row as $r): ?>
        <tr>
            <td><?php echo $no++ ?></td>
            <td><?php echo $r['menu'] ?></td>
            <td><?php echo $r['harga'] ?></td>
            <td><img style="width:100px" src="../upload/<?php echo $r['gambar'] ?>" alt=""></td>
            <td><a href="?f=menu&m=delete&id=<?php echo $r['idmenu'] ?>">Delete</a></td>
            <td><a href="?f=menu&m=update&id=<?php echo $r['idmenu'] ?>">Update</a></td>
        </tr>
        <?php endforeach ?>
        <?php } ?>
    </tbody>
</table>

<?php 

 for ($i=1 ; $i <=$halaman ; $i++ ) { 
        echo '<a href="?f=menu&m=select&p='.$i.'">'.$i.'</a>';
        echo '&nbsp &nbsp &nbsp';
    }

?>

<?php 

    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        $sql = "SELECT * FROM tblorder WHERE idorder=$id";

        $row = $db->getItem($sql);

        
    }

?>

<h3>Pembayaran Kategori</h3>

<div class="form-group">
    <form action="" method="post">
        <div class="form-group w-50">
            <label for="">Total</label>
            <input type="text" name="total" required value="<?php echo $row['total']?> " class="form-control">
        </div>

         <div class="form-group w-50">
            <label for="">Total</label>
            <input type="numbaer" name="bayar" required  class="form-control">
        </div>

        <div>
            <input type="submit" name="simpan" value="bayar" class="btn btn-primary">
        </div>

        </form>
</div>

<?php 
    require_once "../dbcontroller.php";

    if (isset($_POST['simpan'])) {
        $bayar = $_POST['bayar'];

        $kembali =$bayar - $row['total'];

        $sql = "UPDATE tblorder SET bayar='$bayar', kembali=$kembali, status=1 WHERE idorder=$id";

        if ($kembali < 0) {
            echo "<h3>Kalau gak punya uang jangan beli</h3>";
        }else {
             $db->runSQL($sql);

            header("location:?f=order&m=select");
        }

    




    }

?>
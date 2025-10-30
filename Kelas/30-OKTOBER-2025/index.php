<form action="" method="post">
    Tanggal : 
    <input type="number" name="tanggal" placeholder="tanggal"> <br>
    Bulan : 
    <input type="number" name="bulan" placeholder="bulan"> <br>

    <input type="submit" value="Zodiak anda " name="kirim">
</form>

<form action="" method="post">
    <input type="number" name="a" placeholder="angka 1">
    <input type="number" name="b" placeholder="angaka 2">
    <select name="hasil" id="">
        <option name="hasil" value="+">+</option>
        <option name="hasil" value="-">-</option>
        <option name="hasil" value="*">*</option>
        <option name="hasil" value="/">/</option>
    </select>
    <input type="submit" value="hasil" placeholder="hasil">
</form>

<?php 

    if (isset($_POST['hasil'])) {
        $hasil=$_POST['hasil'];
        $a = $_POST['a'];
        $b = $_POST['b'];

        if ($hasil == '+') {
            echo "Hasilnya adalah : ";
            echo $a + $b;
        }
        if ($hasil == '-') {
            echo "Hasilnya adalah : ";
            echo $a - $b;
        }
        if ($hasil == '*') {
            echo "Hasilnya adalah : ";
            echo $a * $b;
        }
        if ($hasil == '/') {
            echo "Hasilnya adalah : ";
            echo $a / $b;
        }
        echo "<br>";
    }

    if (isset($_POST['kirim'])) {
        $tanggal = $_POST['tanggal'];
        $bulan = $_POST['bulan'];

        cekZodiak($tanggal,$bulan);
    }    

    function belajar() {
        echo"Hari ini saya belajar function";
    }

    // belajar();

    

    function cekTanggal( $tanggal) {

        if ($tanggal > 0 && $tanggal < 32) {
           return true;
        }else {
           return false;
        }
    }
    
    // cekTanggal(1);
    // cekTanggal(0);
    // cekTanggal(100);

    function cekZodiak($tanggal , $bulan) {

   
        

        if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {

        if ($bulan == 1) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo"Zodiak anda capricorn ";
            }else{
                echo"Zodiak anda aquarius ";
            }
        }

        if ($bulan == 2) {
            if ($tanggal > 0 && $tanggal < 20) {
                echo"Zodiak anda aquarius ";
            }else{
                echo"Zodiak anda pisces ";
            }
        }

        if ($bulan == 3) {
            if ($tanggal >0 && $tanggal <20) {
                echo"Zodiak anda pisces ";
            }else{
                echo"zodiak anda aries ";
            }
        }

        if($bulan == 4) {
            if ($tanggal >0 && $tanggal <22) {
                echo"Zodiak anda aries ";
            }else{
                echo"Zodiak anda taurus ";
            }
        }
        if ($bulan == 5) {
            if ($tanggal >0 && $tanggal <22) {
                echo"Zodiak anda taurus ";
            }else{
                echo"Zodiak anda gemini ";
            }
        }
        if ($bulan == 6) {
            if ($tanggal >0 && $tanggal <21 ) {
                echo"Zodiak anda gemini ";
            }else {
                echo"Zodiak anda cancer ";
            }
        }
        if ($bulan == 7) {
            if ($tanggal >0 && $tanggal <23) {
                echo"Zodiak anda cancer ";
            }else{
                echo"zodiak anda leo ";
            }
        }
        if ($bulan == 8) {
            if ($tanggal >0 && $tanggal <23) {
                echo"zodiak anda leo ";
            }else{
                echo"Zodiak anda virgo ";
            }
        }
        if ($bulan == 9) {
            if ($tanggal >0 && $tanggal <23) {
                echo"Zodiak anda virgo ";
            }else{
                echo"Zodiak anda libra ";
            }
        }
        if ($bulan == 10) {
            if ($tanggal >0 && $tanggal <23) {
                echo"zodiak anda libra ";
            }else{
                echo"Zodiak anda scorpio ";
            }
        }
        if ($bulan == 11) {
            if ($tanggal >0 && $tanggal <22) {
                echo "zodiak anda scorpio ";
            }else {
                echo"Zodiak anda sagitarius ";
            }
        }
        if ($bulan == 12) {
            if ($tanggal >0 && $tanggal <22) {
                echo"zodiak anda sagitarius ";
            }else{
                echo"zodiak anda capricorn ";
            }
        }
    }else {
        echo"tanggal atau bulan salah";
    }
        echo "<br>";
    }

    // cekZodiak(3,4);
    // cekZodiak(5,9);

    function cekBulan($bulan) {
        if ($bulan >0 && $bulan <13) {
            return true;
        }else{
            return false;
        }
    }

    cekBulan(0);

    if (cekBulan(0) && cekTanggal(0))   {
        echo"bulan atau tanggal benar ";
    }else {
        echo"bulan atau tanggal salah ";
    }

    function luasPersegiPanjang($p , $l) {
        $luas = $p * $l;

        return $luas;
    }
    $p=34;
    $l=69;
    $t=99;

    echo"<br>";
    echo"volume balok dengan p=5 l=3 dan tinggi 15 adalah: ";
    echo luasPersegiPanjang($p, $l) * $t;

    $a=9;
    $b=6;
    function tambah($a , $b) {
        $hasil = $a + $b;
        return $hasil;
    }
    function kurang($a,$b){
        $hasil = $a - $b;
        return $hasil;
    }
    function kali($a,$b){
        $hasil = $a * $b;
        return $hasil;
    }
    function bagi($a,$b){
        $hasil = $a / $b;
        return $hasil;
    }

    echo "<br>";
    echo tambah($a, $b);
    echo "<br>";
    echo kurang($a, $b);
    echo "<br>";
    echo kali($a , $b);
    echo "<br>";
    echo bagi($a,$b);
?>
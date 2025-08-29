<?php 
    //operator mtk
    $a = 5;
    $b = 2;
    $c = $a + $b;
    $d = 7;
    $e = 7;

    echo $c.'<br>';

    $c = $a - $b;
    echo $c.'<br>';

    $c = $a * $b;
    echo $c.'<br>';

    $c = $a / $b;
    echo round($c).'<br>';//Pembulatan keastas

    $c = $a / $b;
    echo floor($c).'<br>';//Pembulatan kebawah

    $c = $a % $b;
    echo $c.'<br>';//modulo adalah sisa pembagian

    //operator logika
    $c = $a < $b;
    echo $c; //Jika tidak keluar hasilnya false

    $c = $a > $b;
    echo $c.'<br>';

    $c = $d == $e;
    echo $c.'<br>';

    $c = $a != $b;//Tidak sama dengan
    echo $c.'<br>';

    //operator increment artinya naik
    $a++;
    echo $a.'<br>';
    //operator decrement artinya turun
    $b--;
    echo $b.'<br>';

    //operator string
    $kata = 'Sura';
    $kota = 'baya';

    $hasil = $kata.$kota;

    $hasil .=' KOTA PAHLAWAN';
    echo $hasil;

?>
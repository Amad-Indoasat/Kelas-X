<?php 

    // $nama = array("joni","tejo","siti",100);

    // var_dump($nama);

    // echo '<br>';

    // foreach ($nama as $key) {
    //     echo $key.'<br>';
    // }

    $nama = array(
        "tejo" => "surabaya",
        "budi" => "sidoarjo",
        "siti" => "malang",
    );

    var_dump ($nama);
    echo '<br>';
    foreach ($nama as $key => $value) {
        echo $key.'-'.$value;
        echo '<br>';
    }

?>
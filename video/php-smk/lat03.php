<?php 

//funcion adalah tempat untuk menyimpan kode

    function belajar(){
        echo "saya belajar php";
    }

    function Luaspersegi( $p = 5, $l = 3){
    $luas = $p * $l;
    echo $luas;
    }
    
    function Luas( $p = 5, $l = 3){
    $luas = $p * $l;

    return $luas;
    }

    function output(){
        return "belajar funtion";
    }

    //echo '<h1>'.output().'</h1>';

    echo Luas() * 5;

?>
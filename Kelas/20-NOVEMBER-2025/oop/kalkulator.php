<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator blyadd</title>
</head>
</html>

<?php  

    class Kalkulator{
        function penjumlahan(){
            echo "Penjumlahan";
        }
        function pengurangan(){
            echo "Pengurangan";
        }
        function perkalian(){
            echo "Perkalian";
        }
        function pembagian(){
            echo "Pembagian";
        }
    }

    $kalku = new Kalkulator();
    $kalku->penjumlahan();
    $kalku->pengurangan();
    $kalku->perkalian();
    $kalku->pembagian();

?>
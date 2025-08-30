<?php 

    // $hari = 5;

    // switch ($hari) {
    //     case 1:
    //         echo 'minggu';
    //         break;
    //     case 2:
    //         echo 'senin';
    //         break;
    //     case 3:
    //         echo 'selasa';
    //         break;
    //     case 4:
    //         echo 'rabu';
    //         break;
    //     case 5:
    //         echo 'kamis';
    //         break;
    //     case 6:
    //         echo 'jumat';
    //         break;
    //     case 7:
    //         echo 'sabtu';
    //         break;
        
    //     default:
    //         echo 'Hari mu nguwawor';
    //         break;
    // }

    $pilihan = 'tambah';

    switch ($pilihan) {
        case 'tambah':
            echo 'anda memilih tambah';
            break;
        case 'ubah':
            echo 'anda memilih ubah';
            break;
        case 'hapus':
            echo 'anda memilih hapus';
            break;
        
        default:
            echo 'pilihanmu gak ada';
            break;
    }

?>
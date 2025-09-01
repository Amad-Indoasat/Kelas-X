<?php 

    session_start();

    echo $_SESSION['user'];

    echo '<br>';

    echo $_SESSION['name'];

    echo '<br>';

    echo $_SESSION['alamat'];

    echo '<br>';

    foreach ($_SESSION as $key => $value) {
       echo $key.'=>'.$value.'<br>';

    }

?>
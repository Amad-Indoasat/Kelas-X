<?php 
    session_start();
    session_destroy();
    echo '<meta http-equiv="refresh" content="1.5; url=index.php">';
    exit();
?>

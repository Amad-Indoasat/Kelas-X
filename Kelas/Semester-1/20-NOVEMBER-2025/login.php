<?php 

       session_start();

    if (isset($_SESSION['email'])) {
        echo $_SESSION['email'] . '<br>';
        echo '<meta http-equiv="refresh" content="1.5; url=logout.php">' . '<br>';
        
    }else {
        echo "Register" . 'a href="index.php">Register' . '<br>';
        echo "Login" . 'a href="login.php">Login' .'<br>';
    }

?>


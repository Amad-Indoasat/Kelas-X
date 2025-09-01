<?php 

    $cookie_name = 'user';
    $cookie_value = 'Jonny';

    setcookie($cookie_name, $cookie_value);


    $cookie_value = 'Josuke';

    setcookie($cookie_name, $cookie_value);

    if (isset($_COOKIE[$cookie_name])) {
    echo $_COOKIE[$cookie_name];
    } else {
    echo "Cookie belum tersedia.";
    }

    setcookie("user", "", time() - 3600);

    echo '</br>';

    var_dump($_COOKIE);
?>
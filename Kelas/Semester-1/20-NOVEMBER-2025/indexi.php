<?php 
    session_start();
?>


<form action="" method="post">
    Email: <input type="email" name="email" required placeholder="masukkan email"><br>
    Password: <input type="password" name="password" required placeholder="Masukkan password"><br>
    <input type="submit" name="login" value="login">
    
</form>



<?php 
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $_SESSION['email'] = $email;

        echo "Email : " . $email . '<br>';
        echo "Password : " . $password . '<br>';
        echo '<meta http-equiv="refresh" content="1.5; url=login.php">';
    }

    $isi="tes";
    $hasil = isset($isi);

    echo $hasil;

?>
    <br>
<?php
    var_dump($hasil);
?>
    <br>
<?php
    if (isset($isi)) {
        echo "isi";
    }else {
        echo "no isi";
    }

    var_dump($isi);
?>
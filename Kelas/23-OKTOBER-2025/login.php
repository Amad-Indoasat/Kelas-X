<h1>login</h1>

<form action="" method="post">
    <input type="email" name="email" placeholder="email" required> <br>
    <input type="password" name="password" placeholder="password" required> <br>
    <input type="submit" value="login" name="login">
</form>

<?php
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email == "Siuuuu@g.com" && $password = "777") {
        $_SESSION['email'] = $email;
        header("location: index.php");
    } else {
        echo "Login Gagal";
    }
}
?>
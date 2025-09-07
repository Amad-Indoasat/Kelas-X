<?php 

    session_start();
    require_once "../dbcontroller.php";
    $db = new DB;

    if (!isset($_SESSION['user'])) {
        header("location:login.php");
    }
    if (isset($_GET['log'])) {
        session_destroy();
        header("location:index.php");
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin page | Aplikasi Restoran SMK</title>
    <link rel="stylesheet" href="/php-smk/Restoran/bootstrap/css/bootstrap.css">
</head>
<body>
    <div class="container">


        <div class="row mt-4">
            <div class="col-md-3">
                <a href="index.php"><h3>Admin page</h3></a>
            </div>
            <div class="col-md-9"> 
                <div class="d-flex justify-content-end mt-4"><a href="?log=logout">Logout</a></div>
                <div class="d-flex justify-content-end align-items-center mt-4">User : <a href="?f=user&m=updateuser&id=<?php echo $_SESSION['iduser']?>"> <?php echo $_SESSION['user'] ?> </a></div>
                 <div class="d-flex justify-content-end mt-4">LEVEL : <?php echo  $_SESSION['level']?></div>
            </div>
        </div>

        <div class="row">
                <div class="col-md-3">
                   
                   <ul class="nav flex-column">

                    <?php 
                        $level = $_SESSION['level'];
                        switch ($level) {
                            case 'admin':
                                echo '
                                    <li class="nav-item"><a class="nav-link" href="?f=kategori&m=select">Kategori</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=menu&m=select">Menu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=pelanggan&m=select">Pelanggan</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=order&m=select">Order</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=order-detail&m=select">Order Detail</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=user&m=select">User</a></li>
                                ';
                                break;


                            case 'kasir':
                                echo '
                                    <li class="nav-item"><a class="nav-link" href="?f=order&m=select">Order</a></li>
                                    <li class="nav-item"><a class="nav-link" href="?f=order-detail&m=select">Order Detail</a></li>
                                ';
                                break;
                            
                            case 'koki':
                                echo '
                                    <li class="nav-item"><a class="nav-link" href="?f=order-detail&m=select">Order Detail</a></li>
                                ';
                                break;
                            
                            default:
                                echo 'Nothung in here';
                                break;
                        }
                    ?>

                    
                   </ul> 
                </div>
                <div class="col-md-9">
                    <?php 
                    
                    if (isset($_GET['f']) && isset($_GET['m'])) {
                        $f = $_GET['f'];
                        $m = $_GET['m'];

                        $file = '../'.$f.'/'.$m.'.php';

                        require_once $file;
                    }

                    ?>
                </div>
         </div>

        <div class="row-mt-5">

                <div class="col">
                    <p class="text-center"> 2025 - copyright@Amad-Indoasat</p>
                </div>

        </div>

    
    </div>
</body>
</html>
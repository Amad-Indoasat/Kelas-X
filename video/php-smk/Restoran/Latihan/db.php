<?php 

    class DB{
        //properti
        public $host = "127.0.0.1";
        private $user = "root";
        private $password ="";
        private $database ="dbrestoran";

        // method

        public function __construct()
        {
            echo "function construct";
        }

        public function selectData()
        {
             echo 'select data';
        }

        public function getDatabase()
        {
            return $this->database;
        }

        public function tampil()
        {
            $this->selectData();
        }

        public static function insert()
        {
            echo "static function";
        }

         
    }

    DB::insertData();

    // $db = new DB;

    // echo '<br>';

    // $db->selectData();

    // echo '<br>';

    // echo $db->host;

    // echo '<br>';

    // echo $db->getDatabase().'<br>';

    // $db->tampil();

?>
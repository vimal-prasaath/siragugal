<?php
    class SingletonDB{
        private $host = "localhost";
        private $db_name = "siragugal";
        private $username = "db_connect";
        private $password = "~7XVsWP4}X-0";
        private $conn;
        private static $instance = null;

        private function __construct(){
            try{
                $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name); 
            }catch(Exception $e){
                echo "Connection Problem ".$e."\n";
            }
        }

        public static function getInstance(){
            if(!self::$instance)
                self::$instance = new SingletonDB();
            return self::$instance;
        }

        public function getConnection(){
            return $this->conn;
        }

        public function disconnect(){
            try{
                $this->conn->close();
                // echo "Database Disconnected";
            }catch(Exception $e){
                // echo "Connection error while closing DB" . $e->getMessage();
            }
        }
    }
?>
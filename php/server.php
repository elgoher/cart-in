<?php 
	session_start();
	if(isset($_SESSION['article']) && !empty($_SESSION['article'])){
	$article = $_POST['article'];
	
	}
?>

<?php
session_start();
$timeout = 600; // Number of seconds until it times out.
// Check if the timeout field exists.
if(isset($_SESSION['timeout'])){
    // See if the number of seconds since the last
    // visit is larger than the timeout period.
    $duration = time() - (int)$_SESSION['timeout'];
    if($duration > $timeout) {
        // Destroy the session and restart it.
        $_SESSION=array();
        session_regenerate_id(); 
        session_destroy();
        session_start();
        echo false;
    }else{
        echo true;
    }
}
// Update the timout field with the current time.
$_SESSION['timeout'] = time();
?>
<?php 
	session_start();
	if(isset($_SESSION['article']) && !empty($_SESSION['article'])){
	$article = $_POST['article'];
	
	}
?>
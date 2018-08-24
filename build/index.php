<?php
	require_once 'vendor/connect.php';
	
	echo $twig->render('pages/index.twig', array(
		'name' => 'Vsevolod'
	));
?>
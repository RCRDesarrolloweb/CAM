<?php
	$destino = $_POST['email'];
	$asunto = "Servicio Web";

	$comentario="
		Email:$_POST[email]
		Encargo:$_POST[comments]
		Solocitante:$_POST[name]
		RIF:$_POST[RIF]
		Direccion:$_POST[Direccion]
		Telefono:$_POST[Telefono]
		
	";

	$headers = 'From: '.$destino."\r\n".
	'Reply-To:'.$destino."\r\n".
	'X-Mailer: PHP/'.phpversion();


	mail($destino,$asunto,$comentario,$headers);

	echo"Mesaje Enviado";
?>
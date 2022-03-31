<?php

if(isset($_POST['password'])){
	if(md5($_POST['password']) === md5('janski')){
		session_start();
		$_SESSION['password'] = md5($_POST['password']);
		header('Location: admin.php');
	}
	else {
		$error = "Mot de passe incorrect";
	}
}
else {
	$error = "";
}


?>

<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connexion</title>
		<link rel="stylesheet" href="style.css"  type="text/css" />
		<link rel="stylesheet" href="index.css"  type="text/css" />
		<script src="main.js"></script>
		<style>
		</style>
		<script src="main.js"></script>
    </head>
  <body>
	<form method="post" action="">
		<table>
			<tr><th colspan="2"><h1>Connexion</h1></th></tr>
			<tr>
			<td><input type="password" id="password" name="password" placeholder="Mot de Passe">
				<input type="submit" id="valider" name="valider" value="valider" ></td></tr>
		</table>
		<p><?php echo($error) ?></p>
	</form>
  </body>
</html>
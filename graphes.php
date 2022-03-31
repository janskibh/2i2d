<?php
session_start();

if(isset($_SESSION['password'])){
	if($_SESSION['password'] != md5('janski')){
		header('Location: index.php');
	}
}
else {
	header('Location: index.php');
}

?>

<!DOCTYPE html>
    <html lang="fr">
	<!--Bienvenue dans le code source de mon projet de 2I2D-->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Graphes</title>
		<link rel="stylesheet" href="style.css" type="text/css" /><!--CSS commun-->
		<link rel="stylesheet" href="graphes.css" type="text/css" /><!--CSS propre a la page admin-->
		<script src="main.js"></script><!--Javascript commun-->
		<script src="graphs.js"></script><!--Javascript pour les graphes circulaires-->
    </head>
  <body>
	<div class="nav">
		<div id="logout"><a href="logout.php" >Logout</a></div><!--Déonnexion-->
		<div id="colormenu"><input type="color" id="color"></div> <!--Input pour modifier la couleur de la page-->
		<div id="link"><a href="admin.php" >Home</a></div><!--Lien vers la page de l'historique des données-->
	</div>
	<div class="upper"><!--Données du haut-->
			<div id="temp">T : 0</div><!--Données de Température-->
			<div id="carbon">CO2 : 0</div><!--Données du taux de carbone-->
			<div id="hum">H : 0</div><!--Données de l'hugrométrie-->
			<div id="date"><div id="day">01</div><div id="monthyear"><p id="month">JAN</p><p id="year">2000</p></div></div>
			<div id="clock"><span id="clocktime">00:00:00</span><span id="clockmillisec">:000</span></div><!--Heure affichée grace a du javascript-->
			<div id="nbpersons"></div><!--Nombre de personnes-->
			<div id="portstate">D : Ouvert</div><!--Nombre de personnes-->
			<div id="closebut"><button>Fermer</button><button>Ventilation</button></div><!--Bouton fermeture des tourniquets et activation de la ventilation-->
	</div>
  </body>
	<script>
		time()
		setInterval(time,100);
		//Appel de la fonction time() pour mettre a jour l'heure toutes les secondes
	</script>
	<script>color() //Fonction pour mettre a jour la couleur du site en fonction de la valeur de #color</script>
	<script>graphs() //mise a jour des graphes en fonction des valeurs</script>
</html>
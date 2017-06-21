import {articles} from '../API/articles.js'
Articles = [
	{
		nom: "ConvertisseurTVA",
		titre: "Convertisseur TVA",
		categorie:"DansFormation",
		image: '/images/convertisseur.png',
		description: "Cette appli web est un outil qui permet de convertir un prix TTC en prix HT et vice versa. Cet exercice m'a permis d'experimenter le JavaScript, ainsi que Bootstrap. Ce site est biensur responsive."
	},
	{
		nom: "CookieClicker",
		titre: "CookieClicker",
		categorie:"DansFormation",
		image: '/images/cookieclicker.png',
		description: "On a affaire ici à un jeu, plus on clique sur le cookie, plus le compteur monte jusqu'a pouvoir acheter differentes options qui font que le compteur monte de plus en plus vite. En HTML5, CSS3, JavaScript, sans framework, cette application est responsive et comporte quelques petites animations comme par exemple des nombres qui s 'affichent lorsqu'on clique sur le cookie. J 'ai ensuite recommencé ce programme mais cette fois-ci avec l'utilisation de Meteor et de Node.js. Les deux versions sont responsives."
	},
	{
		nom: "CV",
		titre: "Cv",
		categorie:"DansFormation",
		image: '/images/cv.png',
		description: "Ce Cv n'utilise aucun framework, il est ecrit en HTML5, CSS3, et contient du JavaScript. Le javaScript sert ici à afficher dynamiquement les elements du menu, mais aussi les differentes parties qui le compose "

	},
	{
		nom: "JeuNum",
		titre: "PlusOuMoins",
		categorie:"DansFormation",
		image: '/images/plusoumoin.png',
		description: "Voici un petit jeu qui utilise le javascript pour generer un nombre aléatoir et proposer à l'utilisateur d'essayer de le deviner en indiquant plus ou moins."
	},
	{
		nom: "LandingPage",
		titre: "LandingPage",
		categorie:"DansFormation",
		image: '/images/landingpage.png',
		description: "Cette page web est la presentation d'un produit. Cette application utilise Bootstrap. "
	},
	{
		nom: "Playground",
		titre: "Playground",
		categorie:"DansFormation",
		image: '/images/playground.png',
		description: "Cette application est le support que le formateur Simplon a utilisé pour nous enseigner Meteor, Node js et React js avec le framework semantic-ui. Nous avoins pour exercice de le faire evoluer regulierement selon ses consignes. Ce site comporte un mecanisme de connexion, de base de donnée, de recherche grace à l'utilisation d'une API (github), toute une architecture d'affichage..."
	},
	{
		nom: "Portfolio",
		titre: "Portfolio",
		categorie:"DansFormation",
		image:'/images/portfolio.png',
		description:"Voici un site simulant celui d'un photographe qui presente ses réalisation. Ce site utilise Bootstrap."
	},
	{
		nom: "TabGen",
		titre: "Generateur de Tableau",
		categorie:"DansFormation",
		image:'/images/tabgen.png',
		description:"Cette application genere un tableau Au nombre de lignes et de colonnes entré par l'utilisateur. Chaque cases contient une case à cocher qui, au clique, indique sa position"
	},
	{
		nom: "ProjetSel",
		titre: "ProjetSel",
		categorie:"HorsFormation",
		image:'/images/projetsel.png',
		description:"Voici mon projet tutoré, le projet SEL est une application demandée par la Croix rouge de Damviliers. Elle utilise, un mecanisme de connexion, une bonne utilisation des base de donnée, et beaucoup de d'interference entre les differentes parties du site. Il est bien entendu responsive pour permettre ses fonctionalitées à tous types de supports. Ce site est en cours de développement, il sera bientot publié."
	},
	{
		nom: "BookWeb",
		titre: "BookWeb",
		categorie:"HorsFormation",
		image:'/images/bookweb.png',
		description:"Cette application est le prototype de ce site qui permet de presenter mon activité, il a été réalisé à l'aide de Ruby on Rails. Ce site est responsive."
	},
	{
		nom: "Puissance4",
		titre: "Puissance4",
		categorie:"HorsFormation",
		image:'/images/puissance4.png',
		description:"Voici un jeu de puissance 4, rudimentaire, mais il fonctionne. il utilise jQuery."
	},
	{
		nom: "Pocker",
		titre: "Pocker",
		categorie:"HorsFormation",
		image:'/images/pocker.png',
		description:"Entant que deuxieme essaie JavaScript, j'ai réalisé un jeu de Pocker. Pour le moment, l'ordinateur suit tous le temps. Il me manques donc soit une IA, soit  une possibilité de jouer en reseau"
	},
	{
		nom: "Pendu",
		titre: "Jeu du Pendu",
		categorie:"HorsFormation",
		image:'/images/pendu.png',
		description:"Voici mon tout premier essaie en JavaScript, Ce jeu du pendu propose à l'utilisateur un mot à deviner sur 300 000."
	},
	{
		nom: "GatJs",
		titre: "GatJs",
		categorie:"HorsFormation",
		image:'/images/gatjs.png',
		description:"Durant la formation, le formateur, nous expliquant qu'il falait qu'on apprenne à utiliser le JavaScript avant tout autres framework associé et il nous a donné des exercices à faire sans utiliser jQuery. Il a ajouté jQuery, \"vous pourriez tres bien le faire, ce sont des fonctions associées à un caractère ($)\". Dans le but de gagner du temps, et de ne pas coder plusieurs fois la même chose, j'ai donc créé mon mini jQuery, GatJs.js, fichier dans lequel j'associe des fonctions à la lettre \"G\". Ce fichier propose seulement quelques fonctionnalitées, un systeme de querry selector comparable à celui de jQuery permettant de selectionner facilement un ou des elements du DOM ou une fonction \"vider()\" qui permet de vider l'element du DOM selectionné. La fonction la plus utile est la fonction \"elthtml()\" qui permet de créer dans un ou des éléments du Dom un élément. cette fonction prends en argument un objet qui peut prendre 4 parametres différents. On peut associer une valeur à \"tag:\" permettant de préciser quelle balise html on veut ajouter, une valeur à la clé \"contenu:\" pour preciser le contenu entre nos balises. \"prop:\" peut prendre comme valeur un tableau, un objet ou meme une string et permet d'ajouter une ou des proprietées à notre élément (des id, des class ou nymporte quel autre proprietée). Associer une valeur à la clé à \"duree:\" permet de décider d'une durée de vie pour notre élément."
	},
	/*{
		nom: "Aspi",
		titre: "Recuperateur de donnees web",
		categorie:"VBA",
		image:'/images/photo.jpg',
		description:"Création d’un programme permettant de récupérer automatiquement un grand nombre d’informations sur un site internet dont les données étaient répertoriées sur des pages dont l’adresse différait d’un nombre entier croissant. => les données étant recueillies dans un classeur Excel et ensuite triées par un autre programme afin de remplir un simple tableau."
	},*/
	{
		nom: "Autres",
		titre: "Autres",
		categorie:"VBA",
		image:'/images/Autres.png',
		description:"Création d’un grand nombre de programmes permettant le tri de données météo en fonction des exigences désirées."
	},
	{
		nom: "CartoExp",
		titre: "Maillage de coordonnées",
		categorie:"VBA",
		image:'/images/cartoexp.png',
		description:"Création d’un programme permettant d’obtenir  un maillage de points GPS associé à leur altitude à l’aide de Carto-Exploreur:un userform demande les coordonnées bornant la zone concernée et le pas à appliquer en lambert IIe => ces coordonnées sont converties en WGS84 puis en langage compréhensible par Carto-Exploreur =>on importe (copie/colle) ces données dans Carto-Exploreur => on demande à Carto-Exploreur de «caler les altitudes» à chaque points =>on exporte ces données (copie/colle)  dans le programme VBA Excel qui vas trier les données, puis indiquer les coordonnées associées aux altitudes concernées => Tout ceci ayant pour but d’injecter ces données dans un logiciel de cartographie (mapinfo)qui associé à la carte IGN du lieu permettra d’obtenir une vue 3D de la zone. Programme créé de manière à pouvoir être utilisé par un tiers."
	},
	{
		nom:"Convert",
		titre: "Convertisseur GPS",
		categorie:"VBA",
		image:'/images/coordconv.png',
		description:"Création d’un outil permettant de convertir les coordonnées GPS WGS84 en n’importe quel lambert. Ce programme permet de convertir des dizaines de miliers de coordonnées en une fois par un simple copier/coller.Programme créé de manière à pouvoir être utilisé par un tiers."
	},
	{
		nom:"FicheLabo",
		titre: "FicheLabo",
		categorie:"VBA",
		image:'/images/Flauto.png',
		description:"Création automatique d’une base de donnée dans un seul tableau Excel (concernant des informations sur des prélèvements…) => interface liste dynamique en fonction de 3 critères pour sélectionner une série de prélèvements => pré-remplissage dans un userform des informations sur la série sélectionnée => possibilité de sauvegarde/modifications => sortie des informations dans un autre classeur Excel des informations sur la série sélectionnée => création automatique par copie sur Word de la lettre de commande associée aux analyses à appliquer aux prélèvements => création des étiquettes nécessaires à étiquetage des échantillons. Programme créé de manière à pouvoir être utilisé par un tiers. "
	},
	{
		nom:"GgeGeoP",
		titre: "Marqueurs GoogleEarth, Geoportail",
		categorie:"VBA",
		image:'/images/gge.png',
		description:"Création d’un programme permettant de convertir un grand nombre de coordonnées GPS en un langage compréhensible par Google-Earth et Geoportail afin d’y injecter un marqueur par pair de coordonnées."
	},
	{
		nom:"OutilDeSaisie",
		titre: "Outil De Saisie",
		categorie:"VBA",
		image:'/images/outilsaisie.png',
		description:"Interface (userform) pour la création d’un outil de saisie qui était proposé à nos clients afin de leur faciliter la saisie des réponses du sondages interne que nous leur demandions pour la réalisation d'un Bilan Carbone. Ce programme permettait d'eviter les erreurs car la feuille est protegée à l'écriture et le seul moyen de saisie est l'utilisation de l'interface. Programme créé de manière à pouvoir être utilisé par un tiers."
	},
]
articles.supprimetout()
Articles.map((art)=>{
	articles.ajout(art)


})

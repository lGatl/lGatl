import React, {Component} from "react";

import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import CVTitleFrame from '../components/CVTitleFrame.js'
import CVFrame from '../components/CVFrame.js'
import CVRow from '../components/CVRow.js'
import CVRowXP from '../components/CVRowXP.js'
import CVColumn from '../components/CVColumn.js'
import A from '../components/A.js'

export default class Page1 extends Component {
	style(){
		return{
			green:{
				color:"rgba(181,204,24,1)",
				fontWeight:"bold",
			}
		}
	}
	render(){
			let {green} = this.style()
			let size = this.props.paspdf?15:11
		return (
			<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
				<CVFrame>
					<CVTitleFrame>Projets Personnels</CVTitleFrame>
					<CVRowXP>
							<span>
								2020
							</span>
							<span>
								Lancement de la version test de <A href="devinamique.com">devinamique.com</A> qui permet la creation de devis dynamiques. (Projet en cours)<br/>
								<span style={{...green}}>Technologies:</span> MongoDB, Meteor, React, Redux, Git, Github <br/>
								<span style={{...green}}>Taches:</span>
								<ul style={{size,margin:0}}>
									<li>Système de login</li>
									<li>Système de rôle</li>
									<li>export d'éléments en pdf</li>
									<li>système de drad & drop</li>
									<li>Permet l'utilisation de logiques</li>
								</ul>
							</span>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<span>
								Application mobile pour aider l’organisation d’événements (festivals). Projet en cours<br/>
								<span style={{...green}}>Technologies:</span> Firebase, React Native, Redux, Git <br/>
								<span style={{...green}}>Taches:</span>
								<ul style={{size,margin:0}}>
									<li>Système de login</li>
									<li>Système de rôle</li>
									<li>Synchronisation des taches</li>
									<li>Distribution des taches</li>
									<li>Autres taches a venir</li>
									<li>Responsive</li>
								</ul>
							</span>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<span>
								 Simplifier et accélérer la création d’une application web pour un fullstack. Projet en cours proposé à la communauté. <br/>
								nom du projet: chain-meteor-react-redux<br/>
								<span style={{...green}}>Technologies:</span> MongoDB, Meteor, React, Redux, Git, Github<br/>
								<span style={{...green}}>Taches:</span>
								<ul style={{size,margin:0}}>
									<li>Automatisation des liens Meteor React Redux</li>
									<li>Documentation</li>
									<li>Responsive</li>
								</ul>

							</span>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<span>
								Composants React pour l’intégration. Projet en cours proposé à la communauté.<br/>
								paquet npm gat-ui-react <br/>
								<span style={{...green}}>Technologies:</span> React, HTML5, CSS3, Flexbox, Git, Github<br/>
								<span style={{...green}}>Taches:</span>
								<ul style={{size,margin:0}}>
									<li>Intégration de composants React laissant libre accès aux modifications CSS </li>
									<li>Documentation</li>
									<li>Responsive</li>
								</ul>
							</span>
						</CVRowXP>
						<CVRowXP>
							<span>
								2017
							</span>
							<span>
								Site de présentation <A href="http://lGatl.fr">lGatl.fr</A><br/>
									<span style={{...green}}>Technologies:</span> Mongo DB, Meteor, React, HTML5, CSS3, Git<br/>
									<span style={{...green}}>Taches:</span>
									<ul style={{size,margin:0}}>
									<li>Système d’envoi de courriel direct depuis le site sans passer par le client messagerie utilisant mailgun</li>
									<li>Interface en mosaïque pour présenter mes travaux</li>
									<li>Documentation de mes projets open source avec des exemples</li>
									<li>export d'éléments en pdf</li>
									<li>Responsive</li>
									</ul>
							</span>
						</CVRowXP>
				</CVFrame>
				<CVFrame>
					<CVTitleFrame>Autres expériences</CVTitleFrame>
						<CVRowXP>
						<span>
							De 2010 à 2016
						</span>
						<span>
							Technicien Environnement - Société BioMonitor
								<ul style = {{size,margin:0}}>
									<li style = {{}}>Exploitation de lourds fichiers Excel données météo tri horaires sur 10 ans </li>
									<li style = {{}}>Création d’outils de saisie en VBA sur d’Excels </li>
									<li style = {{}}>Création d’un outil de conversion de coordonnées GPS en VBA sur Excel </li>
									<li style = {{}}>Création d’autres outils en VBA sur Excel pour mes collègues et moi-même </li>
									<li style = {{}}>Autres travaux relatifs à la mesure environnementale </li>
								</ul>			
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2010
						</span>
						<span>
							Stage Technicien - Société BioMonitor
									Sujet : Mise en place et suivi de différentes techniques de mesures de la qualité de l’air,
									des sols et des végétaux		
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2007
						</span>
						<span>
							Stage technicien (11 semaines) - Parc municipal de Jarny
							Sujet : inventaire botanique ainsi que proposition de sentier botanique et autres travaux divers
						</span>
					</CVRowXP>
					<CVRowXP >
						
						<span>
							Emplois saison
						</span>
						<div style={{flexDirection:"column",display:"flex"}}>
								<span>Ouvrier agricole – Conduite d’engins agricole, vendanges </span>
								<span>Courtes missions intérimaires </span>
								<span>Animateur dans un centre aéré</span>
						</div>
					
					</CVRowXP>
				</CVFrame>
				<CVFrame>
					<CVTitleFrame>Formations</CVTitleFrame>
					<CVRowXP>
						<span>
							2016-2017
						</span>
						<span>
							Formation Développeur Web (6 mois) – <A href="http://simplon.co/">Simplon</A> – <A href="http://www.webogreen.fr/">Webogreen</A> – Bras Sur Meuse
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2010
						</span>
						<span>
							Licence Professionnelle Métrologie de la Qualité de l’Air
								- Université Paul Verlaine, IUT de Thionville – Yutz
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2008
						</span>
						<span>
							Reçu aux épreuves écrites du concours de Technicien supérieur de l’industrie et des mines
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2007
						</span>
						<span>
							DUT génie biologique option environnent - Université Paul Verlaine, IUT de Thionville - Yutz
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>
							2006
						</span>
						<span>
							Baccalauréat scientifique option biologie - Lycée Saint Louis de Bar le Duc
						</span>
					</CVRowXP>
				</CVFrame>
				<CVFrame style={{border:"none",margin:0,padding:0}}>
					<CVRow style={{margin:0,padding:0}}>
					
					<CVRow style={{margin:0,flex:1}}>
					<CVColumn  style={{ alignItems:"center", textAlign:"center"}}>
						<CVTitleFrame>Langues</CVTitleFrame>
					</CVColumn>
					<CVColumn flex={1} style={{ alignItems:"center", textAlign:"center"}}>
						
						<span>Anglais : niveau d'étude supérieur (bac+2) </span>
						<span>Allemand : niveau lycée  </span>
					</CVColumn>
					</CVRow>
					<CVRow style={{margin:0,flex:1}}>
					<CVColumn style={{ alignItems:"center", textAlign:"center"}}>
						<CVTitleFrame>Loisirs</CVTitleFrame>
					</CVColumn>
					<CVColumn flex={1} style={{ alignItems:"center", textAlign:"center"}}>
				
						Guitare (20 ans), clarinette, cuisine,
						Escalade, VTT, Jardin, nature, pèche,
						Echecs, jeu de Go 
					</CVColumn>
					</CVRow>
					</CVRow>
				</CVFrame>
				</div>
		);
	}
}


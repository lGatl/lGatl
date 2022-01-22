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
			let size = this.props.paspdf?"15px":"13px"
			let size2 = this.props.paspdf?"14px":"11px"
		return (
			<div style={{display:"flex", flexDirection:"column", alignItems:"center",fontSize:size}}>
				<CVFrame>
					<CVTitleFrame>Projets Personnels</CVTitleFrame>
					<CVRowXP>
							<span>
								2020
							</span>
							<div style={{display:"flex", flexDirection:"column"}}>
							<div>	Lancement de la version test de <A href="devinamique.com">devinamique.com</A> qui permet la creation de devis dynamiques. (Projet en cours)</div>
								<div><span style={{...green}}>Technologies:</span> <span style={{fontWeight:"bold"}}>MongoDB, Meteor, React, Redux, Git, Github</span> </div>
								<span style={{...green}}>Taches:</span>
								<ul style={{fontSize:size2,margin:0}}>
									<li>Système de login</li>
									<li>Système de rôle</li>
									<li>export d'éléments en pdf</li>
									<li>système de drag & drop</li>
									<li>Permet l'utilisation de logiques</li>
								</ul>
							</div>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<div style={{display:"flex", flexDirection:"column"}}>
								<span>Application mobile pour aider l’organisation d’événements (festivals). Projet en cours</span>
								<div><span style={{...green}}>Technologies:</span> <span style={{fontWeight:"bold"}}>Firebase, React Native, Redux, Git</span> </div>
								<span style={{...green}}>Taches:</span>
								<ul style={{fontSize:size2,margin:0}}>
									<li>Système de login</li>
									<li>Système de rôle</li>
									<li>Synchronisation des taches</li>
									<li>Distribution des taches</li>
									<li>Autres taches a venir</li>
									<li>Responsive</li>
								</ul>
							</div>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<div style={{display:"flex", flexDirection:"column"}}>
								 <span>Simplifier et accélérer la création d’une application web pour un fullstack. Projet en cours proposé à la communauté.</span>
								<span>nom du projet: chain-meteor-react-redux</span>
								<div><span style={{...green}}>Technologies:</span> <span style={{fontWeight:"bold"}}>MongoDB, Meteor, React, Redux, Git, Github</span></div>
								<span style={{...green}}>Taches:</span>
								<ul style={{fontSize:size2,margin:0}}>
									<li>Automatisation des liens Meteor React Redux</li>
									<li>Documentation</li>
									<li>Responsive</li>
								</ul>
							</div>
						</CVRowXP>
						<CVRowXP>
							<span>
								2018
							</span>
							<div style={{display:"flex", flexDirection:"column"}}>
								<span>Composants React pour l’intégration. Projet en cours proposé à la communauté.</span>
								<span>paquet npm gat-ui-react </span>
								<div><span style={{...green}}>Technologies:</span> <span style={{fontWeight:"bold"}}> React, HTML5, CSS3, Flexbox, Git, Github </span> </div>
								<span style={{...green}}>Taches:</span>
								<ul style={{fontSize:size2,margin:0}}>
									<li>Intégration de composants React laissant libre accès aux modifications CSS </li>
									<li>Documentation</li>
									<li>Responsive</li>
								</ul>
							</div>
						</CVRowXP>
						<CVRowXP>
							<span>
								2017
							</span>
							<div style={{display:"flex", flexDirection:"column"}}>
								<div>Site de présentation <A href="http://lGatl.fr">lGatl.fr</A></div>
									<div><span style={{...green}}>Technologies:</span> <span style={{fontWeight:"bold"}}>Mongo DB, Meteor, React, HTML5, CSS3, Git</span></div>
									<span style={{...green}}>Taches:</span>
									<ul style={{fontSize:size2,margin:0}}>
									<li>Système d’envoi de courriel direct depuis le site sans passer par le client messagerie utilisant mailgun</li>
									<li>Interface en mosaïque pour présenter mes travaux</li>
									<li>Documentation de mes projets open source avec des exemples</li>
									<li>export d'éléments en pdf</li>
									<li>Responsive</li>
									</ul>
							</div>
						</CVRowXP>
				</CVFrame>
				<CVFrame>
					<CVTitleFrame>Autres expériences</CVTitleFrame>
						<CVRowXP>
						<span>
							De 2010 à 2016
						</span>
						<div style={{display:"flex", flexDirection:"column"}}>
							<span>Technicien Environnement - Société BioMonitor</span>
								<ul style = {{fontSize:size2,margin:0}}>
									<li style = {{}}>Exploitation de lourds fichiers Excel données météo tri horaires sur 10 ans </li>
									<li style = {{}}>Création d’outils de saisie en VBA sur d’Excels </li>
									<li style = {{}}>Création d’un outil de conversion de coordonnées GPS en VBA sur Excel </li>
									<li style = {{}}>Création d’autres outils en VBA sur Excel pour mes collègues et moi-même </li>
									<li style = {{}}>Autres travaux relatifs à la mesure environnementale </li>
								</ul>			
						</div>
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
						<div>
							Formation Développeur Web (6 mois) – <A href="http://simplon.co/">Simplon</A> – <A href="http://www.webogreen.fr/">Webogreen</A> – Bras Sur Meuse
						</div>
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
					<CVRow style={{margin:0,flex:"1 1 auto"}}>
					<CVColumn  style={{ alignItems:"center"}}>
						<CVTitleFrame>Langues</CVTitleFrame>
					</CVColumn>
					<CVColumn style={{ flex:"1 1 auto", alignItems:"center",marginTop:5}}>
						
						<span>Anglais : niveau d'étude supérieur (bac+2) </span>
						<span>Allemand : niveau lycée  </span>
					</CVColumn>
					</CVRow>
					<CVRow style={{margin:0,flex:"1 1 auto"}}>
					<CVColumn style={{ alignItems:"center"}}>
						<CVTitleFrame>Loisirs</CVTitleFrame>
					</CVColumn>
					<CVColumn style={{ flex:"1 1 auto", alignItems:"center",marginTop:5}}>
				
						<span>Guitare (20 ans), clarinette, cuisine,</span>
						<span>escalade, VTT, jardin, nature, pèche,</span>
						<span>echecs, jeu de Go </span>
					</CVColumn>
					</CVRow>
					</CVRow>
				</CVFrame>
				</div>
		);
	}
}


import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import CVTitleFrame from '../components/CVTitleFrame.js'
import CVFrame from '../components/CVFrame.js'
import CVRow from '../components/CVRow.js'
import CVRowXP from '../components/CVRowXP.js'
import CVColumn from '../components/CVColumn.js'
import A from '../components/A.js'

//<img 
//alt={"Adrien GATINOIS"} 
//style={{width: "100%",height: "auto"}} 
//src='/images/photomoi.jpg'
//>

class CV extends Component {

	componentWillMount(){
		this.props.setControle({generalMenu:'Cv'})
	}
style(){
	return{
		green:{
			color:"rgba(181,204,24,1)",
			fontWeight:"bold",
		}
	}
}
contenu(){
	let {green} = this.style()
	return (
			<div style={{display:"flex", flexDirection:"column"}}>
			<CVFrame style={{borderTop:"none",marginTop:50}}>
				<CVRow>
					<CVColumn flex={1} style={{minWidth:200}}>
							<br/>
							GATINOIS Adrien <br/>
							5 grande rue <br/>
							55500 Saint Amand sur Ornain<br/>
							<A href="mailto:gat55@live.fr">gat55@live.fr</A>
							06/82/47/31/19<br/>
							<br/>
							LinkedIn: Adrien GATINOIS <br/>
							<span>GitHub : <A href="https://github.com/lGatl">https://github.com/lGatl</A></span>
					</CVColumn>
					<CVColumn flex={1} style={{alignItems:"center", textAlign:"center", minWidth:200 }}>
							<br/>
							<br/>
							<span style={{
								color:"rgba(181,204,24,1)",
								fontWeight:"bold", 
								fontSize:"1.7em"
							}}>Développeur full stack JS</span> 

					</CVColumn>			
					<CVColumn flex={1} style={{textAlign:"right", minWidth:200}}>				
						<div>
							<br/>
							<br/>
							Célibataire, 31 ans<br/>
							Permis B
							<br/>
							<br/>
							<br/>
							<A href="http://lGatl.fr">lGatl.fr</A>
						</div>
					</CVColumn>				
				</CVRow>
			</CVFrame>
							<CVFrame style={{
					backgroundColor:"rgba(24,180,204,0.1)",
					padding:0,
					paddingBottom:10,
					
					fontWeight:"bold"
				}}>
					
						<CVTitleFrame>Competences</CVTitleFrame>
						<CVRow >
						<CVColumn flex={1} style={{minWidth:200}}>
							Technologies :
						</CVColumn>
						<CVColumn flex={1} style={{minWidth:200}}>
							React Js, Redux <br/>
							Node Js, Meteor <br/>
							MongoDB <br/>
							HTML5, CSS3, Js <br/>
							RUBY on Rails <br/>
							VBA<br/>

						</CVColumn>
						</CVRow>
						<CVRow>
						<CVColumn flex={1} style={{minWidth:200}}>
							Infographie :
						</CVColumn>
						<CVColumn flex={1} style={{minWidth:200}}>
							Photoshop, Gimp, Illustrator, Inskape
						</CVColumn>
						</CVRow>
						<CVRow>
						<CVColumn flex={1} style={{minWidth:200}}>
							Bureautique :
						</CVColumn>
						<CVColumn flex={1} style={{minWidth:200}}>
							MicrosoftOffice, LibreOffice
						</CVColumn>
						</CVRow>
					
				</CVFrame>
			<CVFrame>
				<CVTitleFrame>Expériences Professionnelles</CVTitleFrame>
				<CVRowXP>
					<span>
						Depuis 2018
					</span>

					<span>
						Création d'une entreprise Individuelle de <b>Développeur full stack JS</b>
					</span>
				</CVRowXP>
				<CVRowXP>
					<span>
						2017 à 2018
					</span>
					<span>
						
						Elaboration d'une plate-forme d'apprentissage. Mission pour SimplonProd de 10 mois. <br/>
						<span style={{...green}}> Rôle :</span> Développeur full stack JS au sein d'une équipe Agile méthode SCRUM. <br/> 
						<span style={{...green}}>Technologies :</span> Mongo DB, Meteor, React, Redux, HTML5, CSS3, Flexbox, Git, Gitlab <br/> 
						<span style={{...green}}>Taches:</span>
						<ul style={{fontSize:12}}>
							<li>Système de login</li>
							<li>Système de role</li>
							<li>Possibilité de poster des articles</li>
							<li>Drag & Drop pour lister des articles</li>
							<li>Système de pagination respectant filtres et pertinence des articles </li>
							<li>Système de correction, d’évaluation et évaluation par les pairs</li>
							<li>Système de like et partages</li>
							<li>Système de notification</li>
							<li>Intégration</li>
							<li>Système d’administration</li>
							<li>Responsive</li>
							<li>Autres taches confidentielles</li>
							<li>Responsive</li>
						</ul>
					</span>
				</CVRowXP>
				<CVRowXP>
					<span>
						2017 à 2018
					</span>
					<span>
						Réalisation d'un système d’échange local pour la Croix Rouge <br/>
						<span style={{...green}}>Technologies :</span> Mongo DB, Meteor, React, Redux, HTML5, CSS3, Flexbox, Git, mailgun <br/>
						<span style={{...green}}>Taches :</span>
						<ul style={{fontSize:12}}>
							<li>Système de login</li>
							<li>Système de role</li>
							<li>Possibilité pour un utilisateur de poster des annonces</li>
							<li>Possibilité de faire une proposition en réponse aux annonces</li>
							<li>Possibilité pour l’annonceur d’accepter une proposition</li>
							<li>Mise en place d’un échange d’argent fictif</li>
							<li>Système d’administration et de modération</li>
							<li>Système scroll infini respectant les filtres</li>
							<li>Haute intégration responsive</li>
							<li>Système d’envoi de courriel direct depuis le site sans passer par le client messagerie utilisant mailgun</li>
							<li>Responsive</li>
						</ul>
					</span>
				</CVRowXP>
				
				</CVFrame>
				<CVFrame>
					<CVTitleFrame>Projets Personnels</CVTitleFrame>
						<CVRowXP>
							<span>
								2017
							</span>
							<span>
								Site de présentation <A href="http://lGatl.fr">lGatl.fr</A><br/>
									<span style={{...green}}>Technologies:</span> Mongo DB, Meteor, React, HTML5, CSS3, Git<br/>
									<span style={{...green}}>Taches:</span>
									<ul style={{fontSize:12}}>
									<li>Système d’envoi de courriel direct depuis le site sans passer par le client messagerie utilisant mailgun</li>
									<li>Interface en mosaïque pour présenter mes travaux</li>
									<li>Documentation de mes projets open source avec des exemples</li>
									<li>Responsive</li>
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
								<ul style={{fontSize:12}}>
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
								<ul style={{fontSize:12}}>
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
								<ul style={{fontSize:12}}>
									<li>Intégration de composants React laissant libre accès aux modifications CSS </li>
									<li>Documentation</li>
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
								<ul style = {{fontSize:10}}>
									<li style = {{lineHeight:1.3}}>Exploitation de lourds fichiers Excel données météo tri horaires sur 10 ans </li>
									<li style = {{lineHeight:1.3}}>Création d’outils de saisie en VBA sur d’Excels </li>
									<li style = {{lineHeight:1.3}}>Création d’un outil de conversion de coordonnées GPS en VBA sur Excel </li>
									<li style = {{lineHeight:1.3}}>Création d’autres outils en VBA sur Excel pour mes collègues et moi-même </li>
									<li style = {{lineHeight:1.3}}>Autres travaux relatifs à la mesure environnementale </li>
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
					<CVRowXP>
						<span>
							Emplois saison
						</span>
						<span>
							Ouvrier agricole – Conduite d’engins agricole, vendanges <br/>
							Courtes missions intérimaires <br/>
							Animateur dans un centre aéré
						</span>
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
				<CVFrame>
					<CVRow>
					<CVColumn flex={1} style={{minWidth:200, alignItems:"center", textAlign:"center"}}>
						<CVTitleFrame>Langues</CVTitleFrame>
						Anglais : niveau d'étude supérieur (bac+2) <br/>
						Allemand : niveau lycée
					</CVColumn>
					<CVColumn flex={1} style={{minWidth:200, alignItems:"center", textAlign:"center"}}>
						<CVTitleFrame>Loisirs</CVTitleFrame>
						Guitare (20 ans) <br/>
						Cuisine,
						Escalade, VTT <br/>
						Jardin, nature, pèche <br/>
					</CVColumn>
					</CVRow>
				</CVFrame>
			</div>

		);
}
	render(){
		return(
			<section style={{display:"flex",flexDirection:"column"}}>
				<Titre1><h1 style = {{margin:0,fontSize:"1em"}}>Curicculum Vitae</h1></Titre1>
							<div style={{display:"flex",justifyContent:"center"}}>
								<div style={{display:"flex",flex:1, maxWidth:1000}}>
									{this.contenu()}
								</div>
							</div>
			</section>
		)
	}
}
function mapStateToProps(state){
	return (
		{
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( CV );

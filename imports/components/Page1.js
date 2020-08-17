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
			<CVFrame style={{border:"none"}}>
				<CVRow>
					<CVColumn flex={1} style={{minWidth:200}}>
							
							<span>GATINOIS Adrien</span> 
							<span>5 grande rue</span>
							<span>55500 Saint Amand sur Ornain</span>
							<A href="mailto:gat55@live.fr" style={{margin:0}}>gat55@live.fr</A>
							06/82/47/31/19
							
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
		
							<span></span>
							<span>Célibataire, 33 ans</span>
							<span>Permis B</span>
							<span></span>
							<A href="http://lGatl.fr" style={{margin:0}}>lGatl.fr</A>
							<span></span>
							<span>LinkedIn: Adrien GATINOIS</span>
							<span>GitHub : <A href="https://github.com/lGatl" style={{margin:0}}>https://github.com/lGatl</A></span>

					</CVColumn>				
				</CVRow>
			</CVFrame>
				<div style={{width:"65%"}}>
					<CVFrame style={{
						backgroundColor:"rgba(24,180,204,0.1)",
						padding:0,
						border:"none",
						paddingBottom:10,
						fontWeight:"bold",
						display:"flex", 
						justifyContent:"center"
					}}>
						
						<CVTitleFrame>Competences</CVTitleFrame>
						<CVRow>
						<CVColumn flex={1} style={{minWidth:200}}>
							Technologies :
						</CVColumn>
						<CVColumn flex={1} style={{minWidth:200}}>
							<span>JavaScript, React Js, Redux, React Native </span>
							<span>HTML5, CSS3 </span>
							<span>Node Js, Meteor, Loopback, Firebase </span>
							<span>MongoDB, PostgreSQL </span>
							<span>Java, Springboot </span>
							<span>Jenkins, Docker, Rancher </span>
							<span>RUBY on Rails </span>
							<span>VBA</span>

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
				</div>
			<CVFrame style={{borderTop:"solid 1px black",marginTop:5}}>
				<CVTitleFrame>Expériences Professionnelles</CVTitleFrame>
				<CVRowXP>
					<span>
						2019
					</span>
					<span>
						
						Elaboration d'une application permettant la restitution des données de l'équipe Data to act de Décathlon France. <br/>
						<span style={{...green}}> Rôle :</span> Développeur React, Spring Boot et devOps.  <br/> 
						<span style={{...green}}>Technologies :</span> PostgreSQL, Java, Springboot, React, Redux, HTML5, CSS3, Flexbox, Git, Gitlab, Github, Jenkins, Rancher, Docker <br/> 
						<span style={{...green}}>Taches:</span>
						<ul style={{fontSize:size, margin:0}}>
							<li>Elaboration d'Api en Java (Springboot) pour interagir avec la base de données SQL</li>
							<li>Mise en place d'une architecture Redux sur le front</li>
							<li>Gestion asynchrone des réponses de l'interrogation des Api par la methode Fetch</li>
							<li>Mise en place d'un scroll infini</li>
							<li>Mise en place d'un drag and drop</li>
							<li>Mise en place et gestion d'un grand nombre de filtres de différentes formes qui interagissent</li>
							<li>Utilisation de l'Api GoogleSheet pour ordonner la création d'une page GoogleSheet et y exporter des données</li>
							<li>Intégration</li>
							<li>Autres taches confidentielles</li>
							<li>Responsive</li>
						</ul>
					</span>
				</CVRowXP>
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
						<ul style={{fontSize:size, margin:0}}>
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
						<ul style={{fontSize:size, margin:0}}>
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
				</div>
		);
	}
}


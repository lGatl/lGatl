import React, { Component } from "react";

import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import CVTitleFrame from "../components/CVTitleFrame.js";
import CVFrame from "../components/CVFrame.js";
import CVRow from "../components/CVRow.js";
import CVRowXP from "../components/CVRowXP.js";
import CVColumn from "../components/CVColumn.js";
import A from "../components/A.js";

export default class Page1 extends Component {
	style() {
		return {
			green: {
				color: "rgba(181,204,24,1)",
				fontWeight: "bold",
			},
		};
	}
	render() {
		let { green } = this.style();

		let size = this.props.paspdf ? "15px" : "13px";
		let size2 = this.props.paspdf ? "14px" : "11px";
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					height: "100%",
					width: "100%",
					fontSize: size,
				}}
			>
				<CVFrame style={{ border: "none" }}>
					<CVRow style={{ marginBottom: 20 }}>
						<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
							<span style={{ marginBottom: 10 }}>GATINOIS Adrien</span>
							<span>5 grande rue</span>
							<span>55500 Saint Amand sur Ornain</span>
							<A href="mailto:gat55@live.fr" style={{ margin: 0 }}>
								gat55@live.fr
							</A>
							06/82/47/31/19
						</CVColumn>
						<CVColumn
							style={{
								alignItems: "center",
								textAlign: "center",
								minWidth: 200,
								flex: "1 1 auto",
							}}
						>
							<span
								style={{
									marginTop: 34,
									color: "rgba(181,204,24,1)",
									fontWeight: "bold",
									fontSize: "32px",
								}}
							>
								Développeur full stack JS
							</span>
						</CVColumn>
						<CVColumn
							style={{ textAlign: "right", minWidth: 200, flex: "1 1 auto" }}
						>
							<span></span>
							<span>Célibataire, {(new Date()).getFullYear()-1986-1} ans</span>
							<span style={{ marginBottom: 30 }}>Permis B</span>
							<span></span>
							<A href="http://lGatl.fr" style={{ margin: 0 }}>
								lGatl.fr
							</A>
							<span></span>
							<span>LinkedIn: Adrien GATINOIS</span>
							<span>
								GitHub :{" "}
								<A href="https://github.com/lGatl" style={{ margin: 0 }}>
									https://github.com/lGatl
								</A>
							</span>
						</CVColumn>
					</CVRow>
					<CVRow></CVRow>
				</CVFrame>
				<div style={{ width: "65%" }}>
					<CVFrame
						style={{
							backgroundColor: "rgba(24,180,204,0.1)",
							padding: 10,
							border: "none",
							marginBottom: 10,
							fontWeight: "bold",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<CVTitleFrame>Competences</CVTitleFrame>
						<CVRow>
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
								Technologies :
							</CVColumn>
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
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
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
								Infographie :
							</CVColumn>
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
								Photoshop, Gimp, Illustrator, Inskape
							</CVColumn>
						</CVRow>
						<CVRow style={{}}>
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
								Bureautique :
							</CVColumn>
							<CVColumn style={{ minWidth: 200, flex: "1 1 auto" }}>
								MicrosoftOffice, LibreOffice
							</CVColumn>
						</CVRow>
					</CVFrame>
				</div>
				<CVFrame style={{ borderTop: "solid 1px black", marginTop: 5 }}>
					<CVTitleFrame>Expériences Professionnelles</CVTitleFrame>
					<CVRowXP>
						<span>Depuis 2020</span>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<span>
								Prise en charge la création de différentes features et debug
								riches et variés du back-end au front-end pour l'élaboration
								d'une application qui compile et traite des données (notamment
								ESG) pour des gestionnaires de fond.{" "}
							</span>
							<div>
								<span style={{ ...green }}> Rôle :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Développeur Node/Meteor, React.
								</span>
							</div>
							<div>
								<span style={{ ...green }}>Technologies :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Docker, Node, Meteor, React{" "}
								</span>
							</div>
						</div>
					</CVRowXP>
					<CVRowXP>
						<span>2019</span>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<span>
								Elaboration d'une application permettant la restitution des
								données de l'équipe Data to act de Décathlon France.{" "}
							</span>
							<div>
								<span style={{ ...green }}> Rôle :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Développeur React, Spring Boot et devOps.
								</span>
							</div>
							<div>
								<span style={{ ...green }}>Technologies :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									PostgreSQL, Java, Springboot, React, Redux, HTML5, CSS3,
									Flexbox, Git, Gitlab, Github, Jenkins, Rancher, Docker{" "}
								</span>
							</div>
							<div>
								<span style={{ ...green }}>Taches:</span>
							</div>
							<ul style={{ fontSize: size2, margin: 0 }}>
								<li>
									Elaboration d'Api en Java (Springboot) pour interagir avec la
									base de données SQL
								</li>
								<li>Mise en place d'une architecture Redux sur le front</li>
								<li>
									Gestion asynchrone des réponses de l'interrogation des Api par
									la methode Fetch
								</li>
								<li>Mise en place d'un scroll infini</li>
								<li>Mise en place d'un drag and drop</li>
								<li>
									Mise en place et gestion d'un grand nombre de filtres de
									différentes formes qui interagissent
								</li>
								<li>
									Utilisation de l'Api GoogleSheet pour ordonner la création
									d'une page GoogleSheet et y exporter des données
								</li>
								<li>Intégration</li>
								<li>Autres taches confidentielles</li>
								<li>Responsive</li>
							</ul>
						</div>
					</CVRowXP>
					<CVRowXP>
						<span>Depuis 2018</span>

						<span>
							Création d'une entreprise Individuelle de{" "}
							<b>Développeur full stack JS</b>
						</span>
					</CVRowXP>
					<CVRowXP>
						<span>2017 à 2018</span>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<span>
								Elaboration d'une plate-forme d'apprentissage. Mission pour
								SimplonProd de 10 mois.{" "}
							</span>
							<div>
								<span style={{ ...green }}> Rôle :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Développeur full stack JS au sein d'une équipe Agile méthode
									SCRUM.
								</span>{" "}
							</div>
							<div>
								<span style={{ ...green }}>Technologies :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Mongo DB, Meteor, React, Redux, HTML5, CSS3, Flexbox, Git,
									Gitlab
								</span>{" "}
							</div>
							<span style={{ ...green }}>Taches:</span>
							<ul style={{ fontSize: size2, margin: 0 }}>
								<li>Système de login</li>
								<li>Système de role</li>
								<li>Possibilité de poster des articles</li>
								<li>Drag & Drop pour lister des articles</li>
								<li>
									Système de pagination respectant filtres et pertinence des
									articles{" "}
								</li>
								<li>
									Système de correction, d’évaluation et évaluation par les
									pairs
								</li>
								<li>Système de like et partages</li>
								<li>Système de notification</li>
								<li>Intégration</li>
								<li>Système d’administration</li>
								<li>Autres taches confidentielles</li>
								<li>Responsive</li>
							</ul>
						</div>
					</CVRowXP>
					<CVRowXP>
						<span>2017 à 2018</span>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<span>
								Réalisation d'un système d’échange local pour la Croix Rouge{" "}
							</span>

							<div>
								<span style={{ ...green }}>Technologies :</span>{" "}
								<span style={{ fontWeight: "bold" }}>
									Mongo DB, Meteor, React, Redux, HTML5, CSS3, Flexbox, Git,
									mailgun
								</span>
							</div>
							<span style={{ ...green }}>Taches :</span>
							<ul style={{ fontSize: size2, margin: 0 }}>
								<li>Système de login</li>
								<li>Système de role</li>
								<li>Possibilité pour un utilisateur de poster des annonces</li>
								<li>
									Possibilité de faire une proposition en réponse aux annonces
								</li>
								<li>Possibilité pour l’annonceur d’accepter une proposition</li>
								<li>Mise en place d’un échange d’argent fictif</li>
								<li>Système d’administration et de modération</li>
								<li>Système scroll infini respectant les filtres</li>
								<li>Haute intégration responsive</li>
								<li>
									Système d’envoi de courriel direct depuis le site sans passer
									par le client messagerie utilisant mailgun
								</li>
								<li>Responsive</li>
							</ul>
						</div>
					</CVRowXP>
				</CVFrame>
			</div>
		);
	}
}

// todo passer this.state.users en this.props.users

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../6_actions/actions";
import { thisSocket, LOCAL } from "../6_actions/socket_action";

import { Img, Input, Button, Popup, Segment, TextArea } from "gat-ui-react";

import Tchat from "../components/Tchat.js";
import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import Titre3 from "../components/Titre3.js";

import MyName from "../components/MyName.js";
import A from "../components/A.js";
import Bandeau from "../components/Bandeau.js";
import { dateToString } from "../8_libs/date";
import { cap } from "../8_libs/string";

export default class TextPaque extends Component {
	constructor() {
		super();
		this.state = {
			hover_mechoui: false,
		};
	}
	hoverMechoui() {
		this.setState({ hover_mechoui: true });
	}
	unhoverMechoui() {
		this.setState({ hover_mechoui: false });
	}

	render() {
		const { contact } = this.props;
		return (
			<div style={{ display: "flex", flexDirection: "column" }}>
				<img alt="image" src="/images/paques2.jpg"></img>

				<div
					style={{
						color: "white",
						fontSize: 22,
						fontWeight: "Bold",
						display: "flex",
						padding: 20,
					}}
				>
					<div style={{ textAlign: "justify", padding: 10 }}>
						<Titre1
							style={{
								backgroundColor: "none",
								fontSize: 35,
								color: "white",
								flex: "none",
								height: "auto",
							}}
						>
							<div>
								Pâques <br></br>
								<span style={{ fontSize: 30 }}>
									Cette année le 17 avril 2022
								</span>
							</div>
						</Titre1>
						On a la bénédiction de la Josette ! Salut tous le monde ! On est
						quelques uns à en avoir parlé et il nous semble que c'est le moment
						! Nos parents oncles et tantes ont tellement de fois organisé le
						traditionnel repas de Pâques, leur nombre est resté le même alors
						que la famille ne cesse de s'agrandir... Ne pensez vous pas que
						c'est à notre tour de perpétuer la volontée de papi Maurice et de
						mamie Simone, de continuer à nous rassembler ? Et nous, on est
						tellement plus nombreux ! Ca va être FACILE ! Qu'en pensez vous ?
						Partants ? On rend les choses possibles ?
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flex: 1,
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Bandeau
						style={{
							backgroundColor: "white",
						}}
					>
						<img alt="image" src="/images/jonquillesSmall.png"></img>
						<div
							style={{
								backgroundColor: "rgba(250,0,0,0.1)",
								flex: 1,
								//boxShadow: "1px 2px 5px",
								border: "solid 5px black",
								boxSizing: "content-box",
								paddingBottom: 20,
								paddingLeft: 20,
								paddingRight: 20,
								minWidth: 300,
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Titre3 style={{ color: "black" }}>Actu </Titre3>
								<span style={{ marginLeft: 20, fontSize: 14, color: "gray" }}>
									Des choses à mettre ici ?{" "}
									<A onClick={contact.bind(this)}>Me contacter</A>
								</span>
							</div>
							<div style={{ color: "red", fontWeight: "bold" }}>
								Noubliez pas à venir indiquer votre présence pour ceux qui ne le savent que depuis peu de temps.
								<br/>
								Les listes commencent à être bien remplies, hey les cousin(e)s, nos tatas se chargent de beaucoup de choses vous ne trouvez pas ? 
							</div>
						</div>
					</Bandeau>
					<Bandeau
						style={{
							color: "white",
							padding: 30,
						}}
					>
						<div>
							Bien conscient du contexte sanitaire, nous serons peut-être forcés
							de nous adapter selon l'évolution de la situation. Au{" "}
							<strong>PIRE</strong> des cas tout serait prêt pour l'an prochain
							!
						</div>
					</Bandeau>
					<Bandeau
						style={{
							backgroundColor: "white",
							backgroundImage: "url(/images/oeufs2.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "left bottom",
							backgroundSize: "cover",
							//backgroundAttachment: 'fixed',
							paddingTop: 20,
							paddingBottom: 20,
						}}
					>
						<div>
							<Titre3 style={{ color: "black" }}>Ce site </Titre3>
							<div style={{ textAlign: "justify", padding: 10 }}>
								Cette page internet est en constante évolution, elle a vocation
								à informer, expliquer. Le tchat nous permet de nous exprimer,
								communiquer, <b>donner notre avis</b>. L'idée étant de :
								<ul>
									<li> Centraliser l'information </li>
									<li>
										éviter de noyer l'information dans un fil de discussion
									</li>
									<li>éviter le téléphone arabe</li>
									<li>
										effacer les innégalités technologiques
										<span style={{ fontSize: 15, marginLeft: 5 }}>
											( personne n'aura à se mettre à facebook messenger ni
											whatsapp )
										</span>
									</li>
									<li>Permettre à tous de s'exprimer</li>
								</ul>
								3 listes sont a votre disposition, pour nous permettre de nous
								organiser. Leur principe d'utilisation est expliqué en dessous
								de celles-ci.
							</div>
						</div>
					</Bandeau>
					<Bandeau style={{ color: "white" }}>
						<div style={{ textAlign: "justify", padding: 30 }}>
							Ceci est un outil et certainement pas une contrainte, je suis
							ouvert à toutes propositions de contenu, d'infos à relayer ou de
							fonctionnalité (<A onClick={contact.bind(this)}>Me contacter</A>).
							Il doit nous être utile, n'hésitez pas à être imaginatif.
						</div>
					</Bandeau>

					<Bandeau
						style={{
							backgroundColor: "white",
							paddingTop: 20,
							paddingBottom: 20,
						}}
					>
						<div>
							<Titre3 style={{ color: "black" }}>Suggestions</Titre3>
							<div style={{ textAlign: "justify", padding: 10 }}>
								Arthur, notre petit génie du bricolage a fabriqué un tourne
								broche qualité avion de chasse. Etant donné que le méchoui est
								un bon moyen de préparer une grande quantité de viande sans
								avoir à cuisiner pendant une ou deux semaines ( on est nombreux
								mais pas à la retraite, ... il faut bien l'dire ^^ ), on s'est
								dit que ça pourrait être vraiment bien pour notre réunion
								familliale tout en conservant la tradition ovine de Pâques.
							</div>
						</div>
						<img
							alt="image"
							src={
								this.state.hover_mechoui
									? "/images/mechouiB.png"
									: "/images/mechouiC.png"
							}
							onMouseOver={this.hoverMechoui.bind(this)}
							onMouseOut={this.unhoverMechoui.bind(this)}
							onTouchStart={this.hoverMechoui.bind(this)}
							onTouchEnd={this.unhoverMechoui.bind(this)}
						></img>
					</Bandeau>
				</div>
			</div>
		);
	}
}

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import { Img, Input, Button, Popup } from "gat-ui-react";

import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import Titre3 from "../components/Titre3.js";
import MyName from "../components/MyName.js";
import A from "../components/A.js";
import Bandeau from "../components/Bandeau.js";

class Paque extends Component {
	constructor() {
		super();
		this.state = {
			fl: false,
			hover: false,
			hoverp: false,
			open: false,
		};
	}
	componentDidMount() {
		let { getStatePaque } = this.props;
		getStatePaque({}, "free_list");
	}
	change(e, { value, name, rating }) {
		let { controlePaque } = this.props;
		controlePaque({ [name]: value || rating });
	}
	onClick() {
		let { controlePaque } = this.props;
		this._addStatePaque();
		controlePaque({ input: "" });
	}
	onSuppr(_id) {
		let { rmStatePaque } = this.props;
		this.closePoppup();
		this.setState({ fl: false });
		rmStatePaque({ _id }, "free_list");
	}
	annule() {
		this.closePoppup();
		this.setState({ fl: false });
	}
	mouseEnter(index) {
		this.setState({ hover: index });
	}
	mouseLeave() {
		this.setState({ hover: false });
	}
	mouseEnterp(index) {
		this.setState({ hoverp: index });
	}
	mouseLeavep() {
		this.setState({ hoverp: false });
	}
	openPoppup(fl) {
		this.setState({ open: true, fl });
	}
	closePoppup() {
		this.setState({ open: false });
	}
	_addStatePaque() {
		let { input, addStatePaque } = this.props;
		addStatePaque(
			{ titre: input, date: Date.now(), suggestion: false },
			"free_list"
		);
	}
	jour(j) {
		switch (j) {
			case 0:
				return "dimanche";
			case 1:
				return "lundi";
			case 2:
				return "mardi";
			case 3:
				return "mercredi";
			case 4:
				return "jeudi";
			case 5:
				return "vendredi";
			case 6:
				return "samedi";
			default:
				return "erreur jour";
		}
	}
	mois(m) {
		switch (m) {
			case 1:
				return "janvier";
			case 2:
				return "février";
			case 3:
				return "mars";
			case 4:
				return "avril";
			case 5:
				return "mai";
			case 6:
				return "juin";
			case 7:
				return "juillet";
			case 8:
				return "août";
			case 9:
				return "septembre";
			case 10:
				return "octobre";
			case 11:
				return "novembre";
			case 12:
				return "décembre";
			default:
				return "erreur jour";
		}
	}
	hourmin(hm) {
		return hm < 10 ? "0" + hm : hm;
	}
	contentPopup(fl) {
		let date = new Date(fl.date);
		let date_string =
			this.jour(date.getDay()) +
			" " +
			date.getDate() +
			" " +
			this.mois(date.getMonth() + 1) +
			" " +
			date.getFullYear() +
			" à " +
			date.getHours() +
			"h" +
			this.hourmin(date.getMinutes());

		return (
			<div
				style={{
					textAlign: "justify",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<span style={{ margin: 10, textAlign: "justify", maxWidth: 380 }}>
					Attention, vous avez cliqué sur le boutton pour supprimer une ligne de
					la liste des cadeaux offerts.
				</span>
				<span style={{ margin: 10, textAlign: "justify", maxWidth: 380 }}>
					Voulez-vous vraiment supprimer cette ligne :
				</span>
				<span style={{ margin: 10, textAlign: "justify", maxWidth: 380 }}>
					{fl && fl.titre ? fl.titre : "non"}
				</span>
				<span style={{ margin: 10, textAlign: "justify", maxWidth: 380 }}>
					{" "}
					enregistrée le{" "}
				</span>
				<span style={{ margin: 10, textAlign: "justify", maxWidth: 380 }}>
					{date_string}
				</span>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<div
						onMouseEnter={this.mouseEnterp.bind(this, 1)}
						onMouseLeave={this.mouseLeavep.bind(this)}
					>
						<Button
							style={{
								backgroundColor:
									this.state.hoverp === 1
										? "rgba(250,0,0,0.6)"
										: "rgba(250,0,0,0.4)",
							}}
							onClick={this.onSuppr.bind(this, fl._id)}
						>
							Oui, oui, merci !
						</Button>
					</div>

					<div
						onMouseEnter={this.mouseEnterp.bind(this, 2)}
						onMouseLeave={this.mouseLeavep.bind(this)}
					>
						<Button
							style={{
								backgroundColor:
									this.state.hoverp === 2
										? "rgba(0,250,0,0.6)"
										: "rgba(0,250,0,0.4)",
							}}
							onClick={this.annule.bind(this)}
						>
							Ah non, non !
						</Button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		let { mamie, papi, input, free_list } = this.props;
		let { open, fl } = this.state;
		return mamie !== "Simone" || papi !== "Maurice" ? (
			<section
				style={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Input
					style={{ flex: 1 }}
					label="Mamie"
					name="mamie"
					placeholder="prenom de mamie"
					value={mamie || ""}
					onChange={this.change.bind(this)}
				/>
				<Input
					style={{ flex: 1 }}
					label="Papi"
					name="papi"
					placeholder="prenom de papi"
					value={papi || ""}
					onChange={this.change.bind(this)}
				/>
			</section>
		) : (
			<section style={{ display: "flex", flexDirection: "column" }}>
				<Popup style={{ flexDirection: "column" }} open={open}>
					{fl ? this.contentPopup(fl) : ""}
				</Popup>

				{/*<Img 
            alt ='image' src='/images/paques2.jpg' 
            im_style={{minWidth:50}}
          >
          </Img>*/}
				{/*{<div style={{
        	backgroundImage:"url(/images/paques2.jpg)",
        	backgroundRepeat: "no-repeat", 
        	backgroundPosition:"center",	
        	backgroundSize: "cover", 
        	minHeight:850, 
        	display:"flex",
        	alignItems:"flex-start", 
        	flexDirection:"column", 
        	justifyContent:"flex-end"}}>
				
        </div>}*/}
				<img alt="image" src="/images/paques2.jpg"></img>

				<div
					style={{
						color: "white",
						fontSize: 22,
						fontWeight: "Bold",
						display: "flex",
						backgroundColor: "rgba(0, 173, 193,1)",
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
						backgroundColor: "rgba(0, 173, 193,1)",
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
							<Titre3 style={{ color: "black" }}>Actu </Titre3>
							On pourra mettre ici toutes informations à relayer ( dates
							butoires, choses urgentes, infos contexte sanitaire ). N'hésitez
							pas à me transmettre les infos qui vous semblent intéressantes de
							mettre dans cet encart.
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
								Cette page internet va évoluer prochainement, elle a pour le
								moment vocation à informer, expliquer. Puis un <b>tchat</b> va
								bientôt arriver pour pouvoir s'exprimer, communiquer,{" "}
								<b>donner son avis</b>. L'idée étant de :
								<ul>
									<li> Centraliser l'information </li>
									<li>
										éviter de noyer l'information dans un fil de discussion
									</li>
									<li>éviter le téléphone arabe</li>
									<li>
										effacer les innégalités technologiques
										<span style={{ fontSize: 15 }}>
											( personne n'aura à se mettre à facebook messenger ni
											whatsapp )
										</span>
									</li>
									<li>Permettre à tous de s'exprimer</li>
								</ul>
								Puis si tous le monde est partant, différentes listes vont voir
								le jour, chacun pourra alors :
								<ul>
									<li>
										indiquer sa présence ( pour compter le nombre de couverts )
									</li>
									<li>
										agrémenter les listes de choses à penser, à faire ou à
										préparer
									</li>
									<li>
										s'assigner sur les choses qu'on a envie de faire en
										préparation ou pour aider le jour j
									</li>
								</ul>
								Tout le monde verra qui vient ou encore ce qui est déjà prévu
								par certains évitant ainsi les doublons.
								<span style={{ fontSize: 15 }}>
									( Par exemple si vous voyez qu'il y a déjà 7 personnes qui ont
									prévu de venir avec une entrée, ... )
								</span>
							</div>
						</div>
					</Bandeau>
					<Bandeau style={{ color: "white" }}>
						<div style={{ textAlign: "justify", padding: 30 }}>
							Ceci est un outil et certainement pas une contrainte, je suis
							ouvert à toutes propositions de contenu (infos à relayer) ou de
							fonctionnalité. Il doit nous être utile, n'hésitez pas à être
							imaginatif.
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
					</Bandeau>
					<Bandeau style={{ color: "white" }}>
						<div style={{ textAlign: "justify", padding: 30 }}>
							A très bientôt ici où vous trouverez le tchat pour{" "}
							<b>donner votre avis</b>. C'est en cours de construction.
						</div>
					</Bandeau>
					{/*<Bandeau style={{ color: "white" }}>
						<div
							style={{
								display: "flex",
								textAlign: "justify",
								padding: 10,
								width: "100%",
							}}
						>
							<div
								style={{
									textAlign: "justify",
									flex: 1,
									padding: 10,
								}}
							>
								<ul>
									<li>Preparer la salle</li>
									<li>Entrées</li>
									<li>Trouver le mouton</li>
									<li>Légumes</li>
									<li>Salade</li>
									<li>Fromage</li>
									<li>Dessert</li>
									<li>Blanc ( Klevner ? )</li>
									<li>Rouge</li>
								</ul>
							</div>
							<div
								style={{
									textAlign: "justify",
									flex: 1,
									padding: 10,
								}}
							>
								<ul>
									<li>Preparer le tourne broche</li>
									<li>découpe</li>
									<li>Vaisselle</li>
									<li>Nettoyer à la fin</li>
								</ul>
							</div>
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
							<Titre3 style={{ color: "black" }}>
								Allez Hop Qui Fait Quoi ?
							</Titre3>
							<div style={{ textAlign: "justify", padding: 10 }}>
								Une liste dans laquelle vous pouvez indiquer ce que vous voulez
								preparer/apporter. Une liste dans laquelle vous pouvez indiquer
								ce que vous comptez faire le jour J pour aider
							</div>
						</div>
					</Bandeau>
					<Bandeau style={{ color: "white" }}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								textAlign: "justify",
								padding: 10,
								flex: 1,
							}}
						>
							<div
								style={{
									display: "flex",
									flex: 1,
									marginBottom: 5,
									marginTop: 15,
									alignItems: "center",
									flexDirection: "row",
								}}
							>
								<Input
									style={{ flex: 1 }}
									label=""
									name="input"
									placeholder="En construction"
									value={input || ""}
									onChange={this.change.bind(this)}
								/>
								<div
									onMouseEnter={this.mouseEnter.bind(this, "A")}
									onMouseLeave={this.mouseLeave.bind(this)}
								>
									<Button
			          onClick = { this.onClick.bind(this) }
			          style = {{backgroundColor:this.state.hover==="A"?"rgba(237, 220, 82,1)":"rgba(237, 220, 82,0.8)"}}
			      >
			        Ajouter
			      </Button>
								</div>
							</div>
							<ul
								style={{
									paddingInlineStart: 0,
									display: "flex",
									flexDirection: "column",
								}}
							>
								{typeof free_list === "object" &&
								free_list instanceof Array &&
								free_list.length > 0
									? free_list.map((fl, i) => {
											let date = new Date(fl.date);
											let date_string =
												date.getDate() +
												"/" +
												(date.getMonth() + 1) +
												"/" +
												date.getFullYear();
											let hour_string =
												this.hourmin(date.getHours()) +
												"h" +
												this.hourmin(date.getMinutes());

											return (
												<li
													key={i}
													style={{
														display: "flex",
														flex: 1,
														marginBottom: 20,
														alignItems: "center",
														flexDirection: "row",
														listStyle: "none",
													}}
												>
													<div
														style={{
															height: 6,
															width: 6,
															marginRight: 10,
															borderRadius: "50%",
															backgroundColor: "white",
														}}
													></div>
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
															backgroundColor: "rgb(237, 220, 82)",
															padding: 3,
															marginRight: 5,
														}}
													>
														<span
															style={{
																color: "rgba(0, 173, 193,1)",
																fontSize: 10,
																fontWeight: "bold",
															}}
														>
															{date_string}
														</span>
														<span
															style={{
																color: "rgba(0, 173, 193,1)",
																fontSize: 10,
																fontWeight: "bold",
															}}
														>
															{hour_string}
														</span>
													</div>
													<span style={{ flex: 1, paddingRight: 15 }}>
														{fl.titre}
													</span>
													<div
														onMouseEnter={this.mouseEnter.bind(this, i)}
														onMouseLeave={this.mouseLeave.bind(this)}
													>
														<Button
															onClick={this.openPoppup.bind(this, fl)}
															style={{
																backgroundColor:
																	this.state.hover === i
																		? "rgba(198, 0, 57,1)"
																		: "rgba(198, 0, 57,0.8)",
															}}
														>
															X
														</Button>
													</div>
												</li>
											);
									  })
									: ""}
							</ul>
						</div>
					</Bandeau>*/}
					<Bandeau
						style={{
							backgroundColor: "white",
							backgroundImage: "url(/images/piedDePage.png)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "left bottom",
							backgroundSize: "cover",
							paddingTop: 20,
							paddingBottom: 20,
						}}
					>
						<div style={{ flex: 1 }}></div>
						<div
							style={{
								color: "White",
								fontWeight: "bold",
								textShadow: "1px 1px 2px black",
							}}
						>
							<span style={{ fontSize: 40 }}>Merci !</span>
							<br />
							<span style={{ fontSize: 30, marginRight: 5 }}>Nous Tous !</span>
						</div>
					</Bandeau>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		mamie: state.paque.controle.mamie,
		papi: state.paque.controle.papi,
		input: state.paque.controle.input,
		free_list: state.paque.free_list,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			controlePaque: ACTIONS.Paque.controle,
			addStatePaque: ACTIONS.Paque.add_state,
			rmStatePaque: ACTIONS.Paque.rm_state,
			getStatePaque: ACTIONS.Paque.get_state,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paque);

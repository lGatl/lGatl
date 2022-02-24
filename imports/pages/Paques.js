// todo passer this.state.users en this.props.users

import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../6_actions/actions";
import { thisSocket, LOCAL } from "../6_actions/socket_action";

import {
	Img,
	Input,
	Button,
	Checkbox,
	Dropdown,
	Popup,
	Segment,
} from "gat-ui-react";

import CardList from "../components/CardList.js";
import PopupMail from "../containers/PopupMail.js";
import PopupInscription from "../components/PopupInscription.js";
import { InputV2 } from "../components/InputV2.js";
import Tchat from "../components/Tchat.js";
import LogSocket from "../components/LogSocket.js";
import IntroPaques from "../components/IntroPaques.js";
import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import Titre3 from "../components/Titre3.js";

import MyName from "../components/MyName.js";
import A from "../components/A.js";
import Bandeau from "../components/Bandeau.js";
import PrincipesListes from "../components/PrincipesListes.js";
import { dateToString } from "../8_libs/date";
import { cap } from "../8_libs/string";

const TEST = LOCAL;

const option_taton = [
	{ value: "", text: "-" },
	{ value: "bernadette", text: "Bernadette" },
	{ value: "chantal", text: "Chantal" },
	{ value: "christine", text: "Christine" },
	{ value: "florance", text: "Florance" },
	{ value: "françois", text: "François" },
	{ value: "joel", text: "Joel" },
	{ value: "josette", text: "Josette" },
	{ value: "lydie", text: "Lydie" },
	{ value: "marie-france", text: "Marie-France" },
];
const option_unite = [
	{ value: "kg", text: "Kg" },
	{ value: "nb", text: "Nbr" },
];

class Paque extends Component {
	constructor() {
		super();
		const thisMyRef = this.myRef;
		this.state = {
			admin: false,
			fl: false,
			first: true,
			hover: false,
			hoverp: false,
			//Poppuup
			open: false,
			open_inscription: false,
			open_liste_preparer: false,
			open_liste_faire: false,
			open_info: "",

			users: {},
			user_logged: null,
			defiler: true,
		};
	}
	componentDidMount() {
		const {
			getSSLPaque,
			logged,
			loggedOut,
			usersLogged,
			receiveNewMessage,
			updatedMessage,
			updatedMessagePaque,
			logInSocket,
			controlePaque,
			cleanMessages,
			relog,
		} = this.props;

		window.addEventListener("focus", () => {
			getSSLPaque({}, { sort: { date: -1 } });
			cleanMessages();
			relog(true);
		});

		getSSLPaque({}, { sort: { date: -1 } });
		thisSocket.on("logged", function (user) {
			logged(user);
		});
		thisSocket.on("loggedOut", function (user) {
			loggedOut(user);
			localStorage.removeItem("prenom");
		});
		thisSocket.on("users", function (users) {
			usersLogged(users);
		});
		thisSocket.on("message", function (message) {
			receiveNewMessage(message);
		});
		thisSocket.on("updatedMessage", function (up) {
			updatedMessage(up);
			updatedMessagePaque(up);
		});
		thisSocket.on("reload", function () {
			getSSLPaque({}, { sort: { date: -1 } });
			cleanMessages();
		});
		thisSocket.on("disconnect", function () {
			//thisSocket.reconnect();
			getSSLPaque({}, { sort: { date: -1 } });
			cleanMessages();
			relog(true);
		});
		const username = localStorage.getItem("prenom");
		if (username?.trim()?.length >= 4) {
			logInSocket({ username: username.trim().toLowerCase() });
		}
	}
	componentDidUpdate(prevProps, prevState) {
		//  Defilement auto
		if (
			this.state.defiler ||
			this.props.messages[this.props.messages.length - 1]?.user?.username ===
				this.props.username
		) {
			if (this.props.messages !== prevProps.messages) {
				const el = document.getElementById("chat1");
				if (el) {
					el.scrollTop = el.scrollHeight;
				}
			}
		}
		// Bug Portable
		if (this.props.relog_socket) {
			this.props.relog(false);
			if (this.props.user_logged) {
				this.props.logInSocket(this.props.user_logged);
			}
		}
		// Color message
		if (
			prevProps.all_paques.length !== this.props.all_paques.length ||
			prevProps.messages.length !== this.props.messages.length
		) {
			const allMessages = [...this.props.all_paques, ...this.props.messages];
			const users = allMessages.reduce((total, am) => {
				const username = am.user?.username;
				if (
					username &&
					!this.state?.users?.hasOwnProperty(username) &&
					!total.hasOwnProperty(username)
				) {
					total[username] = {};
				}
				return total;
			}, {});
			if (Object.keys(users).length >= 0) {
				this.giveBg(users);
			}
		}

		//debut en bas
		if (
			!(
				prevProps.mamie?.trim() === "Simone" &&
				prevProps.papi?.trim() === "Maurice"
			) &&
			this.props.mamie?.trim() === "Simone" &&
			this.props.papi?.trim() === "Maurice"
		) {
			this.setState({ first: false });
			this.bas();
		}
	}
	contact() {
		FlowRouter.go("/Contact");
	}
	giveBg(users) {
		const total = [];
		Object.keys(users).forEach((key) => {
			let ok = true;
			let test = 0;
			let val = 0;
			while (ok) {
				test++;
				val = Math.floor(Math.random() * 45) + 130;
				ok = !(
					(total.indexOf(val) < 0 &&
						Object.keys(this.state.users).findIndex(
							(key) => this.state.users[key].bgcolor === val
						) < 0) ||
					test > 1000
				);
			}
			total.push(val);
			users[key] = { bgColor: val };
		});
		this.setState({ users: { ...this.state.users, ...users } });
	}
	bas() {
		const el = document.getElementById("chat1");
		if (el) {
			el.scrollTop = el.scrollHeight;
		}
	}
	change(e, { checked, value, name, rating }) {
		const { controlePaque } = this.props;
		controlePaque({ [name]: value ?? rating ?? checked });
	}
	haut() {
		const el = document.getElementById("chat1");
		if (el) {
			el.scrollTop = 0;
		}
	}
	loginSocket() {
		const { username, logInSocket } = this.props;
		if (username.trim().length >= 4) {
			localStorage.setItem("prenom", username.trim().toLowerCase());
			logInSocket({ username: username.trim().toLowerCase() });
		}
	}
	logOut() {
		const { logOut } = this.props;
		logOut();
	}
	etreFaiseur(up) {
		const { updateMessage } = this.props;
		updateMessage(up);
	}
	etrePreparateur(up) {
		const { updateMessage } = this.props;
		updateMessage(up, { only_one: true });
	}
	updateMessage(up) {
		const { updateMessage } = this.props;
		updateMessage(up);
	}
	messageChat1() {
		const { message_tchat1, emitMessage, user_logged, controlePaque } =
			this.props;
		if (user_logged?.username && message_tchat1?.trim().length > 0) {
			const message = {
				message: message_tchat1.trim(),
				user: user_logged,
				tchat: 1,
			};
			emitMessage(message);
			controlePaque({ message_tchat1: "" });
		}
	}
	inscription() {
		const {
			personne,
			present,
			taton,
			emitMessage,
			user_logged,
			controlePaque,
		} = this.props;
		if (
			user_logged?.username &&
			personne?.trim().length > 0 &&
			taton?.length > 0
		) {
			const message = {
				personne: personne.trim().toLowerCase(),
				present: present ? present : false,
				taton,
				user: user_logged,
				liste: "inscription",
			};
			emitMessage(message);
			controlePaque({ personne: "", present: false });
		}
	}
	listePreparer() {
		const { qtt, unite, preparation, emitMessage, user_logged, controlePaque } =
			this.props;
		if (user_logged?.username && preparation?.trim().length > 0) {
			const message = {
				qtt: qtt ? qtt : 0,
				preparation: preparation.trim().toLowerCase(),
				unite: unite ? unite : "nb",
				user: user_logged,
				liste: "preparer",
			};
			emitMessage(message);
			controlePaque({ qtt: 1, preparation: "" });
		}
	}
	listeFaire() {
		const { nb_personne, chose, emitMessage, user_logged, controlePaque } =
			this.props;
		if (user_logged?.username && chose?.trim().length > 0) {
			const message = {
				nb_personne: nb_personne ? nb_personne : 0,
				chose: chose.trim(),
				user: user_logged,
				liste: "faire",
			};
			emitMessage(message);
			controlePaque({ nb_personne: 1, chose });
		}
	}
	openInfo(_id) {
		this.setState({ open_info: _id });
	}
	reload() {
		const { reload } = this.props;
		reload();
	}
	removeMessage(_id) {
		//console.log(_id);
		const { rmPaque } = this.props;
		rmPaque({ _id });
	}
	render() {
		const {
			active_user,
			all_paques,
			free_list,
			input,
			mamie,
			message_tchat1,
			messages,
			papi,
			username,
			user_logged,
			users_logged,
			//Inscriptions
			personne,
			present,
			taton,
			//Liste Preparation
			qtt,
			unite,
			preparation,
			//liste faire
			nb_personne,
			chose,
		} = this.props;
		const { admin, open, fl } = this.state;
		const all_messages = [...all_paques, ...messages];
		const info_fund = all_messages.find(
			(am) => am._id === this.state.open_info
		);
		const the_doners = info_fund?.hasOwnProperty("doner")
			? Object.keys(info_fund.doner).reduce((total, elt) => {
					if (info_fund.doner[elt] === true) {
						total.push(cap(elt));
					}
					return total;
			  }, [])
			: [];
		// console.log(messages, all_paques);
		//console.log(user_logged);
		// console.log(this.state.users, Object.keys(this.state.users).length);
		return !TEST &&
			(mamie?.trim() !== "Simone" || papi?.trim() !== "Maurice") ? (
			<section
				style={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				Les prenoms de mamie et papi la première lettre en majuscule
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
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "rgba(0, 173, 193,1)",
				}}
			>
				{this.state.open ? (
					<PopupMail
						admin={admin}
						close={() => this.setState({ open: false })}
					/>
				) : (
					""
				)}
				{this.state.open_inscription ? (
					<PopupInscription
						admin={admin}
						username={user_logged?.username}
						titre="Qui sera là ?"
						//Control
						control={[
							{
								elt: "dropdown",
								options: option_taton,
								name: "taton",
								value: taton || "",
								label: "Selectionnez",
								placeholder: "Selectionnez qq",
							},
							{
								elt: "input",
								style: {
									visibility: taton?.length ? "visible" : "hidden",
								},
								label: "Prenom de la personne à inscrire",
								name: "personne",
								value: cap(personne) || "",
							},
							{
								elt: "checkbox",
								style: { visibility: taton?.length ? "visible" : "hidden" },
								label: "Présent ?",
								name: "present",
								checked: present ?? false,
							},
							{
								elt: "button",
								style: {
									visibility:
										taton?.length && personne?.length ? "visible" : "hidden",
								},
								onClick: user_logged?.username
									? this.inscription.bind(this)
									: () => {
											this.setState({ open_inscription: false });
											document.getElementById("prenom").focus();
									  },
								children: user_logged?.username
									? present
										? "Sera Présent"
										: "Sera Absent"
									: "Donne ton prénom pour participer à l'organisation",
							},
						]}
						//data
						data={
							taton
								? all_messages.filter((msg) => msg.liste === "inscription")
								: Object.values(
										all_messages.reduce((total, mess) => {
											if (mess.liste === "inscription") {
												if (!total.hasOwnProperty(mess.taton)) {
													total[mess.taton] = {
														taton: mess.taton,
														present: 0,
														inscrit: 0,
													};
												}
												total[mess.taton].inscrit += 1;
												if (mess.present) {
													total[mess.taton].present += 1;
												}
											}
											return total;
										}, {})
								  )
						}
						filterData={taton ? (dat) => dat.taton === taton : null}
						order={
							taton
								? [
										{
											name: "taton",
											label: "Famille",
											style: { marginLeft: 5, flex: 1 },
										},
										{ name: "personne", style: { marginLeft: 5, flex: 1 } },
										"present",
								  ]
								: [
										{
											name: "taton",
											label: "famille",
											style: { marginLeft: 5, flex: 1 },
										},
										"inscrit",
										"present",
								  ]
						}
						//Fnt
						removeMessage={this.removeMessage.bind(this)}
						updateMessage={this.updateMessage.bind(this)}
						change={this.change.bind(this)}
						close={() => this.setState({ open_inscription: false })}
					/>
				) : (
					""
				)}
				{this.state.open_liste_preparer ? (
					<PopupInscription
						admin={admin}
						titre="Que devons nous apporter ?"
						//Control
						control={[
							{
								elt: "input",
								type: "number",
								label: "Quantité",
								name: "qtt",
								step: 0.01,
								value: qtt || "",
							},
							{
								elt: "dropdown",
								options: option_unite,
								label: "Unité",
								name: "unite",
								value: unite ?? false,
							},
							{
								elt: "input",
								label: "Préparation",
								name: "preparation",
								value: preparation || "",
							},
							{
								elt: "button",
								onClick: user_logged?.username
									? this.listePreparer.bind(this)
									: () => {
											this.setState({ open_liste_preparer: false });
											document.getElementById("prenom").focus();
									  },
								children: user_logged?.username
									? "Ajouter"
									: "Donne ton prenom pour participer à l'organisation",
							},
						]}
						//data
						data={all_messages.filter((msg) => msg.liste === "preparer")}
						order={[
							"qtt",
							"unite",
							{ name: "preparation", style: { marginLeft: 5, flex: 1 } },
						]}
						//Fnt
						removeMessage={this.removeMessage.bind(this)}
						change={this.change.bind(this)}
						close={() => this.setState({ open_liste_preparer: false })}
					/>
				) : (
					""
				)}
				{this.state.open_liste_faire ? (
					<PopupInscription
						admin={admin}
						username={user_logged?.username}
						titre="Que devons nous faire ?"
						//Control
						control={[
							{
								elt: "input",
								label: "Chose a faire",
								name: "chose",
								value: chose || "",
							},
							{
								elt: "button",
								onClick: user_logged?.username
									? this.listeFaire.bind(this)
									: () => {
											this.setState({ open_liste_faire: false });
											document.getElementById("prenom").focus();
									  },
								children: user_logged?.username
									? "Ajouter"
									: "Donne ton prenom pour participer à l'organisation",
							},
						]}
						//data
						data={all_messages.filter((msg) => msg.liste === "faire")}
						order={[{ name: "chose", style: { flex: 1, textAlign: "center" } }]}
						//Fnt
						removeMessage={this.removeMessage.bind(this)}
						change={this.change.bind(this)}
						close={() => this.setState({ open_liste_faire: false })}
					/>
				) : (
					""
				)}
				{this.state.open_info ? (
					<Popup style={{ flexDirection: "column" }} open={true}>
						<div style={{ flex: 1 }}>
							{`${the_doners} ${the_doners.length > 1 ? "vont" : "va"} ${
								info_fund?.liste === "preparer" ? "apporter" : "faire"
							} ${info_fund?.qtt ? info_fund.qtt + " " : ""}${
								info_fund?.unite === "kg" ? info_fund.unite + " " : ""
							}${info_fund?.preparation || info_fund?.chose}`}
						</div>
						<Button onClick={() => this.setState({ open_info: "" })}>
							Fermer
						</Button>
					</Popup>
				) : (
					""
				)}

				<IntroPaques contact={this.contact.bind(this)} />
				<Bandeau style={{ color: "white" }}>
					<span style={{ textAlign: "justify", padding: 10 }}>
						Vous êtes tous invités à donner votre avis sur l'idée de reprendre
						le flambeau et sur l'idée de l'outil. L'objectif étant d'être clair,
						que chacun s'exprime et de rester lisible pour tous, essayons de :
						<ul>
							<li>
								ne pas (ou pas trop) nous renvoyer la balle afin de ne pas noyer
								les premiers avis dans un fil de discussion trop long, (l'idée
								de créer un second tchat pour les bavardages est imaginable,
								mais ce n'est pas l'objectif ici)
							</li>
							<li>
								bien mettre votre prénom en évitant les abréviations (les
								surnoms) afin que tous le monde vous reconnaisse
							</li>
							<li>
								utiliser toujours le même prénom (l'écrire de la même
								manière..., mêmes accents..., je me charge des majuscules pour
								vous... )
							</li>
						</ul>
					</span>

					{
						<div
							style={{
								width: "100%",
								marginLeft: 40,
								marginRight: 5,
								marginBottom: 20,
							}}
						>
							<LogSocket
								user_logged={user_logged}
								username={username}
								word="la conversation"
								change={this.change.bind(this)}
								loginSocket={this.loginSocket.bind(this)}
								logOut={this.logOut.bind(this)}
							/>
							{active_user?.username === "gat55@live.fr" ? (
								<Button onClick={() => this.setState({ admin: !admin })}>
									Admin
								</Button>
							) : (
								""
							)}
							{this.state.admin ? (
								<div>
									<Button
										style={{ marginBottom: 20 }}
										onClick={this.reload.bind(this)}
									>
										Reload
									</Button>
									<Segment
										style={{
											flex: 1,
											color: "black",
											padding: 10,
											overflow: "auto",
											flexDirection: "row",
											backgroundColor: "white",
										}}
									>
										<span style={{ marginRight: 5, fontWeight: "Bold" }}>
											Connectés :
										</span>
										{Object.values(users_logged).map((user_l, i) => (
											<span style={{ marginRight: 5 }} key={i}>
												{cap(user_l?.username)},
											</span>
										))}
									</Segment>
								</div>
							) : (
								""
							)}
							<br />
							<Button
								style={{ marginTop: 10 }}
								onClick={() => this.setState({ open: true })}
							>
								Recevoir un mail si un message est posté
							</Button>
							<br />
							<Tchat
								admin={admin}
								defiler={this.state.defiler}
								all_messages={all_messages.filter((mes) => mes.tchat === 1)}
								message_tchat1={message_tchat1}
								username={username || user_logged?.username}
								user_logged={user_logged}
								users={this.state.users}
								//fnt
								bas={this.bas.bind(this)}
								change={this.change.bind(this)}
								haut={this.haut.bind(this)}
								removeMessage={this.removeMessage.bind(this)}
								messageChat1={this.messageChat1.bind(this)}
							/>
						</div>
					}
				</Bandeau>
				<Bandeau
					style={{
						backgroundColor: "white",
						padding: 20,
					}}
					stylein={{ maxWidth: "100%", flexDirection: "column" }}
				>
					<LogSocket
						id="prenom"
						user_logged={user_logged}
						username={username}
						word="l'organisation"
						change={this.change.bind(this)}
						loginSocket={this.loginSocket.bind(this)}
						logOut={this.logOut.bind(this)}
					/>

					<div
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<CardList
							open={() => {
								this.setState({ open_inscription: true });
							}}
							button_label="Inscrire des personnes"
						>
							<div
								style={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<span
									style={{
										fontWeight: "bold",
										fontSize: 20,
										color: "black",
									}}
								>
									{" "}
									Total de participants :
								</span>
								<span
									style={{
										fontWeight: "bold",
										fontSize: 40,
										color: "rgba(0, 173, 193,1)",
										textShadow: "1px 1px 2px black",
									}}
								>{`${
									all_messages
										.filter((msg) => msg.liste === "inscription")
										.filter((dat) => dat.present === true).length
								} couverts`}</span>
								<span
									style={{
										fontWeight: "bold",
										fontSize: 14,
										color: "grey",
										textAlign: "center",
									}}
								>
									{" "}
									{`( La présence ou l'absence de ${
										all_messages.filter((msg) => msg.liste === "inscription")
											?.length
									} personnes a été indiquée )`}
								</span>
							</div>
						</CardList>
						<CardList
							title="Choses à apporter"
							button_label="Ajouter des choses à apporter"
							data={all_messages}
							beDoner={this.etrePreparateur.bind(this)}
							control={[{ name: "unite", options: option_unite }]}
							filterData={(msg) => msg.liste === "preparer"}
							only_one={true}
							order={[
								{
									name: "qtt",
									/*calcul: (val) =>
										val *
										all_messages
											.filter((msg) => msg.liste === "inscription")
											.filter((dat) => dat.present === true).length,*/
								},
								"unite",
								{ name: "preparation", style: { flex: 1, marginLeft: 5 } },
							]}
							open={() => {
								this.setState({ open_liste_preparer: true });
							}}
							openInfo={this.openInfo.bind(this)}
							user_logged={user_logged}
						/>
						<CardList
							title="Choses à faire le jour j"
							button_label="Ajouter des choses à faire"
							data={all_messages.map((am) => ({
								...am,
								personnes: am.doner
									? Object.keys(am.doner).reduce((total, don) => {
											if (am?.doner[don] === true) {
												total += 1;
											}
											return total;
									  }, 0)
									: 0,
							}))}
							beDoner={this.etreFaiseur.bind(this)}
							filterData={(msg) => msg.liste === "faire"}
							order={[
								{
									name: "personnes",
									label: "faiseurs",
									style: { marginLeft: 5, textAlign: "center", width: 100 },
								},
								{ name: "chose", style: { flex: 1 } },
							]}
							open={() => {
								this.setState({ open_liste_faire: true });
							}}
							openInfo={this.openInfo.bind(this)}
							user_logged={user_logged}
						/>
					</div>
				</Bandeau>
				<Bandeau style={{ color: "white", paddingBottom: 20 }}>
					<PrincipesListes contact={this.contact.bind(this)}/>
				</Bandeau>
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
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		mamie: state.paque.controle.mamie,
		papi: state.paque.controle.papi,
		input: state.paque.controle.input,
		username: state.paque.controle.username,
		users: state.paque.controle.users,
		message_tchat1: state.paque.controle.message_tchat1,
		// Inscription
		personne: state.paque.controle.personne,
		taton: state.paque.controle.taton,
		present: state.paque.controle.present,
		//liste  preparation
		qtt: state.paque.controle.qtt,
		unite: state.paque.controle.unite,
		preparation: state.paque.controle.preparation,
		//liste faire
		nb_personne: state.paque.controle.nb_personne,
		chose: state.paque.controle.chose,

		all_paques: state.paque.all,

		user_logged: state.socket.user_logged,
		users_logged: state.socket.users_logged,
		messages: state.socket.messages,
		relog_socket: state.socket.relog,
		active_user: state.users.active_user,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			controlePaque: ACTIONS.Paque.controle,
			rmPaque: ACTIONS.Paque.rm,
			getSSLPaque: ACTIONS.Paque.get_SSL,
			updatedMessagePaque: ACTIONS.Paque.updatedMessage,

			logInSocket: ACTIONS.Socket.logInSocket,
			logOut: ACTIONS.Socket.logOut,
			reload: ACTIONS.Socket.reload,
			relog: ACTIONS.Socket.relog,
			logged: ACTIONS.Socket.logged,
			loggedOut: ACTIONS.Socket.loggedOut,
			usersLogged: ACTIONS.Socket.usersLogged,
			emitMessage: ACTIONS.Socket.emitMessage,
			receiveNewMessage: ACTIONS.Socket.receiveNewMessage,
			cleanMessages: ACTIONS.Socket.cleanMessages,
			updateMessage: ACTIONS.Socket.updateMessage,
			updatedMessage: ACTIONS.Socket.updatedMessage,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paque);

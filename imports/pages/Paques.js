// sauvegarder la base
// todo bloquer pass
// todo bloquer empty user  &  empty mssg

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../6_actions/actions";
import { thisSocket, LOCAL } from "../6_actions/socket_action";

import { Img, Input, Button, Popup, Segment, TextArea } from "gat-ui-react";

import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import Titre3 from "../components/Titre3.js";
import TextAreaV2 from "../components/TextAreaV2.js";
import MyName from "../components/MyName.js";
import A from "../components/A.js";
import Bandeau from "../components/Bandeau.js";

const TEST = LOCAL;

const dateToString = (mdate, noDate) => {
	const date = new Date(mdate);
	let minutes = date.getMinutes() + "";
	minutes = minutes.length < 2 ? "0" + minutes : minutes;
	let day = date.getDate() + "";
	day = day.length < 2 ? "0" + day : day;
	let month = date.getMonth() + 1 + "";
	month = month.length < 2 ? "0" + month : month;
	return `${
		!noDate ? `${day}/${month}/${date.getFullYear()} ` : ""
	} ${date.getHours()}h${minutes}`;
};
function cap(word) {
	if (typeof word === "string") {
		return word
			.split(" ")
			.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
			.join(" ")
			.split("-")
			.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
			.join("-");
	} else {
		return word;
	}
}
class Paque extends Component {
	constructor() {
		super();
		const thisMyRef = this.myRef;
		this.state = {
			admin: false,
			connectes: true,
			fl: false,
			hover: false,
			hoverp: false,
			hoverMechoui: false,
			open: false,
			users: {},
			user_logged: null,
			defiler: true,
		};
	}
	componentDidMount() {
		const {
			getSSLPaque,
			logged,
			usersLogged,
			receiveNewMessage,
			logInSocket,
			controlePaque,
			cleanMessages,
			relog,
		} = this.props;

		getSSLPaque({}, { sort: { date: -1 } });
		thisSocket.on("logged", function (user) {
			logged(user);
		});
		thisSocket.on("users", function (users) {
			usersLogged(users);
		});
		thisSocket.on("message", function (message) {
			receiveNewMessage(message);
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

		if (this.props.relog_socket) {
			this.props.relog(false);
			if (this.props.user_logged) {
				this.props.logInSocket(this.props.user_logged);
			}
		}
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
	change(e, { value, name, rating }) {
		const { controlePaque } = this.props;
		controlePaque({ [name]: value || rating });
	}
	hoverMechoui() {
		this.setState({ hoverMechoui: true });
	}
	unhoverMechoui() {
		this.setState({ hoverMechoui: false });
	}
	_addStatePaque() {
		const { input, addStatePaque } = this.props;
		addStatePaque(
			{ titre: input, date: Date.now(), suggestion: false },
			"free_list"
		);
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
			logInSocket({ username: username.trim().toLowerCase() });
		}
	}
	messageChat1() {
		const {
			message_tchat1,
			emitMessage,
			addStatePaques,
			user_logged,
			controlePaque,
		} = this.props;
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
			mamie,
			papi,
			input,
			free_list,
			test_tchat,
			username,
			user_logged,
			users_logged,
			message_tchat1,
			messages,
		} = this.props;
		const { admin, open, fl, hoverMechoui } = this.state;
		// console.log(messages, all_paques);
		//console.log(user_logged);
		// console.log(this.state.users, Object.keys(this.state.users).length);

		let pmessage = {};
		const allMessages = [...all_paques, ...messages];
		let formattedMessages = !admin
			? allMessages.reduce((total, mes, i) => {
					const pdate = Date.parse(new Date(pmessage.lastDate));
					const mdate = Date.parse(new Date(mes.date));
					if (
						pmessage.user?.username === mes.user?.username &&
						mdate - pdate < 1000 * 60 * 15
					) {
						pmessage.message +=
							`\n------- ${dateToString(mes.date, true)} -------\n` +
							mes.message;
						pmessage.lastDate = mes.date;
					} else {
						if (Object.keys(pmessage).length) {
							total.push(pmessage);
						}
						pmessage = { ...mes, lastDate: mes.date };
					}
					if (i === allMessages.length - 1) {
						total.push(pmessage);
					}
					return total;
			  }, [])
			: allMessages;

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
			<section style={{ display: "flex", flexDirection: "column" }}>
				<Popup style={{ flexDirection: "column" }} open={open}>
					{fl ? this.contentPopup(fl) : ""}
				</Popup>

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
									<A onClick={this.contact.bind(this)}>Me contacter</A>
								</span>
							</div>
							<span style={{ color: "red", fontWeight: "bold" }}>
								LE TCHAT EST PRÊT ! Cousin(e)s, petit(e)s cousin(e)s, oncle et
								tantes vous êtes tous invités à donner votre avis sur l'idée de
								prendre le relais et sur l'idée de l'outil ! Ensuite si la plus
								part d'entre nous donne un avis favorable, les outils
								d'organisation suiveront rapidement, promis! Merci de lire les
								suggestions d'utilisation.
							</span>
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
								moment vocation à informer, expliquer et maintenant le tchat
								nous permet de s'exprimer, communiquer, <b>donner son avis</b>.
								L'idée étant de :
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
							ouvert à toutes propositions de contenu, d'infos à relayer (
							<A onClick={this.contact.bind(this)}>Me contacter</A>) ou de
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
						<img
							alt="image"
							src={
								hoverMechoui ? "/images/mechouiB.png" : "/images/mechouiC.png"
							}
							onMouseOver={this.hoverMechoui.bind(this)}
							onMouseOut={this.unhoverMechoui.bind(this)}
							onTouchStart={this.hoverMechoui.bind(this)}
							onTouchEnd={this.unhoverMechoui.bind(this)}
						></img>
					</Bandeau>
					<Bandeau style={{ color: "white" }}>
						<span style={{ textAlign: "justify", padding: 10 }}>
							Vous êtes tous invités à donner votre avis sur l'idée de reprendre
							le flambeau et sur l'idée de l'outil. L'objectif étant d'être
							clair, que chacun s'exprime et de rester lisible pour tous,
							essayons de :
							<ul>
								<li>
									ne pas (ou pas trop) nous renvoyer la balle afin de ne pas
									noyer les premiers avis dans un fil de discussion trop long,
									(l'idée de créer un second tchat pour les bavardages est
									imaginable, mais ce n'est pas l'objectif ici)
								</li>
								<li>
									bien mettre votre prénom en évitant les abréviations (les surnoms) afin que
									tous le monde vous reconnaisse
								</li>
								<li>
									utiliser toujours le meme prenom (l'écrire de la même
									manière..., mêmes accents..., je me charge des majuscules pour
									vous... )
								</li>
							</ul>
						</span>
						{
							//test_tchat === "Testchat" || TEST
							true ? (
								""
							) : (
								<Input
									style={{ flex: 1 }}
									label=""
									name="test_tchat"
									placeholder=""
									value={test_tchat || ""}
									onChange={this.change.bind(this)}
								/>
							)
						}
						{
							//test_tchat === "Testchat" || TEST
							true ? (
								<div
									style={{
										width: "100%",
										marginLeft: 40,
										marginRight: 5,
										marginBottom: 20,
									}}
								>
									{user_logged?.username ? (
										<div style={{ marginLeft: 30, marginBottom: 10 }}>
											Salut {cap(user_logged?.username)}, tu peux maintenant
											participer à la conversation{" "}
										</div>
									) : (
										<div
											style={{
												display: "flex",
												marginBottom: 10,
												flexDirection: "column",
											}}
										>
											<span></span>
											<div style={{ display: "flex", flexDirection: "row" }}>
												<Input
													style={{ flex: 1 }}
													label='Mets ton prénom ici (au moins 4 caractères) et clique sur "participer à la conversation" pour participer à la conversation'
													name="username"
													placeholder=""
													value={cap(username) || ""}
													onChange={this.change.bind(this)}
												/>
												<Button onClick={this.loginSocket.bind(this)}>
													Participer <br /> à la conversation
												</Button>
											</div>
										</div>
									)}
									{active_user?.username === "gat55@live.fr" ? (
										<Button onClick={() => this.setState({ admin: !admin })}>
											Admin
										</Button>
									) : (
										""
									)}
									{this.state.admin ? (
										<Button
											style={{ marginBottom: 20 }}
											onClick={this.reload.bind(this)}
										>
											Reload
										</Button>
									) : (
										""
									)}
									<Button
										style={{ marginBottom: 20 }}
										onClick={() =>
											this.setState({ connectes: !this.state.connectes })
										}
									>
										{this.state.connectes
											? "Ne pas voir qui participe"
											: "Voir qui participe"}
									</Button>
									{this.state.connectes ? (
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
									) : (
										""
									)}
									<Button
										style={{ marginTop: 10 }}
										onClick={() =>
											this.setState({ defiler: !this.state.defiler })
										}
									>
										{this.state.defiler
											? "Ne Pas Defiler automatiquement lorsqu'arrive un nouveau message"
											: "Defiler automatiquement lorsqu'arrive un nouveau message"}
									</Button>
									<Button
										style={{ marginTop: 10 }}
										onClick={this.haut.bind(this)}
									>
										Remonter tout en haut
									</Button>
									<Button
										style={{ marginTop: 10 }}
										onClick={this.bas.bind(this)}
									>
										Descendre tout en bas
									</Button>
									<Segment
										style={{
											marginTop: 10,
											backgroundColor: "white",
										}}
									>
										<div style={{ overflow: "auto", height: 470 }} id="chat1">
											{formattedMessages.map((message, i) => {
												const messageUsername = message?.user?.username;
												const me = cap(messageUsername) === cap(username);
												return (
													<div
														key={i}
														style={{
															width: "100%",
															display: "flex",
															flexDirection: "row",
															justifyContent: me ? "flex-end" : "flex-start",
														}}
													>
														<Segment
															style={{
																width: "90%",
																padding: 10,
																margin: 5,
																marginBottom: 0,
																backgroundColor: me
																	? "LimeGreen"
																	: "rgb(" +
																	  this.state.users[messageUsername]?.bgColor +
																	  "," +
																	  this.state.users[messageUsername]?.bgColor +
																	  ",255)",
																flexDirection: "column",
															}}
														>
															<div style={{}}>
																<span
																	style={{
																		color: "black",
																		marginRight: 5,
																		fontWeight: "bold",
																	}}
																>
																	-- {cap(messageUsername)} --
																</span>
																{dateToString(message.date)}
															</div>
															{message?.message
																?.split("\n")
																.map((mes, j) =>
																	mes.length > 0 ? (
																		<span key={j}>{mes}</span>
																	) : (
																		<br key={j} />
																	)
																)}
														</Segment>
														{admin && message._id ? (
															<Button
																style={{
																	backgroundColor: "rgba(198, 0, 57,1)",
																}}
																onClick={this.removeMessage.bind(
																	this,
																	message._id
																)}
															>
																X
															</Button>
														) : (
															""
														)}
													</div>
												);
											})}
										</div>

										{user_logged ? (
											<Segment style={{ flexDirection: "row" }}>
												<TextAreaV2
													s_textarea={{ flex: 1, minHeight: 50 }}
													name="message_tchat1"
													placeholder=""
													value={message_tchat1 || ""}
													onChange={this.change.bind(this)}
												/>

												<Button onClick={this.messageChat1.bind(this)}>
													Envoyer
												</Button>
											</Segment>
										) : (
											""
										)}
									</Segment>
								</div>
							) : (
								""
							)
						}
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
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		all_paques: state.paque.all,
		mamie: state.paque.controle.mamie,
		papi: state.paque.controle.papi,
		input: state.paque.controle.input,
		test_tchat: state.paque.controle.test_tchat,
		free_list: state.paque.free_list,
		username: state.paque.controle.username,
		users: state.paque.controle.users,
		message_tchat1: state.paque.controle.message_tchat1,
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
			addStatePaque: ACTIONS.Paque.add_state,
			rmPaque: ACTIONS.Paque.rm,
			getSSLPaque: ACTIONS.Paque.get_SSL,

			logInSocket: ACTIONS.Socket.logInSocket,
			reload: ACTIONS.Socket.reload,
			relog: ACTIONS.Socket.relog,
			logged: ACTIONS.Socket.logged,
			unLog: ACTIONS.Socket.unLog,
			usersLogged: ACTIONS.Socket.usersLogged,
			emitMessage: ACTIONS.Socket.emitMessage,
			receiveNewMessage: ACTIONS.Socket.receiveNewMessage,
			cleanMessages: ACTIONS.Socket.cleanMessages,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paque);

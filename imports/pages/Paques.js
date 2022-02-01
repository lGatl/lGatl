// sauvegarder la base
// todo bloquer pass
// todo bloquer empty user  &  empty mssg
const TEST = false;

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../6_actions/actions";
import { thisSocket } from "../6_actions/socket_action";

import { Img, Input, Button, Popup, Segment, TextArea } from "gat-ui-react";

import Titre1 from "../components/Titre1.js";
import Titre2 from "../components/Titre2.js";
import Titre3 from "../components/Titre3.js";
import MyName from "../components/MyName.js";
import A from "../components/A.js";
import Bandeau from "../components/Bandeau.js";

const dateToString = (mdate) => {
	const date = new Date(mdate);
	let minutes = date.getMinutes() + "";
	minutes = minutes.length < 2 ? "0" + minutes : minutes;

	return (
		date.getDate() +
		"/" +
		(date.getMonth() + 1) +
		"/" +
		date.getFullYear() +
		" " +
		date.getHours() +
		"h" +
		minutes
	);
};
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
			user_logged: null,
			defiler: true,
		};
	}
	componentDidMount() {
		let {
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
		/*thisSocket.on("connect", function () {
			logInSocket(user_logged);
		
		});*/
		thisSocket.on("disconnect", function () {
			//thisSocket.reconnect();
			getSSLPaque({}, { sort: { date: -1 } });
			cleanMessages();
			relog(true);
		});
	}
	componentDidUpdate(prevProps) {
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
	}
	bas() {
		const el = document.getElementById("chat1");
		if (el) {
			el.scrollTop = el.scrollHeight;
		}
	}
	change(e, { value, name, rating }) {
		let { controlePaque } = this.props;
		controlePaque({ [name]: value || rating });
	}
	hoverMechoui() {
		this.setState({ hoverMechoui: true });
	}
	unhoverMechoui() {
		this.setState({ hoverMechoui: false });
	}
	_addStatePaque() {
		let { input, addStatePaque } = this.props;
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
		let { username, logInSocket } = this.props;
		if(username.length>4)
		logInSocket({ username });
	}
	messageChat1() {
		let {
			message_tchat1,
			emitMessage,
			addStatePaques,
			user_logged,
			controlePaque,
		} = this.props;
		if (user_logged?.username&& message_tchat1.length>0) {
			const message = { message: message_tchat1, user: user_logged, tchat: 1 };
			emitMessage(message);
			controlePaque({ message_tchat1: "" });
		}
	}
	removeMessage(_id) {
		//console.log(_id);
		const { rmPaque } = this.props;
		rmPaque({ _id });
	}
	render() {
		let {
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
		let { admin, open, fl, hoverMechoui } = this.state;
		// console.log(messages, all_paques);
		//console.log(user_logged);

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
						pmessage.message +="\n-\n" + mes.message;
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

		return !TEST && (mamie !== "Simone" || papi !== "Maurice") ? (
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
							<Titre3 style={{ color: "black" }}>Actu </Titre3>
							<span style={{ fontSize: 14, color: "gray" }}>
								On pourra mettre ici toutes informations à relayer ( dates
								butoires, choses urgentes, infos contexte sanitaire ). N'hésitez
								pas à me transmettre les infos qui vous semblent intéressantes
								de mettre dans cet encart.
							</span>
							<br />
							<br />
							<span style={{ color: "red", fontWeight: "bold" }}>
								NE CHERCHEZ PAS LES OUTILS DE COMMUNICATION ET D'ORGANISAGTION
								POUR LE MOMENT : Comme expliqué ci-dessous, le tchat n'est pas
								encore pret, il arrivera BIENTÔT promis ! Il est actuellement en
								cours de test. Ensuite si la plus part d'entre nous donne un
								avis favorable à la démarche dans le tchat, les outils
								d'organisation suiveront.
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
							A très bientôt ici où vous trouverez le tchat pour{" "}
							<b>donner votre avis</b>. C'EST EN COURS DE CONSTRUCTION.
						</span>
						{test_tchat === "Testchat" || TEST ? (
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
						)}
						{test_tchat === "Testchat" || TEST ? (
							<div style={{ width: "100%", marginLeft: 40, marginRight: 5 }}>
								{user_logged?.username ? (
									<div style={{ marginLeft: 30, marginBottom: 10 }}>
										Salut {user_logged?.username}, tu peux maintenant participer
										à la conversation{" "}
									</div>
								) : (
									<div
										style={{
											display: "flex",
											marginBottom: 10,
											flexDirection: "column",
										}}
									>
										<span>
											Mets ton prénom ici pour participer à la conversation (au moins 4 caractères):
										</span>
										<div style={{ display: "flex", flexDirection: "row" }}>
											<Input
												style={{ flex: 1 }}
												label=""
												name="username"
												placeholder=""
												value={username || ""}
												onChange={this.change.bind(this)}
											/>
											<Button onClick={this.loginSocket.bind(this)}>
												Participer
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
											Participants :
										</span>
										{Object.values(users_logged).map((user_l, i) => (
											<span style={{ marginRight: 5 }} key={i}>
												{user_l.username},
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
								<Button style={{ marginTop: 10 }} onClick={this.bas.bind(this)}>
									Descendre tout en bas
								</Button>
								<Segment
									style={{
										marginTop: 10,
										backgroundColor: "white",
										height: 450,
									}}
								>
									<Segment style={{ flex: 1 }}>
										<div style={{ flex: 1, overflow: "auto" }} id="chat1">
											{formattedMessages.map((message, i) => {
												const me = message?.user?.username === username;

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
																	: "DeepSkyBlue",
																flexDirection: "column",
															}}
														>
															<div style={{ fontWeight: "bold" }}>
																<span
																	style={{ color: "black", marginRight: 5 }}
																>
																	-- {message?.user?.username} --
																</span>
																{dateToString(message.date)}
															</div>
															{message?.message?.split("\n").map((mes, j) => (
																<span key={j}>{mes}</span>
															))}
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
									</Segment>
									{user_logged ? (
										<Segment style={{ flexDirection: "row" }}>
											<TextArea
												style={{ flex: 1 }}
												label=""
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
						)}
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

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
				<img alt="image" src="/images/paques2022.JPG"></img>

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
									Cette année le 9 avril 2023
								</span>
							</div>
						</Titre1>
						Bonne année ! Bonne santée !
						Ca vous dit, on reprend part à l'organisation de paques ?
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
								Noubliez pas à venir indiquer votre présence.
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
								On refait un méchoui ?
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

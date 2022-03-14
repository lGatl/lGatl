import React, { Component } from "react";
import { Img, Input, Button, Popup, Segment, TextArea } from "gat-ui-react";
import TextAreaV2 from "../components/TextAreaV2.js";
import { dateToString } from "../8_libs/date";
import { cap } from "../8_libs/string";

export default class Tchat extends Component {
	render() {
		const {
			admin,
			change,
			defiler,
			all_messages,
			message_tchat1,
			username,
			user_logged,
			users,
			//fnt
			clickDefiler,
			bas,
			haut,
			removeMessage,
			messageChat1,
		} = this.props;
		let pmessage = {};
		let formatted_messages = !admin
			? all_messages.reduce((total, mes, i) => {
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
					if (i === all_messages.length - 1) {
						total.push(pmessage);
					}
					return total;
			  }, [])
			: all_messages;
		return (
			<div>
				<Button
					style={{ marginTop: 10 }}
					onClick={clickDefiler.bind(this)}
				>
					{defiler
						? "Ne Pas Defiler automatiquement lorsqu'arrive un nouveau message"
						: "Defiler automatiquement lorsqu'arrive un nouveau message"}
				</Button>
				<Button
					style={{ marginTop: 10, marginLeft: 5 }}
					onClick={haut.bind(this)}
				>
					Remonter tout en haut
				</Button>
				<Button
					style={{ marginTop: 10, marginLeft: 5 }}
					onClick={bas.bind(this)}
				>
					Descendre tout en bas
				</Button>

				<Segment
					style={{
						marginTop: 10,
						backgroundColor: "white",
					}}
				>	<div style={{ position:"relative"}}>
				<div style={{boxShadow: "inset 1px 1px 5px 1px grey", position:'absolute',top:0,left:0,height:'100%',width:'100%', pointerEvents:'none'}}></div>
					<div style={{ overflow: "auto", height: 470,padding:5}} id="chat1">
					
						{formatted_messages.map((message, i) => {
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
												  (users[messageUsername]?.bgColor
														? users[messageUsername].bgColor
														: 130) +
												  "," +
												  (users[messageUsername]?.bgColor
														? users[messageUsername].bgColor
														: 130) +
												  ",255)",
											flexDirection: "column",
										}}
									>
										<div style={{ marginBottom: 10 }}>
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
											onClick={removeMessage.bind(this, message._id)}
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
					</div>

					{user_logged ? (
						<Segment style={{ flexDirection: "row" }}>
							<TextAreaV2
								s_textarea={{ flex: 1, minHeight: 50 }}
								name="message_tchat1"
								placeholder=""
								value={message_tchat1 || ""}
								onChange={change.bind(this)}
							/>

							<Button onClick={messageChat1.bind(this)}>Envoyer</Button>
						</Segment>
					) : (
						""
					)}
				</Segment>
			</div>
		);
	}
}

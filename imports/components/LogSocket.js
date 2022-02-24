import React, {Component} from 'react'
import { InputV2 } from "../components/InputV2.js";
import {
	Img,
	Input,
	Button,
	Checkbox,
	Dropdown,
	Popup,
	Segment,
} from "gat-ui-react";
import { cap } from "../8_libs/string";

export default class LogSocket extends Component {


	render(){
		const {user_logged,username,word,change,id,loginSocket,logOut} = this.props
		return user_logged?.username ? (
						<div style={{display:"flex", alignItems:'center'}}>
								<div
									style={{
										marginLeft: 30,
										marginRight: 20,
										marginBottom: 10,
										fontWeight: "bold",
									}}
								>
							{`Salut ${cap(user_logged?.username)} ! tu peux maintenant participer
														à ${word}`}
						</div>
						<Button onClick={logOut.bind(this)}>
											Se déconnecter
										</Button>
						</div>
					) : (
						<div style={{ display: "flex" }}>
							<InputV2
								id={id}
								style={{ flex: 1, fontWeight: "bold" }}
								label={`Mets ton prénom ici (au moins 4 caractères) et clique sur "participer à ${word}" pour participer à ${word}`}
								name="username"
								placeholder=""
								value={cap(username) || ""}
								onChange={change.bind(this)}
							/>
							<Button onClick={loginSocket.bind(this)}>
								Participer <br /> à {word}
							</Button>
						</div>
					)}
		
	
}

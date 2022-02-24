import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Img, Input, Button, Popup, Segment, TextArea } from "gat-ui-react";

import { ACTIONS } from "../6_actions/actions";

class PopupMail extends Component {
	componentDidMount() {
		//Get Users Paques
		this.props.getUsersPaque();
	}
	addUsersPaque() {
		const { addUsersPaque, controleUsersPaque, mail, all_users_paque } =
			this.props;
		if (
			mail.trim().length &&
			mail.indexOf("@") > 0 &&
			all_users_paque.findIndex((aup) => aup.mail === mail.trim()) < 0
		) {
			addUsersPaque({ mail: mail.trim() });
			controleUsersPaque({ mail: "" });
		}
	}
	changeUP(e, { value, name, rating }) {
		const { controleUsersPaque } = this.props;
		controleUsersPaque({ [name]: value.toLowerCase() || rating });
	}
	rmUsersPaque(_id) {
		const { rmUsersPaque, mail } = this.props;
		rmUsersPaque({ _id });
	}
	// todo limit height
	render() {
		return (
			<Popup style={{ flexDirection: "column", padding: 10 }} open={true}>
				<div>
					Ajoutez votre adresse mail à cette liste si vous souhaitez <br />{" "}
					recevoir un mail lorsque quelqu'un poste un nouveau message :
				</div>
				<div style={{ flex: 1, display: "flex", flexDirection: "row", flexWrap:'wrap' }}>
					<div
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							margin: 5,
						}}
					>
						<Input
							style={{}}
							label=""
							name="mail"
							placeholder=""
							value={this.props.mail || ""}
							onChange={this.changeUP.bind(this)}
						/>
						<Button onClick={this.addUsersPaque.bind(this)}>
							Ajouter mon adresse
						</Button>
					</div>
					<div style={{ flex: 2 }}>
						<div style={{ overflow: "auto", height: 300, margin: 5 }}>
							{this.props.all_users_paque.map((aup, i) => (
								<div key={i}>
									{aup.mail}
									{this.props.admin ? (
										<Button
											style={{
												backgroundColor: "rgba(198, 0, 57,1)",
											}}
											onClick={this.rmUsersPaque.bind(this, aup._id)}
										>
											X
										</Button>
									) : (
										""
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				<Button onClick={this.props.close.bind(this)}>Fermer</Button>
			</Popup>
		);
	}
}

function mapStateToProps(state) {
	return {
		// UsersPaques
		mail: state.userspaque.controle.mail,
		all_users_paque: state.userspaque.all,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			//usersMail
			controleUsersPaque: ACTIONS.UsersPaque.controle,
			addUsersPaque: ACTIONS.UsersPaque.add_state,
			rmUsersPaque: ACTIONS.UsersPaque.rm_state,
			getUsersPaque: ACTIONS.UsersPaque.get_state,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupMail);

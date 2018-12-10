import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../../6_actions/actions";

import { Input, TextArea, Button, Checkbox, Segment } from "../../_common/4_dumbComponent/_gat_ui_react";

import { debounce } from "../../8_libs/debounce";



class FormulaireDInscription extends Component {
//Initialisation
	constructor(){
		super();
	}
	init(){
		return {
			email: "",
			password: "",
			surname: "",
			firstname: "",
			agreement:false,
		};
	}
	
	componentWillMount(){
		this.props.titrePage("Inscription");

		this.props.usersControle(this.init());
	}
	//Controle
	change(e,{ value, name, checked }){
		checked?this.props.usersControle({ [name]:checked }):this.props.usersControle({ [name]:value });
	}
	//Action
	usersCreeCompte(){
		let {email,password,surname,firstname,agreement} = this.props.controle;
		this.props.usersCreeCompte({
			email,
			username:email,
			password,
			profile:{
				surname,
				firstname,
				agreement
			}
		}, ()=>{
			this.props.getActiveUser()
			this.props.usersControle(this.init());
			FlowRouter.go("/");
		});
		
	}
	
	//Preparation du rendu
	render() {
		let {email,password,surname,firstname, agreement} = this.props.controle;

		return (

				<form style={{flex:2}}>

					<Input
						label = "E mail"
						name = "email"
						value = { email || "" }
						onChange = { this.change.bind( this ) } 
					/>
					<Input
						label = "Password"
						name = "password"
						type = "password"
						autoComplete=""
						value = { password || "" }
						onChange = { this.change.bind( this ) }
					/>
					<Input
						label = "Surname"
						name = "surname"
						value = { surname || "" }
						onChange = { this.change.bind( this ) } 
					/>
					<Input
						label = "Firstname"
						name = "firstname"
						value = { firstname || "" }
						onChange = { this.change.bind( this ) }
					/>
					<Checkbox
						label = "Agreement"
						name = "agreement"
						checked = {agreement||""}
						onChange = { this.change.bind( this ) }
					/>

					<Button
						onClick = { this.usersCreeCompte.bind( this ) }
					>
					Create
					</Button>
				</form>
		);
	}
}

function mapStateToProps( state ){
	return (
		{

			controle: state.users.controle
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		titrePage: ACTIONS.Titre.titrePage,
		usersControle: ACTIONS.Users.controle,
		usersCreeCompte: ACTIONS.Users.creeCompte,
		getActiveUser: ACTIONS.Users.getActiveUser
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormulaireDInscription );



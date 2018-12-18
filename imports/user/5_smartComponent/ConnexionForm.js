import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } from "react-redux";

import { ACTIONS } from "../../6_actions/actions";

import { Input, TextArea, Button } from "gat-ui-react";

class FormulaireConnexion extends Component {
	//Initialisation

	init(){
		return { 
			email: "",
			password: ""
		};
	}
	componentWillMount(){
		this.props.titrePage("Connexion");
		this.props.usersControle(this.init());
	}
	//Controle
	change(e,{ value, name }){

		this.props.usersControle({ [name]:value });
	}
	//Action
	usersLogIn(){
		let {email, password} = this.props.users_controle;
		this.props.usersLogIn( email, password, ()=>{
			this.props.usersGetActiveUser();
			this.props.usersControle(this.init());
		} );
		
		
	}
	//Preparation du rendu
	
	render() {
		let {email, password} = this.props.users_controle;

		return (
			
			<form style={{flex:1}}>
				<Input
					label = 'E mail'
					name = 'email'
					value = { email||"" }
					onChange = { this.change.bind( this ) } 
				/>
				<Input
					label = 'Mot de passe'
					name = 'password'
					value = { password||"" }
					onChange = { this.change.bind( this ) }
				/>
				<Button
					onClick = { this.usersLogIn.bind( this ) }
				>
				Se Connecter
				</Button>
			</form>
		);
	}
}

function mapStateToProps( state ){
	return (
		{
			users_controle: state.users.controle,
			active_user: state.users.active_user
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		titrePage: ACTIONS.Titre.titrePage,
		usersControle: 	ACTIONS.Users.controle,
		usersLogIn: 		ACTIONS.Users.logIn,
		usersGetActiveUser:	ACTIONS.Users.getActiveUser,
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormulaireConnexion );

import React, {Component} from "react";

import { bindActionCreators }	from 'redux';
import { connect } from 'react-redux';

import { ACTIONS } from "../../6_actions/actions";

import { Segment, Button } from "gat-ui-react";

import ConnexionForm from "../../user/5_smartComponent/ConnexionForm";
import InscriptionForm from "../../user/5_smartComponent/InscriptionForm";
import ShortMenu from '../../containers/ShortMenu.js';


class Login extends Component {
//initialisation
	constructor(){
		super();
		this.state = {
			cree:true
		};
	}
	controleConnexionMenu(str){
		this.props.setControle({short_connexion_menu:str})
	}
	controleMenu(str){
		this.props.setControle({short_connexion_menu:str})
	}
	componentWillMount(){
		this.props.setControle({
			generalMenu:'chain-meteor-react-redux',
			short_connexion_menu:"Creer un compte",
		})

	}

	//action
	cree(val){
		this.setState({cree:val});
	}

	//preparation rendu
	aAfficher(){
		return this.props.short_connexion_menu=="Connexion" ? <ConnexionForm/>: <InscriptionForm/> ;
	}
	logout(){
		this.props.logOut()
	}
	deleteAccount(_id){
		this.props.usersRm({_id})
		this.props.logOut()
		Bert.alert({
				title:"Account Deleted",
				message:"Your Account is deleted" ,
				type:'info',
				icon:"fa-info"
			})
	}
	render(){
		let {active_user} = this.props;
		
		return (
			<div style = {{display:"flex",flex:1, justifyContent:"center",flexDirection:"column"}}>
				{
					active_user?
						<div style = {{display:"flex",flex:1, justifyContent:"center",flexDirection:"column"}}>
							Hello {active_user&&active_user.profile&&active_user.profile.firstname?" "+active_user.profile.firstname:"unknown"}
							{active_user&&active_user.profile&&active_user.profile.surname?" "+active_user.profile.surname+" ":" unknown "}
							your are connected with the email address 
							{active_user&&active_user.emails&&active_user.emails[0]&&active_user.emails[0].address?" "+active_user.emails[0].address:" unknown"}
							<Button onClick={this.logout.bind(this)}>Log Out</Button>
							<br/>
							<Button style={{backgroundColor:"red", color:'white', fontWeight:"bold"}} onClick={this.deleteAccount.bind(this,active_user._id)}>Delete My Account</Button>
						</div>
						:
						<div style = {{display:"flex",flex:1, justifyContent:"center",flexDirection:"column"}}>
							<ShortMenu 
								style = {{backgroundColor:"rgba(240,100,100,1)", color:"white"}}
								items={["Creer un compte","Connexion"]} 
								controle={this.controleConnexionMenu.bind(this)} 
								active={this.props.short_connexion_menu}
							/>	
							{this.aAfficher()}	
						</div>
				}
				
			</div>
		);
	}
}

function mapStateToProps(state){
	return (
		{
			short_connexion_menu:state.controle.short_connexion_menu,
			active_user:state.users.active_user
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set,
		logOut: ACTIONS.Users.logOut,
		usersRm: ACTIONS.Users.rm
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );



import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import { Button, Form, Input, TextArea } from 'gat-ui-react'
import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'

class Contact extends Component {

	constructor(){
		super()
		this.state={
			prenom:"",
			nom:"",
			mail:"",
			sujet:"",
			message:""
		}
	}
	componentWillMount(){
		this.props.setControle({generalMenu:'Contact'})
	}
	change(e){
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	};
	envoie(e){
		let message =
		"<p>" +
		this.state.nom + " " +
		this.state.prenom +"</p>"
		 + "<p>" +
		 this.state.mail +"</p>"
		  +"<p>" +
		 this.state.message+"</p>"

		// Client: Asynchronously send an email.
		if(this.state.nom&&this.state.prenom&&this.state.mail&&this.state.sujet&&this.state.message){
			Bert.alert({
				title:"Envoie du courriel.",
				message:"L'envoie du courriel est en cours." ,
				type:'info',
				icon:"fa-info"
			})
			Meteor.call(
				'sendEmail',
				'adrien.gatinois@lgatl.fr',
				"admin@lgatl.fr",
				this.state.sujet,
				message,(err,res)=>{
					if(err){
							console.log(err)
					}else{
						Bert.alert({
							title:"courriel Envoyé",
							message:"Votre courriel "+this.state.sujet+" à été envoyé." ,
							type:'success'
						})
					}
				}
			);
			this.setState({
			prenom:"",
			nom:"",
			mail:"",
			sujet:"",
			message:""
		})
		}else{
			Bert.alert({
				title:"Formulaire Incomplet.",
				message:"Pour pouvoir envoyer le courriel, remplissez tous les champs." ,
				type:'info',
				icon:"fa-info"
			})

		}
	}

	render(){
		return(
			<section style={{display:"flex", flexDirection:"Column"}}>
				<Titre1>Contact</Titre1>
				<div style={{display:"flex", flex:1,justifyContent:"center"}}>
					<div style={{maxWidth:1000,flex:1}}>
						<Titre2>Formulaire</Titre2>
							<Form id="contact">

									<Input
											label="Nom"
											name="nom"
											placeholder='Nom'
											onChange={this.change.bind(this)}
											value={this.state.nom}
									/>
									<Input
											label="Prénom"
											name="prenom"
											placeholder='Prénom'
											onChange={this.change.bind(this)}
											value={this.state.prenom}
									/>
									<Input
											label="Email"
											name="mail"
											placeholder='exemple@exemple.com'
											onChange={this.change.bind(this)}
											value={this.state.mail}
									/>
									<TextArea
											name='sujet'
											label='Objet de votre message'
											placeholder='Objet de votre message'
											rows='1'
											onChange={this.change.bind(this)}
											value={this.state.sujet}
									/>
									<TextArea
											name='message'
											label='Votre message'
											placeholder='Votre message'
											rows='3'
											onChange={this.change.bind(this)}
											value={this.state.message}
									/>
									<Button type='buton' onClick={this.envoie.bind(this)}
									>Envoyer</Button>
							</Form>
						</div>	
					</div>
			</section>


			)
	}
}
//VOIR ROWS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function mapStateToProps(state){
	return (
		{
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Contact );

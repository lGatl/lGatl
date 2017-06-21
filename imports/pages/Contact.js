import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'

export default class Contact extends Component {

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

	change(e){
		e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
	};
	envoie(e){
		message=
		"<p>" +
		this.state.nom + " " +
		this.state.prenom +"</p>"
		 + "<p>" +
		 this.state.mail +"</p>"
		  +"<p>" +
		 this.state.message+"</p>"

		e.preventDefault()
		// Client: Asynchronously send an email.
		if(this.state.nom&&this.state.prenom&&this.state.mail&&this.state.sujet&&this.state.message){
			Meteor.call(
				'sendEmail',
				'gat55@live.fr',
				'monsite@admin.lgatl.com',
				this.state.sujet,
				message,(err,res)=>{
					if(err){

					}else{
						Bert.alert({
							title:"courriel Envoyé",
							message:"Votre mail "+this.state.sujet+" à été envoyé." ,
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
		}
	}

	render(){
		return(

			 <Form id="contact">
				<br/>
				<Titre2>FORMULAIRE DE CONTACT</Titre2>
				<br/>
					<Form.Input
							label="Nom"
							name="nom"
							placeholder='Nom'
							onChange={this.change.bind(this)}
							value={this.state.nom}
					/>
					<Form.Input
							label="Prénom"
							name="prenom"
							placeholder='Prénom'
							onChange={this.change.bind(this)}
							value={this.state.prenom}
					/>
					<Form.Input
							label="Email"
							name="mail"
							placeholder='exemple@exemple.com'
							onChange={this.change.bind(this)}
							value={this.state.mail}
					/>
					<Form.TextArea
							name='sujet'
							label='Objet de votre message'
							placeholder='Objet de votre message'
							rows='1'
							onChange={this.change.bind(this)}
							value={this.state.sujet}
					/>
					<Form.TextArea
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
			)
	}
}



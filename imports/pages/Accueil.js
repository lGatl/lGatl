import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'
import MyName from '../components/MyName.js'
import A from '../components/A.js'


import PropTypes from 'prop-types';

class Accuei extends Component {
	style(){

	}
	contact(){
		FlowRouter.go("/Contact")
	}
	experiences(){
		FlowRouter.go("/Experiences")
	}
	formations(){
		FlowRouter.go("/Formations")
	}
	travaux(){
		FlowRouter.go("/Travaux")
	}
	cv(){
		FlowRouter.go("/Cv")
	}

	render(){
		return (
			<section style={{display:"flex", flexDirection:"Column"}}>
				<Titre1>Accueil</Titre1>
				<div style={{display:"flex", flex:1,justifyContent:"center"}}>
					<div style={{maxWidth:1000, flex:1}}>
							<Titre2>Développeur Web</Titre2>
							<br/>
							<Titre3>Bonjour et bienvenue !</Titre3><br/>
							<div style={{textAlign:"justify",
								backgroundColor:'rgba(24,180,204,0.1)',
								borderRadius:("15px 15px 15px 15px"),
								padding:20,
								margin:20,}}>

							 	Je suis Développeur FullStack spécialisé Front-End et je lance mon entreprise de développement. <br/>
							 	Très pédagogue et formé formateur par Coopetic, je me présente aussi en tant que consultant formateur en développement web. <br/><br/>
							 	Cette application web est principalement une démonstration de mes aptitudes, elle utilise le HTML5, le CSS3, le JavaScript (ecmascript 6), Node Js, React Js, et une base de données (MongoDB).
								J'attire votre attention sur la capacité qu'a ce site à s'adapter à tous types d'écrans (responsive). <br/>
								Vous trouverez sur ce site internet, le détail de mes <A onClick={this.travaux.bind(this)}>travaux</A>, 
								<A onClick={this.formations.bind(this)}>formations </A>et <A onClick={this.experiences.bind(this)}>expériences </A> dans le domaine de la programmation,
								 ainsi que mon <A onClick={this.cv.bind(this)}>cv </A> et le moyen de me <A onClick={this.contact.bind(this)}>contacter</A>. <br/>
							 					 	Si vous avez besoin d'un site internet, d'une formation, d'un soutien en développement web, d'autres services dans le domaine de la communication,
							 	 ou même simplement d'informations pour votre projet ou toutes autres questions,
							 	 n'hésitez pas à me <A
							 	 		onClick={this.contact.bind(this)}>contacter</A>, je vous répondrai rapidement. <br/>

							Merci et bonne visite! <br/>
							<br/>
							<MyName/>
						</div>
					</div>	
				</div>	
			</section>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:"salut"}

 } , Accuei );


import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import {Segment} from 'semantic-ui-react'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'

import PropTypes from 'prop-types';

class Accuei extends Component {

	contact(){
		FlowRouter.go("/Contact")
	}
	experiences(){
		FlowRouter.go("/Experiences")
	}
	formations(){
		FlowRouter.go("/Formations")
	}
	cv(){
		FlowRouter.go("/Cv")
	}
	render(){
		return (
			<div>
				<Titre2>Bonjour et bienvenue!</Titre2>
				<br/>
				<Segment>
				 	Je suis Développeur Web spécialisé Back-End et je lance mon entreprise de développement. <br/>
				 	Je suis aussi adhérant chez Coopetic, ce qui me donne entre autres accès à de nombreuses competences dans le domaine de la communication,
				 	me permettant de me presenter entant qu'expert en communication chez Coopetic. <br/>
				 	Trés pédagogue et formé formateur par Coopetic, je me presente aussi entant que formateur en developpement web. <br/><br/>
				 	Cette application web est principalement une démonstration de mes aptitudes, elle utilise le HTML5, le CSS3, le JavaScript (ecmascript 6), Node Js, React Js, et une base de donnée (MongoDB).
					J'attire votre attention sur la capacité qu'a ce site à s'adapter à tous types d'écrans (responsive). <br/>
					Vous trouverez sur ce site internet, le detail de mes <span className="contacc"
				 	 		onClick={this.experiences.bind(this)}>experiences </span>et <span className="contacc"
				 	 		onClick={this.formations.bind(this)}>formations </span> dans le domaine de la programmation,
					 ainsi que mon <span className="contacc" onClick={this.cv.bind(this)}>cv </span> et le moyen de me <span className="contacc" onClick={this.contact.bind(this)}>contacter </span>. <br/>
				 					 	Si vous avez besoin d'un site internet, d'une formation, d'un soutient en developpement web, d'autres services dans le domaine de la communication,
				 	 ou meme simplement d'informations pour votre projet ou toutes autres questions,
				 	 n'hesitez pas à me <span className="contacc"
				 	 		onClick={this.contact.bind(this)}>contacter </span>, je vous repondrai rapidement. <br/>

				Merci et bonne visite! <br/>
				<br/>
			<Titre3 style={{textAlign:"center"}}>Adrien GATINOIS</Titre3>
			</Segment>

	</div>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:"salut"}

 } , Accuei );


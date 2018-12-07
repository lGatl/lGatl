import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'
import MyName from '../components/MyName.js'


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
					<div style={{maxWidth:800, flex:1}}>
							<Titre2>Développeur Web</Titre2>
							<br/>
							<Titre3>Bonjour et bienvenue !</Titre3><br/>
							<div className="segmen">
							<div style={{textAlign:"justify"}}>

							 	Je suis Développeur FullStack spécialisé Front-End et je lance mon entreprise de développement. <br/>
							 	Très pédagogue et formé formateur par Coopetic, je me présente aussi en tant que consultant formateur en développement web. <br/><br/>
							 	Cette application web est principalement une démonstration de mes aptitudes, elle utilise le HTML5, le CSS3, le JavaScript (ecmascript 6), Node Js, React Js, et une base de données (MongoDB).
								J'attire votre attention sur la capacité qu'a ce site à s'adapter à tous types d'écrans (responsive). <br/>
								Vous trouverez sur ce site internet, le détail de mes <span className="contacc"
							 	 		onClick={this.travaux.bind(this)}>travaux</span>, <span className="contacc"
							 	 		onClick={this.formations.bind(this)}>formations </span>et <span className="contacc"
							 	 		onClick={this.experiences.bind(this)}>expériences </span> dans le domaine de la programmation,
								 ainsi que mon <span className="contacc" onClick={this.cv.bind(this)}>cv </span> et le moyen de me <span className="contacc" onClick={this.contact.bind(this)}>contacter</span>. <br/>
							 					 	Si vous avez besoin d'un site internet, d'une formation, d'un soutien en développement web, d'autres services dans le domaine de la communication,
							 	 ou même simplement d'informations pour votre projet ou toutes autres questions,
							 	 n'hésitez pas à me <span className="contacc"
							 	 		onClick={this.contact.bind(this)}>contacter</span>, je vous répondrai rapidement. <br/>

							Merci et bonne visite! <br/>
							<br/>
							<MyName/>
						</div>
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


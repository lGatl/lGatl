import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import {Container,Grid} from 'semantic-ui-react'
import Titre1 from '../components/Titre1.js'
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
	travaux(){
		FlowRouter.go("/Travaux")
	}
	cv(){
		FlowRouter.go("/Cv")
	}

	render(){
		return (
			<div>
				<Titre1>Accueil</Titre1>
				<Grid>
					<Grid.Row>
						<Grid.Column				tablet={2} 	  computer={3} only='tablet computer'></Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
							<Titre2>Bonjour et bienvenue !</Titre2>
							<br/>
							<Container textAlign="justified">
							 	Je suis Développeur Web spécialisé Back-End et je lance mon entreprise de développement. <br/>
							 	Je suis aussi adhérent chez Coopetic, ce qui me donne entre autres accès à de nombreuses compétences dans le domaine de la communication,
							 	me permettant de me présenter en tant qu'expert en communication chez Coopetic. <br/>
							 	Très pédagogue et formé formateur par Coopetic, je me presente aussi en tant que formateur en développement web. <br/><br/>
							 	Cette application web est principalement une démonstration de mes aptitudes, elle utilise le HTML5, le CSS3, le JavaScript (ecmascript 6), Node Js, React Js, et une base de données (MongoDB).
								J'attire votre attention sur la capacité qu'a ce site à s'adapter à tous types d'écrans (responsive). <br/>
								Vous trouverez sur ce site internet, le détail de mes <span className="contacc"
							 	 		onClick={this.travaux.bind(this)}>travaux </span>, <span className="contacc"
							 	 		onClick={this.formations.bind(this)}>formations </span>et <span className="contacc"
							 	 		onClick={this.experiences.bind(this)}>experiences </span> dans le domaine de la programmation,
								 ainsi que mon <span className="contacc" onClick={this.cv.bind(this)}>cv </span> et le moyen de me <span className="contacc" onClick={this.contact.bind(this)}>contacter </span>. <br/>
							 					 	Si vous avez besoin d'un site internet, d'une formation, d'un soutien en développement web, d'autres services dans le domaine de la communication,
							 	 ou même simplement d'informations pour votre projet ou toutes autres questions,
							 	 n'hesitez pas à me <span className="contacc"
							 	 		onClick={this.contact.bind(this)}>contacter </span>, je vous repondrai rapidement. <br/>

							Merci et bonne visite! <br/>
							<br/>
						<Titre3 style={{textAlign:"right"}}>Adrien GATINOIS</Titre3>
						</Container>
						</Grid.Column>
						<Grid.Column 				tablet={2}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

 export default Accueil = createContainer( ()=>{

 	return{
 		prenom:"salut"}

 } , Accuei );


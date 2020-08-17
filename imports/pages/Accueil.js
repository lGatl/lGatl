import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'
import MyName from '../components/MyName.js'
import A from '../components/A.js'

class Accueil extends Component {
	componentWillMount(){
		this.props.setControle({generalMenu:'Accueil'})
	}
	
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
							<Titre2>Architecte React/Redux, Développeur web full stack</Titre2>
							<br/>
							<Titre3>Bonjour et bienvenue !</Titre3>
							<div style={{textAlign:"justify",
								backgroundColor:'rgba(24,180,204,0.1)',
								borderRadius:("15px 15px 15px 15px"),
								padding:20,
								margin:20,}}>

							 	Suite à une réorientation professionnelle, j'ai suivi une formation intensive fullstack js. L'expérience que j'ai acquis, m'a permis de me spécialiser dans l'architecture React Redux.<br/><br/>
								Je suis prêt pour conseiller, coder, ou orchestrer l'architecture d'une application from scratch de manière à coller au plus prêt du projet du client. 
								L'architecture sera orientée en fonction des besoins et des performances de l'application.
								Consciencieux et pédagogue, je met un point d'honneur à revenir vers le client lorsqu'une amélioration non demandée est possible ou lorsque je distingue des incohérences dans le travail demandé.
								Le but étant non pas de simplement réaliser ce que le client me demande, mais d'ouvrir sa visibilité sur le champ des possibles afin de coller au plus prêt de ses besoins.
								<br/><br/>Toujours partant pour conseiller au niveau de la conception.
								<br/><br/>Toujours prêt à compléter mes connaissances pour pouvoir m'occuper d'un projet dans sa globalité.
								 <br/><br/>
							 	Cette application web est une démonstration de mes aptitudes, elle utilise le HTML5, le CSS3, le JavaScript (ecmascript 6), Node Js, React Js, et une base de données (MongoDB).
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

export default connect( mapStateToProps, mapDispatchToProps )( Accueil );

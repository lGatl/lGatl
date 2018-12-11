import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import Titre1 from '../components/Titre1'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import TravailDetail from '../components/TravailDetail.js';

import PropTypes from 'prop-types';

class Experience extends Component {
	
	constructor(){
		super()
		this.state={
			larticle:{},
			loading:true
		}
	}

	style(){ 
			
		
	}
	componentWillMount(){
		this.props.setControle({generalMenu:'Expériences'})
		this.props.getArticle({nom:"ProjetSel"},(article)=>{

			this.setState({larticle:article})
			this.setState({loading:false})
			
		})

	}
	afficher(){
		return(
			<TravailDetail article={this.state.larticle}></TravailDetail>
		)
	}
	render(){
		var resultat = Object.keys(this.state.larticle).length>0 ? this.afficher() : <h1>Pas de data</h1>
		return (
			<div style={{display:"flex",flexDirection:"column"}}>
				<Titre1>Expériences</Titre1>
					<div style={{display:"flex", flex:1,justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
						<div style={{maxWidth:1000, flex:1}}>	
							<Titre2>Projet tutoré WebOgreen</Titre2>
							<div style={{...this.style(),margin:0,padding:0}}>
							{resultat}
							</div>	
					</div>	
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return (
		{
			articles:state.article.all
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		getArticle: ACTIONS.Article.get1,
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Experience );


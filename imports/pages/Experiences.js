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
		this.props.getStateArticles({$or:[{nom:"ProjetSel"},{nom:"Simplonline"},{nom:"Myqualityboard"}]},"experiences",(articles)=>{
			// this.setState({loading:false})	
		})

	}
	render(){
			let { experiences } = this.props;
			let articles = experiences?[...experiences].reverse():[]
		return (
			<div style={{display:"flex",flexDirection:"column"}}>
				<Titre1>Expériences</Titre1>
					<div style={{display:"flex", flex:1,justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
						
							{
								articles&&articles.length>0?articles.map((exp,i)=><div key={i} style={{maxWidth:1000, flex:1}}>	
									<Titre2>{exp.titre}</Titre2>
									<TravailDetail article={exp}/>
									</div>
								):""
							}
						
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return (
		{
			experiences:state.article.experiences
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		getStateArticles: ACTIONS.Article.get_state,
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Experience );


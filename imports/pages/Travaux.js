import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

 import SmartMenuTravaux from '../containers/SmartMenuTravaux.js'
  import TravailDetail from '../components/TravailDetail.js'

import SystemGrid from '../components/SystemGrid.js'
import Mosaiq from '../components/Mosaiq.js'

import Titre1 from '../components/Titre1'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import PropTypes from 'prop-types';

class Travaux extends Component {
	constructor(){
		super()
		this.state={
			loading:true
		}
	}
	componentWillMount(){
		this.props.setControle({generalMenu:'Travaux'})
		this.props.getArticles()
		
	}


	mosqoudet(hf,fo,vb){
		if(this.props.titre){
			this.props.setControle({travauxMenu:this.props.titre})
			var nom= this.props.titre
			var tarticles=hf.concat(fo).concat(vb)
			var larticle=tarticles.find((article)=>{return article.nom==nom})
			if(larticle.categorie=="HorsFormation"){
				var categorie=<Titre2>Langage du net</Titre2>
				var categorie2=<Titre3>Hors Formation</Titre3>
			}else if(larticle.categorie=="DansFormation"){
				var categorie=<Titre2>Langage du net</Titre2>
				var categorie2=<Titre3>Dans le cadre de la formation Simplon</Titre3>
			}else if(larticle.categorie=="VBA"){
				var categorie=<Titre2>VBA Excel</Titre2>
				var categorie2=""
			}

			return <section>
				{categorie}<br/>
				{categorie2}
				<TravailDetail tr article={larticle}></TravailDetail>
			</section>

		}else{ return <Mosaiq hf={hf} fo={fo} vb={vb}></Mosaiq> }

	}
	afficher(hf,fo,vb){

		return(
					<div style={{display:"flex"}}>
						<div style={{flex:this.props.mobile?0:1}}>
							<SmartMenuTravaux titre={this.props.titre} hf={hf} fo={fo} vb={vb}></SmartMenuTravaux>
						</div>
						<div style={{flex:5}}>
						{this.mosqoudet(hf,fo,vb)}
						</div>
						<div style={{flex:this.props.mobile?0:1}}></div>
				</div>
		);

	}
	render(){
		var hf=[]
		var fo=[]
		var vb=[]

		if(this.props.articles){
			this.props.articles.forEach((article)=>{
			if(article.categorie=="VBA"){vb.push(article)}
			if(article.categorie=="DansFormation"){fo.push(article)}
			if(article.categorie=="HorsFormation"){hf.push(article)}
		})
		}
			var resultat = this.props.articles&&this.props.articles.length>0 ? this.afficher(hf,fo,vb) : <h1>Pas de data</h1>

		return(
			<div style={{display:"flex",flexDirection:"column"}}>
			<Titre1>Travaux</Titre1>
				<div style={{margin:0,padding:0}}>{resultat}</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return (
		{
			mobile:state.controle.resize.windowwidth<600,
			articles:state.article.all
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		getArticles: ACTIONS.Article.get,
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Travaux );

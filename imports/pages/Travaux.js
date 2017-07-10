import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import {menu} from '../API/menu.js'
import {articles} from '../API/articles.js'
 import { Grid,Segment } from 'semantic-ui-react'
 import MenuTravaux from '../components/MenuTravaux.js'
  import TravailDetail from '../components/TravailDetail.js'


import SystemGrid from '../components/SystemGrid.js'
import Mosaiq from '../components/Mosaiq.js'

import Titre1 from '../components/Titre1'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import PropTypes from 'prop-types';

class Travau extends Component {
	constructor(){
		super()
		this.state={
			loading:true
		}
	}
	componentWillMount(){
		if(this.props.articles.liste.length>0){
			this.setState({loading:false})

		}else{
			
			this.props.articles.recup(()=>{
				this.setState({loading:false})
			})
		}
		
	}


	mosqoudet(hf,fo,vb){
		if(this.props.titre){

			var nom= this.props.titre
			tarticles=hf.concat(fo).concat(vb)
			var larticle=tarticles.find((article)=>{return article.nom==nom})
			if(larticle.categorie=="HorsFormation"){
				var categorie=<Titre2>Language du net</Titre2>
				var categorie2=<Titre3>Hors Formation</Titre3>
			}else if(larticle.categorie=="DansFormation"){
				var categorie=<Titre2>Language du net</Titre2>
				var categorie2=<Titre3>Dans le cadre de la formation Simplon</Titre3>
			}else if(larticle.categorie=="VBA"){
				var categorie=<Titre2>VBA Excel</Titre2>
				var categorie2=""
			}

			return(
				<section>
				{categorie}<br/>
				{categorie2}
					<TravailDetail tr article={larticle}></TravailDetail>
				</section>
					
				)
		}else{

			return(
				
				<Mosaiq hf={hf} fo={fo} vb={vb}></Mosaiq>
				
				)

		}

	}
	afficher(hf,fo,vb){

		return(
				<Grid>

					<Grid.Row>
						<Grid.Column				tablet={3} 	  computer={3} only='tablet computer'>
							<MenuTravaux titre={this.props.titre} hf={hf} fo={fo} vb={vb}></MenuTravaux>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
						{this.mosqoudet(hf,fo,vb)}

						</Grid.Column>
						<Grid.Column 				tablet={1}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>
		);

	}
	render(){
		var hf=[]
		var fo=[]
		var vb=[]
		this.props.articles.liste.map((article)=>{
			if(article.categorie=="VBA"){vb.push(article)}
			if(article.categorie=="DansFormation"){fo.push(article)}
			if(article.categorie=="HorsFormation"){hf.push(article)}
		})



			var resultat = this.props.articles.liste.length > 0 ? this.afficher(hf,fo,vb) : <h1>Pas de data</h1>
		return(
			<div>
			<Titre1>Travaux</Titre1>
			
				<Segment basic loading={this.state.loading} style={{margin:0,padding:0}}>{resultat}</Segment>
			</div>
			)

	}
}
 export default Travaux= createContainer( ()=>{

 	return{
		articles:{
			recup:articles.recup,
			liste:articles.liste.get()
		}

	}

 } , Travau );

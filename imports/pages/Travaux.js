import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import {menu} from '../API/menu.js'
import {articles} from '../API/articles.js'
 import { Grid,Segment } from 'semantic-ui-react'
 import MenuTravaux from '../components/MenuTravaux.js'
  import TravailDetail from '../components/TravailDetail.js'


import SystemGrid from '../components/SystemGrid.js'
import Mosaiq from '../components/Mosaiq.js'

import PropTypes from 'prop-types';

class Travau extends Component {
	constructor(){
		super()
		this.state={
			hf:[],
			fo:[],
			vb:[],
			tr:true
		}
	}
	componentWillMount(){
		if(this.props.articles.liste.length>0){
			this.prepState()
		}else{
			this.props.articles.recup(()=>{
				this.prepState()
			})
		}
	}
	prepState(){
		var hf=[]
		var fo=[]
		var vb=[]
		this.props.articles.liste.map((article)=>{
			if(article.categorie=="VBA"){vb.push(article)}
			if(article.categorie=="DansFormation"){fo.push(article)}
			if(article.categorie=="HorsFormation"){hf.push(article)}
		})
		this.setState({hf:hf})
		this.setState({fo:fo})
		this.setState({vb:vb})
	}
	checkAdult(age) {
    	return age >= 18;
	}
	mosqoudet(){
		if(this.props.titre){

			var nom= this.props.titre
			tarticles=this.state.hf.concat(this.state.fo).concat(this.state.vb)
			var larticle=tarticles.find((article)=>{return article.nom==nom})

			return(
					<TravailDetail tr article={larticle}></TravailDetail>
				)
		}else{

			return(
				<Mosaiq hf={this.state.hf} fo={this.state.fo} vb={this.state.vb}></Mosaiq>
				)

		}

	}
	afficher(){
		if(this.props.articles.liste.length>0){
		return(
				<Grid>
					<Grid.Row>
						<Grid.Column				tablet={3} 	  computer={3} only='tablet computer'>
							<MenuTravaux titre={this.props.titre} hf={this.state.hf} fo={this.state.fo} vb={this.state.vb}></MenuTravaux>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
						{this.mosqoudet()}

						</Grid.Column>
						<Grid.Column 				tablet={1}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>
		);
		}
	}
	render(){
		return(
	<div>{this.afficher()}</div>
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

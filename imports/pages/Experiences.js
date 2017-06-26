import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import { Table,Grid } from 'semantic-ui-react'
import Titre1 from '../components/Titre1'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import {Segment} from 'semantic-ui-react'


import {articles} from '../API/articles.js'
import TravailDetail from '../components/TravailDetail.js';

import PropTypes from 'prop-types';

class Experienc extends Component {
	constructor(){
		super()
		this.state={
			larticle:{},
			loading:true
		}
	}
	componentWillMount(){
		this.props.articles.recup1("ProjetSel",(article)=>{

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
			<div>
				<Titre1>Experiences</Titre1>
				<Grid>
					<Grid.Row>
						<Grid.Column				tablet={2} 	  computer={3} only='tablet computer'></Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
							<Titre2>Projet tutoré WebOgreen</Titre2>
							<Segment basic loading={this.state.loading} style={{margin:0,padding:0}}>
							{resultat}
							</Segment>
						</Grid.Column>
						<Grid.Column 				tablet={2}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
 export default Experience= createContainer( ()=>{

 	return{
		articles:{
			recup1:articles.recup1
		}
	}

 } , Experienc );

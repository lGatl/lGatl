import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import { Table } from 'semantic-ui-react'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import {articles} from '../API/articles.js'
import TravailDetail from '../components/TravailDetail.js';

import PropTypes from 'prop-types';

class Experienc extends Component {
	constructor(){
		super()
		this.state={
			larticle:{}
		}
	}
	componentWillMount(){
		this.props.articles.recup1("ProjetSel",(article)=>{

			this.setState({larticle:article})
		})
	}
	render(){

		return (
			<div>
				<Titre2>Projet tutoré WeboGreen</Titre2>
				<TravailDetail article={this.state.larticle}></TravailDetail>
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

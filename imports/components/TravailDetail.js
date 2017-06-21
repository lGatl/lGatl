import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import {Segment,Image,Button} from 'semantic-ui-react'
 import MenuTravaux from '../components/MenuTravaux.js'
import Titre4 from './Titre4.js'
import Titre3 from './Titre3.js'

import PropTypes from 'prop-types';


export default class TravailDetail extends Component {

	clic1(){
		FlowRouter.go("/Travaux/")
	}

	retour(){
		if(this.props.tr){
			return(
			<Button onClick={this.clic1.bind(this)}>Retour</Button>
			)
		}else{

		}
	}
	afficher(){
		if(this.props.article){
			return(
			<Segment style={{
				margin:"20px",
				paddingTop:0
			}}>
				<Titre3>{this.props.article.titre}</Titre3>
				<span>{this.props.article.description}</span>
				<br/><br/>
				<Image src={this.props.article.image}></Image>
				<br/>
				<div style={{
					width:"100%",
					textAlign:"center"
			}}>{this.retour()}</div>

			</Segment>
				)
		}
	}


	render(){

			return(
				<div>
					{this.afficher()}
				</div>


			)

	}
}


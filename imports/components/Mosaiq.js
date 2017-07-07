import React, {Component} from 'react'

import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import SystemGrid from '../components/SystemGrid.js'
import { Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';


export default class Mosaiq extends Component {

	componentDidMount(){

	}
	render(){
		return(
			<div>
				<Titre2>Languages du net</Titre2><br/>
				<Segment basic>
				<Titre3>Hors formation </Titre3>
				<SystemGrid  mobile={16} tablet={5} computer={5}
					donnees={this.props.hf}
				/>
				
			<Titre3>Dans le cadre de la formation Simplon </Titre3>
			<SystemGrid mobile={16} tablet={5} computer={5}
				donnees={this.props.fo}
			/>
			</Segment>
			
			<Titre2>VBA EXCEL :</Titre2>
			<Segment basic>
			<SystemGrid mobile={16} tablet={5} computer={5}
				donnees={this.props.vb}
			/>
			</Segment>
			</div>
		);
	}
}





import React, {Component} from 'react'

import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import SystemGrid from '../components/SystemGrid.js'
import PropTypes from 'prop-types';


export default class Mosaiq extends Component {

	render(){
		return(
			<div style={{display:"flex",flexDirection:"column",flex:1}}>
			<section>
				<Titre2>Langages du net</Titre2><br/>
				<div>
				<Titre3>Hors formation </Titre3>
				<SystemGrid  mobile={16} tablet={5} computer={5}
					donnees={this.props.hf} style={{margin:0}}
				/>
				
			<Titre3>Dans le cadre de la formation Simplon </Titre3>
			<SystemGrid mobile={16} tablet={5} computer={5}
				donnees={this.props.fo}
			/>
			</div>
			</section>
			<section>
			<Titre2>VBA Excel :</Titre2>
			<div>
			<SystemGrid mobile={16} tablet={5} computer={5}
				donnees={this.props.vb}
			/>

			</div>
			</section>
			</div>
		);
	}
}





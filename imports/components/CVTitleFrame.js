import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class CVTitleFrame extends Component {
	render(){
		
		return (
					<Titre3 style={{display:"flex", margin:0,...this.props.style}}>
						{this.props.children}
					</Titre3>

		);
	}
}

import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class CVColumn extends Component {

	render(){
		
		return (
			<div className = "CVColumn" style={{...this.props.style}}>
				{this.props.children}
			</div>
						

		);
	}
}

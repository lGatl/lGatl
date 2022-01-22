import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class CVRow extends Component {

	render(){
		
		return (
			<div className="CVRow" style={{ ...this.props.style}}>
				{this.props.children}
			</div>
						

		);
	}
}

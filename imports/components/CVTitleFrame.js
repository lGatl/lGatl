import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class CVTitleFrame extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
					<Titre3 style={{display:"flex", margin:0,...this.props.style}}>
						{this.props.children}
					</Titre3>

		);
	}
}

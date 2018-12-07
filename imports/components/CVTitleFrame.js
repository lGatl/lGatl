import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class CVTitleFrame extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			margin:5,
			cursor:"pointer",
	  	textDecoration:'none',
	  	color:this.state.hover?'rgba(24,180,204,0.9)':'white',
	  	fontWeight:this.state.hover?'400':'200'
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
					<Titre3 style={{display:"flex"}}>
						{this.props.children}
					</Titre3>

		);
	}
}

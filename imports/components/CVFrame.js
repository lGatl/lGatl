import React, {Component} from 'react'

export default class CVFrame extends Component {

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
					<div style={{
						display:"flex", 
						padding:5,
						borderBottom:"solid 1px black", 
						flexDirection:"column", 
						paddingBottom:10,
						width:"100%",
						...this.props.style
					}}>
						{this.props.children}
					</div>

		);
	}
}

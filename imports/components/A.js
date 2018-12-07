import React, {Component} from 'react'

export default class A extends Component {

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
					<a style={{...this.style()}} 
						onMouseEnter={this.hover.bind(this,true)}
          	onMouseLeave={this.hover.bind(this,false)}
					>{this.props.children}</a>

		);
	}
}

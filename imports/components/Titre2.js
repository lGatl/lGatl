import React, {Component} from 'react'

export default class Titre2 extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			backgroundColor:"rgba(181,204,24,1)",
			color:'white',
			borderRadius:5,
			display:'inline-block',
			padding:'20px',
			margin:'10px',
			animationName:'dep',
			animationDuration:'1s',
			transition:this.state.hover?'all 1s':"all 0.6s",
			transform: this.state.hover?"translateY(-3px)":"translateY(0px)"
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
					<div><h1 style={{...this.style()}} 
						onMouseEnter={this.hover.bind(this,true)}
          	onMouseLeave={this.hover.bind(this,false)}
					>{this.props.children}</h1></div>

		);
	}
}

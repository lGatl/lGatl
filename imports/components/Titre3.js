import React, {Component} from 'react'

export default class Titre3 extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			color:"rgba(181,204,24,1)",
			fontSize:"1.3em",
			borderRadius:5,
			display:"inline-block",
			paddingTop:5,
			paddingBottom:5,
			marginTop:10,
			marginBottom:10,	
			marginLeft:10,
			transition:this.state.hover?'all 1s':"all 0.6s",
			transform: this.state.hover?"translate(-2px)":"translate(0)"
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
					<div>
						<h2 style={{...this.style(),...this.props.style}} 
							onMouseEnter={this.hover.bind(this,true)}
	          	onMouseLeave={this.hover.bind(this,false)}
						>{this.props.children} :</h2>
					</div>

		);
	}
}

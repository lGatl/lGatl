import React, {Component} from 'react'

export default class MyName extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			textAlign: 'right',
			color:'rgba(181,204,24,1)',
			fontSize:'1.3em',
			fontWeight: 'bold',
			borderRadius:5,
			display:'block',
			transition:this.state.hover?'all 1s':"all 0.6s",
			transform: this.state.hover?"translate(-2px)":"translate(0)"
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
					<span 
						style={{...this.style()}} 
						onMouseEnter={this.hover.bind(this,true)}
          	onMouseLeave={this.hover.bind(this,false)}
          >Adrien GATINOIS</span>

		);
	}
}

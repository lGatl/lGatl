import React, {Component} from 'react'

export default class A extends Component {

	constructor(props){
		super(props)
		this.state={hover:false}
	}
	style(){ 

			return{
			margin:5,
			cursor:"pointer",
	  	textDecoration:'none',
	  	color:this.state.hover?'rgba(24,180,204,0.9)':'rgba(181,204,24,1)',
	  	fontWeight:"bold",
	  	
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		return (
					<a style={{...this.style(),...this.props.style}} 
						href = {this.props.href}
						onClick={this.props.onClick?this.props.onClick.bind(this):()=>{}}
						onMouseEnter={this.hover.bind(this,true)}
          	onMouseLeave={this.hover.bind(this,false)}
					>{this.props.children}</a>

		);
	}
}

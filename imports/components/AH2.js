import React, {Component} from 'react'

export default class AH2 extends Component {

	constructor(){
		super()
		this.state={ hover: false }
	}
		style(){ 
			let { hover } = this.state;
			return{
				cursor:"pointer",
				textDecoration: "none",
				color:hover?"rgba(24,180,204,0.7)":"rgba(181,204,24,1)",
			}
		}
	
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

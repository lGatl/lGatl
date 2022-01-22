import React, {Component} from 'react'

export default class CVFrame extends Component {

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

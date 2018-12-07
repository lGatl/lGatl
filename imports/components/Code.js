import React, {Component} from "react";

export default class Code extends Component {

	style(){return{
		scode:{
			backgroundColor:"rgba(230,230,230,1)"
		}
	}}
	render(){
		let { scode } = this.style();
		return (
			<code style={{...scode}}>
				{this.props.children}
			</code>
		);
	}
}


import React, {Component} from "react";

export default class PCode extends Component {

	style(){return{
		scode:{
			
		}
	}}
	render(){
		let { scode } = this.style();
		return (
			<pre style={{maxHeight:500,overflow:"scroll",...scode, ...this.props.style}}><code >
				{this.props.children}
			</code></pre>
		);
	}
}


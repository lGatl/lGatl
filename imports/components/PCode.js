import React, {Component} from "react";

export default class PCode extends Component {

	style(){return{
		scode:{
			
		}
	}}
	render(){
		let { scode } = this.style();
		return (
			<pre><code style={{...scode}}>
				{this.props.children}
			</code></pre>
		);
	}
}


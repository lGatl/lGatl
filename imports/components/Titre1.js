import React, {Component} from 'react'

const style={
	fontSize:"2em",
	fontWeight: "bold",
	display:"inline-block",
	textAlign:"center",
	backgroundColor:"rgba(24,180,204,0.2)",
	flex:1,
	borderRadius:"5px",
	display:"inline-block",
	padding:20,
	margin:0,
	animationName:"dev",
	animationDuration:"1s",
}
export default class Titre1 extends Component {


	render(){
		return (
			<span style={{...style}}>{this.props.children}</span>
		);
	}
}

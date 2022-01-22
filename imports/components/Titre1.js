import React, {Component} from 'react'

const style={
	fontSize:"35px",
	fontWeight: "bold",
	display:"flex",
	justifyContent:"center",
	backgroundColor:"rgba(24,180,204,0.2)",
	height:90,
	borderRadius:"5px",
	padding:20,
	margin:0,
	animationName:"dev",
	animationDuration:"1s",
}
export default class Titre1 extends Component {


	render(){
		return (
			<div style={{...style,...this.props.style}}>{this.props.children}</div>
		);
	}
}

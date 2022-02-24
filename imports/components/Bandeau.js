import React, {Component} from "react";

export default class Bandeau extends Component {

	style(){return{
		
	}}
	render(){
		return (
			<div style={{fontSize:18,flex:1,display:"flex", alignItems:"center", flexDirection:"column", ...this.props.style}}>	
			<div style={{maxWidth:1000, width:"100%",display:"flex",flexFlow: "row wrap", justifyContent:'center',...this.props.stylein}}>
				{this.props.children}
			</div>
			</div>
		);
	}
}


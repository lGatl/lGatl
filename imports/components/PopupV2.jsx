import React, {Component} from "react";

export default class PopupV2 extends Component {

	render(){
		return (
			<div style = {{
				backgroundColor:"rgba(50,50,50,0.5)",

				position:"fixed", 
				display:this.props.open?"flex":"none",

				zIndex:9999,
				top:0,
				bottom:0,
				left:0,
				right:0,
				
				justifyContent:"center",
				alignItems:"center",
				alignContent:"center",
				...this.props.stylecont

				
			}}>
				<div style = {{
					borderRadius:10,
					boxShadow: "3px 3px 3px rgba(50,50,50,0.7)",
					backgroundColor:"white",
					maxHeight:"100%",
					...this.props.style
				}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}


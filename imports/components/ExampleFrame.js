import React, {Component} from "react";

export default class ExampleFrame extends Component {
	render(){
		return(
				<div style={{display:"flex",flexWrap:"wrap", flex:1}}>
					<div style = {{
						flex:1,
						backgroundColor:"rgba(230,230,230,1)",
						padding:10,
						margin:10,
						borderRadius:"20px"
					}}>
						{this.props.children[0]}
				</div>
				<div style={{flex:1,display:"flex", justifyContent:"center",alignItems:"center"}}>
						{this.props.children[1]}
				</div>
				</div>
		)
	}
}

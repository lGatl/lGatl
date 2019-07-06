import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import Titre3 from './Titre3'

class ExampleFrame extends Component {
	render(){
				let width = this.props.windowwidth >= 700 ?this.props.windowwidth-200:this.props.children && 
					typeof this.props.children == "object" && 
					this.props.children instanceof Array ?this.props.windowwidth-50:this.props.windowwidth-30
		return(
			<div>
				<Titre3>Example</Titre3>
				{this.props.intro}
				{
					this.props.children && 
					typeof this.props.children == "object" && 
					this.props.children instanceof Array ? <div style={{display:"flex",flexWrap:"wrap", flex:1}}>
					<div style = {{
						flex:1,
						backgroundColor:"rgba(230,230,230,1)",
						padding:10,
						margin:"10px 0px 10px 0px",
						borderRadius:"20px",
						maxWidth:width
					}}>
						{this.props.children[0]}
				</div>
					<div style={{flex:1, display:"flex", justifyContent:"center", alignItems:"center"}}>
						{this.props.children[1]}
					</div>
				</div>: <div style = {{
						flex:1,
						backgroundColor:"rgba(230,230,230,1)",
						padding:10,
						margin:"10px 0px 10px 0px",
						borderRadius:"20px",
						maxWidth:width
					}}>
						{this.props.children}
				</div>
				}

			</div>
		)
	}
}
function mapStateToProps(state){
	return (
		{
			windowwidth:state.controle.resize.windowwidth
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ExampleFrame );

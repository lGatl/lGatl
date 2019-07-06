import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

class Example extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			margin:5,
			cursor:"pointer",
	  	textDecoration:'none',
	  	color:this.state.hover?'rgba(24,180,204,0.9)':'rgba(181,204,24,1)',
	  	fontWeight:"bold"
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		let width = this.props.windowwidth >= 700 ?this.props.windowwidth-200:this.props.windowwidth-20
		return (
					<div>
						<div style={{
							color:"rgba(24,180,204,1)",
							textDecoration:"underline",
							fontWeight:"bold"
						}}>Example : </div>
						<div style={{
							padding: 10, 
							borderRadius:5, 
							backgroundColor:"rgba(24,180,204,0.1)",
							maxWidth:width
						}}>{this.props.children}</div>
					</div>

		);
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

export default connect( mapStateToProps, mapDispatchToProps )( Example );

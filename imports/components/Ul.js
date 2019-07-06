import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

class Ul extends Component {
	render(){
		return (
					<ul style={{padding:this.props.windowwidth >= 700 ?"":10,paddingRight:0}}>
						{this.props.children}						
					</ul>

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

export default connect( mapStateToProps, mapDispatchToProps )( Ul );

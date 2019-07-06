import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

class Ul extends Component {
	render(){
		return (
					<ol style={{padding:this.props.windowwidth >= 700 ?"":20,paddingRight:0}}>
						{this.props.children}						
					</ol>

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

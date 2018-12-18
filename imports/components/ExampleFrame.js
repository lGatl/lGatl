import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";


class ExampleFrame extends Component {
	render(){
				let width = this.props.windowwidth >= 700 ?this.props.windowwidth-200:this.props.windowwidth-50
		return(
				<div style={{display:"flex",flexWrap:"wrap", flex:1}}>
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
				<div style={{flex:1,display:"flex", justifyContent:"center",alignItems:"center"}}>
						{this.props.children[1]}
				</div>
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

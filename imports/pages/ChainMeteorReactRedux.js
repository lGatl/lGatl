import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

//import { Menu, Item } from 'gat-ui-react';
import SmartMenuCMRR from '../containers/SmartMenuCMRR.js';

import ChoiceCMRRPage from '../components/ChoiceCMRRPage';
import Titre1 from '../components/Titre1'


class ChainMeteorReactRedux extends Component {

	constructor(){
		super()
		this.state={ hover: false }
	}
	componentWillMount(){
		this.props.setControle({generalMenu:'chain-meteor-react-redux'})
	}
	style(){
		let { hover } = this.state;
		return{	
		}
	}

	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
				<div style={{display:"flex",flexDirection:"column"}}>
					<Titre1>chain-meteor-react-redux</Titre1>
					<div style={{display:"flex"}}>
						<div style={{flex:1}}>
							<SmartMenuCMRR/>						
						</div>
						<div style={{flex:5, maxWidth:1000}}>
						
						<ChoiceCMRRPage titre={this.props.titre} param={this.props.param}/>
						</div>
						<div style={{flex:1}}></div>
					</div>
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
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ChainMeteorReactRedux );

import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../../6_actions/actions";

//import { Menu, Item } from 'gat-ui-react';
import ShortMenu from '../../containers/ShortMenu.js';

import Titre1 from '../../components/Titre1'

import ISExplanation from './ISExplanation';
import ISTest from './ISTest';


class InfiniteScroll extends Component {

	constructor(){
		super()
		this.state={ hover: false }
	}
	componentWillMount(){
		
		this.props.setControle({generalMenu:'chain-meteor-react-redux',short_menu:"Explanation"})
	}
	componentDidMount() {
		if(this.props.param == 'Test'){this.props.setControle({short_menu:'Test'})}
	}
	style(){
		let { hover } = this.state;
		return{	
		}
	}
	controleMenu(str){
		this.props.setControle({short_menu:str})
		FlowRouter.go('/chain-meteor-react-redux/InfiniteScroll/'+str)
	}
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
				<div style={{display:"flex",flexDirection:"column"}}>
					<ShortMenu 
					items={["Explanation","Test"]} 
					controle={this.controleMenu.bind(this)} 
					active={this.props.short_menu}
					/>						
					{this.props.short_menu=="Test"?<ISTest/>: <ISExplanation/>}	
				</div>
		);
	}
}
function mapStateToProps(state){
	return (
		{
			short_menu:state.controle.short_menu
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( InfiniteScroll );

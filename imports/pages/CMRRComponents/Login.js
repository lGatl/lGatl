import React, {Component} from "react";

import { bindActionCreators }	from 'redux';
import { connect } from 'react-redux';

import { ACTIONS } from "../../6_actions/actions";

import { Segment, Button } from "gat-ui-react";

import ShortMenu from '../../containers/ShortMenu.js';
import LoginTest from './LoginTest.js';
import LoginExplanation from './LoginExplanation.js';


class Login extends Component {

	controleMenu(str){
		this.props.setControle({short_menu:str})
	}
	componentWillMount(){
		this.props.setControle({
			generalMenu:'chain-meteor-react-redux',
			short_menu:"Explanation"
		})

	}
	render(){
		
		return (
			<div style = {{display:"flex",flex:1, justifyContent:"center",flexDirection:"column"}}>
				<ShortMenu 
						items={["Explanation","Test"]} 
						controle={this.controleMenu.bind(this)} 
						active={this.props.short_menu}
					/>	
					<br/>
				{this.props.short_menu=='Test'?<LoginTest/>:<LoginExplanation/>}
			</div>
		);
	}
}

function mapStateToProps(state){
	return (
		{
			short_menu:state.controle.short_menu,
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set,
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );



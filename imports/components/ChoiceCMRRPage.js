import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";
import { ACTIONS } from "../6_actions/actions";

import Home from '../pages/CMRRComponents/Home';
import Resize from '../pages/CMRRComponents/Resize';
import InfiniteScroll from '../pages/CMRRComponents/InfiniteScroll';
import Login from '../pages/CMRRComponents/Login';
import Methods from '../pages/CMRRComponents/Methods';
import Usage from '../pages/CMRRComponents/Usage';
import Reducers from '../pages/CMRRComponents/Reducers';


class ChoiceCMRRPage extends Component {

	page(){
		let {setControle} = this.props;
		setControle({CMRRMenu:this.props.titre||'Home'})
		switch (this.props.titre) {
			case 'Login':
				return <Login/>
				break;
			case 'InfiniteScroll':
				return <InfiniteScroll param={this.props.param}/>
				break;
			case 'Resize':
				return <Resize/>
				break;
			case 'Methods':
				return <Methods/>
				break;
			case 'Usage':
				return <Usage/>
				break;
			case 'Reducers':
				return <Reducers/>
				break;
		  default:
		  	return <Home/>
		}
	}
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return this.page()
	}
}
function mapStateToProps(state){
	return (
		{
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ChoiceCMRRPage );

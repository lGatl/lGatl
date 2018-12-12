import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";
import { ACTIONS } from "../6_actions/actions";

import Home from '../pages/GURComponents/Home';
import A from '../pages/GURComponents/A';
import Button from '../pages/GURComponents/Button';
import Calendar from '../pages/GURComponents/Calendar';
import Carrousel from '../pages/GURComponents/Carrousel';
import Checkbox from '../pages/GURComponents/Checkbox';
import Dropdown from '../pages/GURComponents/Dropdown';
import Form from '../pages/GURComponents/Form';
import Input from '../pages/GURComponents/Input';
import Menu from '../pages/GURComponents/Menu';
import Rating from '../pages/GURComponents/Rating';
import Notification from '../pages/GURComponents/Notification';
import Img from '../pages/GURComponents/Img';
import Popup from '../pages/GURComponents/Popup';
import Segment from '../pages/GURComponents/Segment';
import Table from '../pages/GURComponents/Table';
import TextArea from '../pages/GURComponents/TextArea';
import Titles from '../pages/GURComponents/Titles';

class ChoiceGURPage extends Component {

	page(){
		let {setControle} = this.props;
		setControle({GURMenu:this.props.titre})
		switch (this.props.titre) {
			case 'A':
				return <A/>
				break;
		  case 'Button':
		  	return <Button/>
		  	break;
		  case 'Calendar':
		  	return <Calendar/>
				break;
			case 'Carrousel':
				return <Carrousel/>
				break;
			case 'Checkbox':
				return <Checkbox/>
				break;
			case 'Dropdown':
				return <Dropdown/>
				break;
			case 'Form':
				return <Form/>
				break;
			case 'Input':
				return <Input/>
				break;
			case 'Menu':
				return <Menu/>
				break;
			case 'Rating':
				return <Rating/>
				break;
			case 'Notification':
				return <Notification/>
				break;
			case 'Img':
				return <Img/>
				break;
			case 'Popup':
				return <Popup/>
				break;
			case 'Segment':
				return <Segment/>
				break;
			case 'Table':
				return <Table/>
				break;
			case 'TextArea':
				return <TextArea/>
				break;
			case 'Titles':
				return <Titles/>
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

export default connect( mapStateToProps, mapDispatchToProps )( ChoiceGURPage );

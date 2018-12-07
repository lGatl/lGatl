import React, {Component} from 'react';

import Home from '../pages/GURComponents/Home';
import A from '../pages/GURComponents/A';
import Button from '../pages/GURComponents/Button';
import Calendar from '../pages/GURComponents/Calendar';
import Carrousel from '../pages/GURComponents/Carrousel';
import Checkbox from '../pages/GURComponents/Checkbox';
import Dropdown from '../pages/GURComponents/Dropdown';
import Footer from '../pages/GURComponents/Footer';
import Form from '../pages/GURComponents/Form';
import Input from '../pages/GURComponents/Input';
import Item from '../pages/GURComponents/Item';
import Menu from '../pages/GURComponents/Menu';
import Note from '../pages/GURComponents/Note';
import Notification from '../pages/GURComponents/Notification';
import Popup from '../pages/GURComponents/Popup';
import Segment from '../pages/GURComponents/Segment';
import Table from '../pages/GURComponents/Table';
import TextArea from '../pages/GURComponents/TextArea';
import Titre from '../pages/GURComponents/Titre';
import Titre1 from '../pages/GURComponents/Titre1';


export default class ChoiceGURPage extends Component {

	page(){
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
			case 'Footer':
				return <Footer/>
				break;
			case 'Form':
				return <Form/>
				break;
			case 'Input':
				return <Input/>
				break;
			case 'Item':
				return <Item/>
				break;
			case 'Menu':
				return <Menu/>
				break;
			case 'Note':
				return <Note/>
				break;
			case 'Notification':
				return <Notification/>
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
			case 'Titre':
				return <Titre/>
				break;
			case 'Titre1':
				return <Titre1/>
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

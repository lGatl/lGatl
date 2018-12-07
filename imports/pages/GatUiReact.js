import React, {Component} from 'react';
//import { Menu, Item } from 'gat-ui-react';
import SmartMenuGatUiReact from '../containers/SmartMenuGatUiReact.js';

import ChoiceGURPage from '../components/ChoiceGURPage';
import Titre1 from '../components/Titre1'


export default class GatUiReact extends Component {

	constructor(){
		super()
		this.state={ hover: false }
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
					<Titre1>gat-ui-react</Titre1>
					<div style={{display:"flex"}}>
						<div style={{flex:1}}>
							<SmartMenuGatUiReact/>						
						</div>
						<div style={{flex:5, maxWidth:1000}}>
						
						<ChoiceGURPage titre={this.props.titre}/>
						</div>
						<div style={{flex:1}}></div>
					</div>
				</div>
		);
	}
}

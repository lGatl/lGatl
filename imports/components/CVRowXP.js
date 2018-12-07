import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'
import CVColumn from '../components/CVColumn.js'
import CVRow from '../components/CVRow.js'

export default class CVRowXP extends Component {

	constructor(){
		super()
		this.state={hover:false}
	}
		style(){ return{
			margin:5,
			cursor:"pointer",
	  	textDecoration:'none',
	  	color:this.state.hover?'rgba(24,180,204,0.9)':'white',
	  	fontWeight:this.state.hover?'400':'200'
		}}
	
	hover(param){
		this.setState({hover:param})
	}
	render(){
		
		return (
			<CVRow>
				<CVColumn flex={1} style={{minWidth:100}}>
							{this.props.children[0]}
				</CVColumn>
				<CVColumn flex={3} style={{ textAlign:"justify"}}>
							{this.props.children[1]}
				</CVColumn>
				
			</CVRow>
						

		);
	}
}

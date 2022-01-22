import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'
import CVColumn from '../components/CVColumn.js'
import CVRow from '../components/CVRow.js'

export default class CVRowXP extends Component {

	render(){
		
		return (
			<CVRow style={{marginBottom:10}}>
				<CVColumn style={{minWidth:60, flex:1}}>
							{this.props.children[0]}
				</CVColumn>
				<CVColumn  style={{minWidth:60, flex:5}}>
							{this.props.children[1]}
				</CVColumn>
				
			</CVRow>
						

		);
	}
}

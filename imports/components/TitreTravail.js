import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class TitreTravail extends Component {


	render(){
		return (
					<h4 style={{
						fontSize:"1.6em",
						fontWeight:"bold",
						color:"rgba(250,250,250,1)",
						borderRadius:"5px",
						display:"block",
						textShadow:" 1px 1px rgba(50,50,50,1)"
					}}>
						{this.props.children}
					</h4>

		);
	}
}

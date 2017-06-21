import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Titre3 extends Component {


	render(){
		return (
					<h3 style={{

						color:"rgba(181,204,24,1)",
						fontSize:"1.3em",
						borderRadius:"5px",
						display:"block",
						margin:"10px"

					}}
					>{this.props.children}</h3>

		);
	}
}

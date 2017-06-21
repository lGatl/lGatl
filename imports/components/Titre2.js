import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Titre2 extends Component {


	render(){
		return (
					<h2 style={{

						backgroundColor:"rgba(181,204,24,1)",
						color:"white",
						borderRadius:"5px",
						display:"inline-block",
						padding:"20px",
						margin:"10px"

					}}
					>{this.props.children}</h2>

		);
	}
}

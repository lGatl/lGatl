import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Titre1 extends Component {


	render(){
		return (


			<div style={{

						width:"100%",
						textAlign:"center"

					}} >
					<h1 style={{

						backgroundColor:"rgba(24,180,204,0.2)",
						width:"100%",
						borderRadius:"5px",
						display:"inline-block",
						padding:"20px"

					}}
					>{this.props.children}</h1>

			</div>

		);
	}
}

import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Titre1 extends Component {


	render(){
		return (



					<h1 style={{
						display:"inline-block",
						textAlign:"center",
						backgroundColor:"rgba(24,180,204,0.2)",
						width:"100%",
						borderRadius:"5px",
						display:"inline-block",
						padding:"20px",
						margin:0,



					}}
					>{this.props.children}</h1>



		);
	}
}

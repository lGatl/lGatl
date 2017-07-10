import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'

export default class Titre2 extends Component {


	render(){
		return (
					<h1  className="titre2"
					>{this.props.children}</h1>

		);
	}
}

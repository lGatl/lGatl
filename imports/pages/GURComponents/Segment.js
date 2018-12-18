import React, { Component } from "react";
import { Segment } from 'gat-ui-react'
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class SegmentComponent extends Component {
	render(){
		return (
			<div>
				<Titre2>Segment</Titre2><br/>
				A Segment simple to beautify <br/>
				<Titre3>Exemple :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}	
					</PCode>
					<Segment row
						style = {{padding:10, flex:1}}
					> a Segment </Segment>
				</ExampleFrame>
					<Titre3>Menu Children</Titre3><br/>
					Give strings or components to complete your Segment.<br/>
				<Titre3>Optional Parameter</Titre3><br/>
				<Code>style</Code> : object - Change the style of this Segment, it will crush the default. <br/>
				<Code>row</Code> : boolean - Set the flex direction to row. <br/>
				<Code>onClick</Code> : function - Give what to do when click on the Segment <br/>
				
			</div>	
		)
		
	}
}

const EXEMPLE = `import React, { Component } from "react";
import { Segment } from 'gat-ui-react'

export default class SegmentExample extends Component {
  render(){
    return <Segment> a Segment </Segment>
  }
}`






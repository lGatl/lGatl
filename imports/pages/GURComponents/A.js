import React, { Component } from "react";
import { A } from 'gat-ui-react'
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class AComponent extends Component {
	render(){
		return (
			<div>
				<Titre2>A</Titre2><br/>
				A link without textDecoration by default <br/>
				<Titre3>Exemple :</Titre3>
				<ExampleFrame>
					<PCode>
{`import React, { Component } from "react";
import { A } from 'gat-ui-react'

export default class AComponent extends Component {
  render(){
    return <A href = "http://www.lgatl.fr"> a link</A>
  }
}`}	
					</PCode>
					<A href = "http://www.lgatl.fr"> a link</A>
				</ExampleFrame>
				<Titre3>Children :</Titre3><br/>
				Children of Button give the name of this Button. <br/>
				<Titre3>Parameter : </Titre3><br/>
				<Code>href</Code> : string - target adresse of this link.  <br/>
				<Titre3>Optional Parameter : </Titre3><br/>
				<Code>style</Code> : js - Change the style of this Button, it will crush the default. <br/>
				<Code>draggable</Code> : boolean - precise the draggable propertie of the link.

			</div>	
		)
		
	}
}







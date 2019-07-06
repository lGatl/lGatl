import React, {Component} from "react";
import { Button } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';


export default class ButtonComponent extends Component {
	
	onClick(){
		alert('clicked')
	}

	render(){
		return (
			<div>
				<Titre2>Button</Titre2><br/>
				Use a simple pretty Button <br/>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<Button
						onClick = { this.onClick.bind(this) }
						style = {{backgroundColor:"rgba(150,150,250,1)"}}
					>
						Click
					</Button>
				</ExampleFrame>
				<Titre3>Children</Titre3><br/>
					Children of Button give the name of this Button. <br/>
				<Titre3>Parameter</Titre3><br/>
				<Code>onClick</Code> : function - Put here the function who will be run on the click. <br/>
				<Titre3>Optional Parameter</Titre3><br/>
				<Code>style</Code> : object - Change the style of this Button, it will crush the default. <br/>

			</div>
			
		);
	}
}

const EXEMPLE = `import React, { Component } from "react";
import { Button } from 'gat-ui-react';

export default class ButtonExample extends Component {
	
  onClick(){
    alert('clicked')
  }
  render(){
    return (
      <Button
          onClick = { this.onClick.bind(this) }
          style = {{backgroundColor:"rgba(150,150,250,1)"}}
      >
        Click
      </Button>
    );
  }
}`

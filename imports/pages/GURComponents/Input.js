import React, {Component} from "react";
import { Input } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class InputComponent extends Component {
	constructor(){
		super();
		this.state = {
			test_input:""
		}
	}
	
	//Controle
	change(e,{ value, name }){
		this.setState({ [name]:value });
	}
	
	render(){
		
		let	{ test_input } = this.state;
		
		return (
			<div>
			<Titre2>Input</Titre2><br/>
				A simple Input easy to controle. <br/>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<Input
						label = "test input"
						name = "test_input"
						placeholder="placeholder"
						value = { test_input }
						onChange = { this.change.bind( this ) }
					/>
				</ExampleFrame>
				<Code>this.state.test_input =</Code> { '"'+test_input+'"' } <br/>
				<Titre3>Parameters</Titre3><br/>
				<Code>name</Code>: string - Identify your Input. <br/>
				<Code>onChange</Code> : function - Controle your Input with this parameter. She return the name and the value to controle easily this component. <br/>
				<Code>value</Code> : string - Put here the controled value. <br/>
				<Titre3>Optional Parameters</Titre3><br/>
				<Code>label</Code> : string - Write a text before the Input. <br/>
				<Code>placeholder</Code>: string - Precise a placeholder. <br/>
				<Code>style</Code> : object - Change the style of input's container.<br/>
</div>
		);
	}
}
const EXEMPLE = `import React, { Component } from "react";
import { Input } from "gat-ui-react";

export default class InputExample extends Component {
  constructor(){
    super();
    this.state = {
      test_input:""
    }
  }
  //Controle
  change(e,{ value, name }){
    this.setState({ [name]:value });
  }

  render(){
    let { test_input } = this.state;
    return (
      <Input
        label = "test_input"
        name = "test_input"
        placeholder="placeholder"
        value = { test_input }
        onChange = { this.change.bind( this ) }
      />
    );
  }
}`

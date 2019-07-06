import React, {Component} from "react";
import { Checkbox } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class CheckboxComponent extends Component {
	constructor(){
		super();
		this.state = {
			test_checkbox:false
		}
	}
	
	//Controle
	change(e,{ checked, name }){
		this.setState({ [name]:checked });
	}
	
	render(){
		
		let	{ test_checkbox } = this.state;
		
		return (
			<div>
			<Titre2>Checkbox</Titre2><br/>
				A simple Checkbox easy to controle <br/>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<Checkbox
						label = "test checkbox"
						name = "test_checkbox"
						checked = { test_checkbox }
						onChange = { this.change.bind( this ) }
					/>
				</ExampleFrame>
				<Code>this.state.test_checkbox =</Code> { test_checkbox.toString() } <br/>
				<Titre3>Parameters</Titre3><br/>
				<Code>name</Code> : string - Identify your checkbox. <br/>
				<Code>onChange</Code> : function - Controle your checkbox with this parameter. She return the name and the checked value to controle easily this component. <br/>
				<Code>checked</Code> : boolean - Put here the controled value. <br/>
				<Titre3>Optional Parameter</Titre3><br/>
				<Code>label</Code> : string - Write a text before the date. <br/>
				<Code>style</Code> : object - Change the style of checkbox's container.<br/>
</div>
		);
	}
}
const EXEMPLE = `
import React, { Component } from "react";
import { Checkbox } from "gat-ui-react";

export default class CheckboxExample extends Component {
  constructor(){
    super();
    this.state = {
      test_checkbox:false
    }
  }
  //Controle
  change(e,{ checked, name }){
    this.setState({ [name]:checked });
  }
  render(){
    let  { test_checkbox } = this.state;
    return (
      <Checkbox
        label = "test_checkbox"
        name = "test_checkbox"
        checked = { test_checkbox }
        onChange = { this.change.bind( this ) }
    />
    );
  }
}
`

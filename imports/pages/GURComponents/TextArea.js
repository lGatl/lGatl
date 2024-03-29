import React, {Component} from "react";
import { TextArea } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class TextAreaComponent extends Component {
	constructor(){
		super();
		this.state = {
			test_textarea:""
		}
	}
	
	//Controle
	change(e,{ value, name }){
		this.setState({ [name]:value });
	}
	
	render(){
		
		let	{ test_textarea } = this.state;
		
		return (
			<div>
			<Titre2>TextArea</Titre2><br/>
				A simple TextArea easy to controle. <br/>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<TextArea
						label = "test textarea"
						name = "test_textarea"
						placeholder="placeholder"
						value = { test_textarea }
						onChange = { this.change.bind( this ) }
					/>
				</ExampleFrame>
				<Code>this.state.test_textarea =</Code> { '"'+test_textarea+'"' } <br/>
				<Titre3>Parameters</Titre3><br/>
				<Code>name</Code>: string - Identify your TextArea. <br/>
				<Code>onChange</Code> : function - Controle your TextArea with this parameter. She return the name and the value to controle easily this component. <br/>
				<Code>value</Code> : string - Put here the controled value.<br/>
				<Titre3>Optional Parameters</Titre3><br/>
				<Code>label</Code> : string - Write a text before the TextArea. <br/>
				<Code>placeholder</Code>: string - Precise a placeholder <br/>
				<Code>style</Code> : object - Change the style of the textArea and textArea's container.<br/>
</div>
		);
	}
}
const EXEMPLE = `
import React, {Component} from "react";
import { TextArea } from "gat-ui-react";

export default class TextAreaExample extends Component {
  constructor(){
    super();
    this.state = {
      test_textarea:""
    }
  }
  change(e,{ value, name }){
    this.setState({ [name]:value });
  }
  render(){
    
    let  { test_textarea } = this.state;
    return (
      <TextArea
      label = "test textarea"
      name = "test_textarea"
      placeholder = "placeholder"
      value = { test_textarea }
      onChange = { this.change.bind( this ) }
    />
    );
  }
}
`

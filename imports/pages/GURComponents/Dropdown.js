import React, {Component} from "react";
import { Dropdown } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class DropdownComponent extends Component {
	constructor(){
    super();
    this.state = {
      test_dropdown:""
    }
  }
  options(){
  	return[
  		{value:"value1",text:"choice1"},
      {value:"value2",text:"choice2"},
      {value:"value3",text:"choice3"},
      {value:"value4",text:"choice4"}
  	]
  }
  //Controle
  change(e,{ value, name }){
    this.setState({ [name]:value });
  }
	
	render(){
		
		let	{ test_dropdown } = this.state;
		
		return (
			<div>
			<Titre2>Dropdown</Titre2><br/>
				A simple Dropdown easy to controle. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
{`
import React, { Component } from "react";
import { Dropdown } from "gat-ui-react";

export default class DropdownExample extends Component {
  constructor(){
    super();
    this.state = {
      test_dropdown:""
    }
  }
  options(){
    return[
      {value:"value1",text:"choice1"},
      {value:"value2",text:"choice2"},
      {value:"value3",text:"choice3"},
      {value:"value4",text:"choice4"}
    ]
  }
  //Controle
  change(e,{ value, name }){
    this.setState({ [name]:value });
  }

  render(){
    let { test_dropdown } = this.state;
    return (
      <Dropdown
        label = "test dropdown"
        placeholder = "placeholder"
        name = "test_dropdown"
        onChange = { this.change.bind ( this ) } 
        options = { this.options() }
        value = { test_dropdown }
      />
    );
  }
}
`}
					</PCode>
					<Dropdown
						label = "test dropdown"
						placeholder = "placeholder"
						name = "test_dropdown"
						onChange = { this.change.bind ( this ) } 
						options = { this.options() }
						value = { test_dropdown }
					/>
				</ExampleFrame>
				<Code>this.state.test_dropdown =</Code> { '"'+test_dropdown+'"' } <br/>

				<Titre3>Parameters : </Titre3><br/>
				<Code>name</Code>: string - Identify your Dropdown. <br/>
				<Code>options</Code>: array - Give the possible values like this : {'{ value: "value1", text: "choice1" }'} <br/>
				<Code>onChange</Code> : function - Controle your Dropdown with this parameter. She return the name and the value to controle easily this component. <br/>
				<Code>value</Code> : string - Put here the controled value. <br/>
				<Titre3>Optional Parameters : </Titre3><br/>
				<Code>label</Code> : string - Write a text before the Dropdown. <br/>
				<Code>placeholder</Code>: string - Precise a placeholder <br/>


</div>
		);
	}
}


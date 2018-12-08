import React, {Component} from "react";
import { 
	Form, Input, TextArea, Checkbox, Dropdown, Calendar, Note } from "gat-ui-react";
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class FormExample extends Component {
	constructor(){
    super()
    this.state = {
    	test_input:"",
    	test_textarea:"",
    	test_checkbox:false,
    	test_dropdown:"",
      test_calendar:new Date(Date.now()),
      test_note:0
      
    }
  }
   //Controle
  change(e,{ value, checked, date, note, name }){
  	let keep = value!=undefined?value:
  		date!=undefined?date:
  		note!=undefined?note:
  		checked!=undefined?checked:undefined;
  		
  						
  this.setState({ [name]:keep });
  }
  options(){
    return[
      {value:"value1",text:"choice1"},
      {value:"value2",text:"choice2"},
      {value:"value3",text:"choice3"},
      {value:"value4",text:"choice4"}
    ]
  }
	render(){
		let { test_input, test_textarea, test_checkbox, test_dropdown, test_calendar, test_note } = this.state;
		return(
			<div>
			<Titre2>Form</Titre2><br/>
				A simple Form display:flex & flexDirection column by default. <br/>
				<Titre3>Example :</Titre3><br/>
				Form with all types of components who need a control. They are here controled by only one method.
				<ExampleFrame>
					<PCode>
{`import React, {Component} from "react";
import { Form, Input, TextArea, Checkbox, 
	Dropdown, Calendar, Note } from "gat-ui-react";

export default class FormExample extends Component {
  constructor(){
    super()
    this.state = {
      test_input:"",
      test_textarea:"",
      test_checkbox:false,
      test_dropdown:"",
      test_calendar:new Date(Date.now()),
      test_note:0 
    }
  }
   //Controle
  change(e,{ 
    value, checked, date, note, name 
  }){
    let keep = value!=undefined?value:
  		date!=undefined?date:
  		note!=undefined?note:
  		checked!=undefined?checked:undefined;

  this.setState({ [name]:keep });
  }
  options(){
    return[
      {value:"value1",text:"choice1"},
      {value:"value2",text:"choice2"},
      {value:"value3",text:"choice3"},
      {value:"value4",text:"choice4"}
    ]
  }
  render(){
    let { 
    	test_input, test_textarea, test_checkbox, 
    	test_dropdown, test_calendar, test_note 
    } = this.state;
    return (
      <Form>
        <Input
          label = "test_input"
          name = "test_input"
          placeholder="placeholder"
          value = { test_input }
          onChange = { this.change.bind( this ) }
        />
        <TextArea
          label = "test textarea"
          name = "test_textarea"
          placeholder = "placeholder"
          value = { test_textarea }
          onChange = { this.change.bind( this ) }
        />
        <Checkbox
          label = "test_checkbox"
          name = "test_checkbox"
          checked = { test_checkbox }
          onChange = { this.change.bind( this ) }
        />
         <Dropdown
          label = "test dropdown"
          placeholder = "placeholder"
          name = "test_dropdown"
          onChange = { this.change.bind ( this ) } 
          options = { this.options() }
          value = { test_dropdown }
        />
        <Calendar
          label = 'Date : '
          name = 'test_calendar'
          onChange = {this.change.bind(this)}
          date = {test_calendar}
        />
        <Note
          name = "test_note"
          note = { test_note }
          onChange = { this.change.bind( this ) }
        />
      </Form>
    );
  }
}`}
					</PCode>
					<Form>
						<Input
			        label = "test_input"
			        name = "test_input"
			        placeholder="placeholder"
			        value = { test_input }
			        onChange = { this.change.bind( this ) }
			      />
			      <TextArea
				      label = "test textarea"
				      name = "test_textarea"
				      placeholder = "placeholder"
				      value = { test_textarea }
				      onChange = { this.change.bind( this ) }
				    />
				    <Checkbox
			        label = "test_checkbox"
			        name = "test_checkbox"
			        checked = { test_checkbox }
			        onChange = { this.change.bind( this ) }
		    		/>
		    		 <Dropdown
			        label = "test dropdown"
			        placeholder = "placeholder"
			        name = "test_dropdown"
			        onChange = { this.change.bind ( this ) } 
			        options = { this.options() }
			        value = { test_dropdown }
			      />
						<Calendar
				      label = 'Date : '
				      name = 'test_calendar'
				      onChange = {this.change.bind(this)}
				      date = {test_calendar}
				    />
				    <Note
			        name = "test_note"
			        note = { test_note }
			        onChange = { this.change.bind( this ) }
			      />

					</Form>
				</ExampleFrame>
				<Code>this.state.test_input =</Code> { '"'+test_input+'"' } <br/>
				<Code>this.state.test_textarea =</Code> { '"'+test_textarea+'"' } <br/>
				<Code>this.state.test_checkbox =</Code> { test_checkbox.toString() } <br/>
				<Code>this.state.test_dropdown =</Code> { '"'+test_dropdown+'"' } <br/>
				<Code>this.state.test_calendar =</Code> { test_calendar.toString() } <br/>
				<Code>this.state.test_note =</Code> { test_note.toString() } <br/>
				<Titre3>Children :</Titre3><br/>
					Children are returned displayed flex to column direction. <br/>
				<Titre3>Optional Parameters : </Titre3><br/>
				<Code>style</Code> : js - Change the style of this Form, it will crush the default. <br/>
				<Code>onSubmit</Code> : string - Run a function if a input in this form is submit <br/>
			</div>
		)
	}
}




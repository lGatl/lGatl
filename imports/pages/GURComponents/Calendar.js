import React, {Component} from "react";
import { Calendar } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class CalendarComponent extends Component {
	constructor(){
		super()
		this.state = {
			test_calendar:new Date(Date.now())
		}
	}
	
	//Controle
	change(e,{ date, name }){
		this.setState({ [name]:date });
	}
	
	render(){
		
		let	{ test_calendar } = this.state;
		
		return (
			<div>
			<Titre2>Calendar</Titre2><br/>
				Display a test_calendar and if you click on, a simple calendar appears to permise the user to choose an other test_calendar. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<Calendar
						label = 'Date : '
						name = 'test_calendar'
						onChange = {this.change.bind(this)}
						date = {test_calendar}
					/>
				</ExampleFrame>
				<Code>this.state.test_calendar =</Code> { test_calendar.toString() } <br/>
				<Titre3>Parameters : </Titre3><br/>
				<Code>name</Code> : string - Identify your Calendar. <br/>
				<Code>onChange</Code> : function - Controle your calendar with this parameter. she return the name and the value to controle easily this component. <br/>
				<Code>date</Code> : date - Put here the controled value<br/>
				<Titre3>Optional Parameter : </Titre3><br/>
				<Code>label</Code> : string - Write a text before the date. <br/>
</div>
		);
	}
}
const EXEMPLE = `import React, { Component } from 'react';
import { Calendar } from 'gat-ui-react';

export default class CalendarExample extends Component {

  constructor(){
    super()
    this.state = {
      test_calendar:new Date(Date.now())
    }
  }
  //Controle
  change(e,{ date, name }){
  this.setState({ [name]:date });
  }

  render(){
    let { test_calendar } = this.state;

    return <Calendar
      label = 'Date : '
      name = 'test_calendar'
      onChange = {this.change.bind(this)}
      date = {test_calendar}
    />
  }
}`

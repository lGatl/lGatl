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
			date:Date.now(),
			sample:""
		}
	}
	
	//Controle
	change(e,{ value, name }){
		this.setState({ [name]:value });
	}
	
	render(){
		
		let	{ date, sample } = this.state;
		

		return (
			<div>
			<Titre2>Calendar</Titre2><br/>
				Display a date and if you click on, a simple calendar appears to permise the user to choose an other date. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
{`import React, { Component } from 'react';
import { Calendar } from 'gat-ui-react';

export default class CalendarExample extends Component {

  constructor(){
    super()
    this.state = {
      date:Date.now(),
    }
  }
  //Controle
  change(e,{ value, name }){
  this.setState({ [name]:value });
  }

  render(){
    let { date } = this.state;

    return <Calendar
      label = 'Date : '
      name = 'date'
      onChange = {this.change.bind(this)}
      date = {date}
    />
  }}
}`}
					</PCode>
					<Calendar
						label = 'Date : '
						name = 'date'
						onChange = {this.change.bind(this)}
						date = {date}
					/>
				</ExampleFrame>
				<Titre3>Parameters : </Titre3><br/>
				<Code>label</Code> : string - Write a text before the date. <br/>
				<Code>name</Code> : string - Identify your Calendar. <br/>
				<Code>onChange</Code> : function - Controle your calendar with this parameter. A callback return here the name and the value to controle easily this component. <br/>
				<Code>date</Code> : date - Put here the controled value
</div>
		);
	}
}

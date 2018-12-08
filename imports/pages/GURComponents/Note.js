import React, {Component} from "react";
import { Note } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class NoteComponent extends Component {
	constructor(){
		super();
		this.state = {
			test_note:0
		}
	}
	
	//Controle
	change(e,{ note, name }){
		this.setState({ [name]:note });
	}
	
	render(){
		
		let	{ test_note } = this.state;
		
		return (
			<div>
			<Titre2>Note</Titre2><br/>
				A simple Note easy to controle. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
{`
import React, {Component} from "react";
import { Note } from "gat-ui-react";

export default class NoteExemple extends Component {
  constructor(){
    super();
    this.state = {
      test_note:0
    }
  }
  //Controle
  change(e,{ note, name }){
    this.setState({ [name]:note });
  }
  render(){
    
    let { test_note } = this.state;
    return (
      <Note
        name = "test_note"
        note = { test_note }
        onChange = { this.change.bind( this ) }
      />
    );
  }
}
`}
					</PCode>
					<Note
		        name = "test_note"
		        note = { test_note }
		        onChange = { this.change.bind( this ) }
		      />
				</ExampleFrame>
				<Code>this.state.test_note =</Code> { test_note } <br/>
				<Titre3>Parameters : </Titre3><br/>
				<Code>name</Code>: string - Identify your Note. <br/>
				<Code>onChange</Code> : function - Controle your Note with this parameter. She return the name and the note to controle easily this component. <br/>
				<Code>note</Code> : number - Put here the controled note.
</div>
		);
	}
}



import React, { Component } from "react";
import { Popup, Button, Notification } from 'gat-ui-react';
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class AComponent extends Component {

	constructor(){
    super();
    this.state = {
      open:false
    }
  }

  click(){
    let { open } = this.state;
    this.setState({open:!open})
  }
	render(){
		let { open } = this.state;
		return (
			<div>
				<Titre2>Popup</Titre2><br/>
				A Popup displayed flex <br/>
				<Titre3>Exemple </Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}	
					</PCode>
					<div>
		        <Popup style={{flexDirection:"column"}} open = {open}>
		          <div style = {{
		          	display: "flex", 
		          	alignItems:"center", 
		          	flexDirection:"column"
		          }}>
		            <span style ={{margin:10}}>Hello !</span>
		            <Button onClick = {this.click.bind(this)}>
		            	Close
		            </Button>
		          </div>
		        </Popup>
		        <Button onClick = {this.click.bind(this)}>
		        Open Popup
		      </Button>
	      </div>
				</ExampleFrame>
				<Titre3>Children</Titre3><br/>
				Children give the contain of the Popup. <br/>
				By default Popup is displayed as flex and the flex direction is column <br/>
				<Titre3>Parameter</Titre3><br/>
				<Code>open</Code> : Boolean - Control if the Popup must appears  <br/>
				<Titre3>Optional Parameter</Titre3><br/>
				<Code>style</Code> : object - Change the style of this Popup, it will crush the default. <br/>
			</div>	
		)
		
	}
}

const EXEMPLE = `import React, { Component } from "react";
import { Popup, Button } from 'gat-ui-react';
export default class PopupExemple extends Component {
  
  constructor(){
    super();
    this.state = { open:false }
  }
  click(){
    let { open } = this.state;
    this.setState({ open: !open })
  }
  render(){
    let { open } = this.state;
    return (
      <div>
        <Popup style={{flexDirection:"column"}} open = {open}>
          <div style = {{
          	display: "flex", 
          	alignItems:"center", 
          	flexDirection:"column"
          }}>
            <span style ={{margin:10}}>Hello !</span>
            <Button onClick = {this.click.bind(this)}>
            	Close
            </Button>
          </div>
        </Popup>
        <Button onClick = {this.click.bind(this)}>
        Open Popup
      </Button>
      </div> 
    );
  }
}
`

import React, {Component} from "react";
import { Carrousel,Button } from 'gat-ui-react'
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class CarrouselComponent extends Component {
	style(){
		return{
			component:{
				flex:1
			}
		}
	}
	annonces(){
		let { component } = this.style;
			return[
			<div style={{component}}>Component 1</div>, 
			<div style={{component}}>Component 2</div>, 
			<div style={{component}}>Component 3</div> 
			];
		}
	
	render(){
		return (
			<div>
				<Titre2>Carrousel</Titre2><br/>
				A flex component to display three  flex components in a same space <br/>
				<Titre3>Exemple :</Titre3>
				<ExampleFrame>
					<PCode>
{`import React, {Component} from "react";
import { Carrousel,Button } from 'gat-ui-react'

export default class CarrouselComponent extends Component {
  style(){
    return{
      component:{
        flex:1
      }
    }
  }
  annonces(){
    let { component } = this.style;
      return[
        <div style={{component}}>Component 1</div>, 
        <div style={{component}}>Component 2</div>, 
        <div style={{component}}>Component 3</div> 
      ];
    }
  
  render(){
    return (
      <Carrousel tableau={this.annonces()}/>
    );
  }
}`}
					</PCode>
					<Carrousel tableau={this.annonces()}/>
				</ExampleFrame>
				<Titre3>Parameter : </Titre3><br/>
				<Code>tableau</Code> : Array - One array of the three components to display <br/>
			</div>	
			
		);
	}
}



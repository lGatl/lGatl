import React, {Component} from "react";
import { Rating } from 'gat-ui-react';
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class RatingComponent extends Component {
	constructor(){
		super();
		this.state = {
			test_rating:0
		}
	}
	
	//Controle
	change(e,{ rating, name }){
		this.setState({ [name]:rating });
	}
	
	render(){
		
		let	{ test_rating } = this.state;
		
		return (
			<div>
			<Titre2>Rating</Titre2><br/>
				A simple Rating easy to controle. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<Rating
		        name = "test_rating"
		        rating = { test_rating }
		        onChange = { this.change.bind( this ) }
		      />
				</ExampleFrame>
				<Code>this.state.test_rating =</Code> { test_rating } <br/>
				<Titre3>Parameters : </Titre3><br/>
				<Code>name</Code>: string - Identify your Rating. <br/>
				<Code>onChange</Code> : function - Controle your Rating with this parameter. She return the name and the rating to controle easily this component. <br/>
				<Code>rating</Code> : number - Put here the controled rating.
</div>
		);
	}
}
const EXEMPLE = `
import React, {Component} from "react";
import { Rating } from "gat-ui-react";

export default class RatingExemple extends Component {
  constructor(){
    super();
    this.state = {
      test_rating:0
    }
  }
  //Controle
  change(e,{ rating, name }){
    this.setState({ [name]:rating });
  }
  render(){
    
    let { test_rating } = this.state;
    return (
      <Rating
        name = "test_rating"
        rating = { test_rating }
        onChange = { this.change.bind( this ) }
      />
    );
  }
}
`


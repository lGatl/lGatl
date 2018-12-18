import React, { Component } from "react";
import { Img, Segment } from 'gat-ui-react'
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class ImgComponent extends Component {
	render(){
		return (
			<div>
				<Titre2>Img</Titre2><br/>
				A responsive image who can have children <br/>
				<Titre3>Exemple :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}	
					</PCode>
					<Img 
						alt ='image' src='/images/image.png' 
						im_style={{minWidth:50}}
					>
						<div>salut</div>
					</Img>
				</ExampleFrame>
				<Titre3>Children</Titre3><br/>
				If you put children into Img, it will appears on the image<br/>
				<Titre3>Parameter </Titre3><br/>
				<Code>src</Code> : string - src of the image  <br/>
				<Code>alt</Code> : string - alt of the image  <br/>
				<Titre3>Optional Parameter </Titre3><br/>
				<Code>style</Code> : object - Change the style of the container of Img with children <br/>
				<Code>im_style</Code> : object - Change the style of the image of Img <br/>
			</div>	
		)
		
	}
}

const EXEMPLE = `import React, { Component } from "react";
import { Img } from 'gat-ui-react'

export default class ImgExemple extends Component {
  render(){
  return <Img 
            alt ='image' src='/images/image.png' 
            im_style={{minWidth:50}}
          >
            <div>salut</div>
          </Img>
  }
}`




